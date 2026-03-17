# OutsourceSA MVP

Clean, simple MVP: 6-page Angular site + .NET 8 API with a single email endpoint.

## Structure

```
outsourcing-company/
├── Backend/          # .NET 8 API
│   ├── Controllers/
│   │   └── EnquiryController.cs
│   ├── Services/
│   │   └── EmailService.cs
│   ├── Program.cs
│   └── appsettings.json
│
└── Frontend/         # Angular (standalone)
    └── src/app/
        ├── pages/    # Home, About, Services, Pricing, FAQ, Contact
        └── shared/
            └── layout/
```

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/enquiry | Sends enquiry email (name, email, company, message) |

## Setup

### Backend

1. Configure email in `Backend/appsettings.json`:
   ```json
   "Email": {
     "SmtpHost": "smtp.gmail.com",
     "SmtpPort": "587",
     "Username": "your@gmail.com",
     "Password": "your-app-password",
     "ToAddress": "info@outsourcesa.co.za"
   }
   ```

2. Run:
   ```bash
   cd Backend && dotnet run
   ```
   API: http://localhost:5128

### Frontend

```bash
cd Frontend && npm install && npm start
```
App: http://localhost:4200

## Contact Form Flow

Contact page form → POST /api/enquiry → EmailService (MailKit/SMTP) → 200 OK
