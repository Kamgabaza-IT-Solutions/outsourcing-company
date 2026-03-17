using Microsoft.AspNetCore.Mvc;
using OutsourceSA.API.Services;

namespace OutsourceSA.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EnquiryController : ControllerBase
{
    private readonly EmailService _email;

    public EnquiryController(EmailService email) => _email = email;

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] EnquiryRequest request, CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Message))
            return BadRequest("Email and message are required.");

        await _email.SendEnquiryAsync(
            request.Name ?? "Unknown",
            request.Email,
            request.Company,
            request.Message,
            ct);

        return Ok();
    }

    public record EnquiryRequest(string? Name, string Email, string? Company, string Message);
}
