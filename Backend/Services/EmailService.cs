using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace OutsourceSA.API.Services;

public class EmailService
{
    private readonly IConfiguration _config;

    public EmailService(IConfiguration config) => _config = config;

    public async Task SendEnquiryAsync(string name, string email, string? company, string message, CancellationToken ct = default)
    {
        var smtpHost = _config["Email:SmtpHost"] ?? "smtp.gmail.com";
        var smtpPort = int.Parse(_config["Email:SmtpPort"] ?? "587");
        var username = _config["Email:Username"];
        var password = _config["Email:Password"];
        var toAddress = _config["Email:ToAddress"] ?? username ?? "info@outsourcesa.co.za";

        var mime = new MimeMessage();
        mime.From.Add(MailboxAddress.Parse(username ?? "noreply@outsourcesa.co.za"));
        mime.To.Add(MailboxAddress.Parse(toAddress));
        mime.Subject = $"Enquiry from {name}";
        mime.Body = new TextPart("plain")
        {
            Text = $"Name: {name}\nEmail: {email}\nCompany: {company ?? "(not provided)"}\n\nMessage:\n{message}"
        };

        using var client = new SmtpClient();
        await client.ConnectAsync(smtpHost, smtpPort, SecureSocketOptions.StartTls, ct);
        if (!string.IsNullOrWhiteSpace(username) && !string.IsNullOrWhiteSpace(password))
            await client.AuthenticateAsync(username, password, ct);
        await client.SendAsync(mime, ct);
        await client.DisconnectAsync(true, ct);
    }
}
