<!--
DRAFT FOR ADAM'S REVIEW — NOT PUBLISHED. Do not commit to main or link from the footer until approved.
Prepared 2026-10-09 (Friday QA) from what the code at commit de4d02d actually does.
Items in [[DOUBLE BRACKETS]] must be filled in or confirmed by Adam before publishing.
This is a plain-language draft, not legal advice; have counsel review if the site starts collecting more data.

Evidence used (re-check before publishing if the code changes):
- No analytics or tracking: package.json has only next/react/react-dom; no gtag, GTM, Vercel Analytics,
  Speed Insights, pixels, Clarity, Hotjar, PostHog or Plausible anywhere in app/, components/, content/.
- No first-party cookies: production responses for /, /contact and /for-rental-companies send no Set-Cookie
  header; no localStorage/sessionStorage use in the code.
- Fonts: next/font/google (Geist) is self-hosted at build time, so visitors' browsers don't call Google Fonts.
- /contact form (components/ContactForm.tsx) is NOT connected: submit is intercepted client-side and nothing
  is sent or stored; the page tells the visitor the message was not sent.
- /for-rental-companies embeds a GoHighLevel (LeadConnector) form: iframe from api.leadconnectorhq.com plus
  link.msgsndr.com/js/form_embed.js, with data-cookie-consent="true". This is the only third-party embed and the
  only place visitor-entered data is collected.
- Outbound links: provider "Visit Website" links (rel="noopener noreferrer nofollow") and rentalgrowthsystems.com.
- Hosting: Vercel (standard server/request logs).
- No accounts, sign-in, payments, or newsletter on the site.
-->

# Privacy Policy

**Last updated:** [[EFFECTIVE DATE]]

Event Rental Finder ("Event Rental Finder," "we," "us," or "our") is a directory of event rental companies and planning resources at www.eventrentalfinder.com (the "Site"). The Site is operated by [[LEGAL ENTITY NAME, e.g., "Rental Growth Systems LLC"]] and is part of the Rental Growth Systems network. This policy explains what information the Site collects, how it is used, and the choices you have.

## Information we collect

### Information you give us

- **Featured placement applications.** The "Apply to Be Featured" form on our For Rental Companies page collects the business and contact details you enter, such as [[CONFIRM FIELDS IN THE GHL FORM, e.g., your name, company name, email address, phone number, website, service area and rental categories]]. That form is provided by our form and customer-relationship service, GoHighLevel (LeadConnector), and your submission is sent to and stored in that service on our behalf.
- **Contact page.** The message form on our Contact page is not currently connected. Information typed into it is not sent to us or stored. If we connect it in the future, we will update this policy.

### Information collected automatically

- **Server logs.** Our hosting provider, Vercel, automatically processes standard technical information when you visit, such as your IP address, browser type, the page requested, the referring page and the date and time of the request. This information is used to deliver the Site, keep it secure and troubleshoot problems.
- **No analytics or advertising trackers.** The Site does not currently use analytics tools, advertising pixels or similar tracking technologies.

## Cookies

The Site itself does not set cookies. The embedded GoHighLevel form on the For Rental Companies page is loaded from GoHighLevel's servers and may use cookies or similar technologies to display the form, prevent spam and process your submission. Those technologies are controlled by GoHighLevel and are subject to its privacy policy. You can block or delete cookies through your browser settings; if you do, the embedded form may not work.

## How we use information

We use the information described above to:

- review featured placement applications and follow up with you about featured placement opportunities;
- respond to questions you send us;
- operate, maintain, secure and improve the Site; and
- comply with legal obligations and enforce our Terms of Use.

We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.

## How we share information

We share information only:

- **With service providers** that help us run the Site and our business, including Vercel (hosting) and GoHighLevel/LeadConnector (forms and contact management), who process it on our behalf;
- **Within the Rental Growth Systems network** [[CONFIRM: delete this bullet if applications are not shared across RGS sites or with Rental Growth Systems]], to respond to your application or inquiry;
- **For legal reasons**, if required by law or to protect the rights, property or safety of our users, the public or us; and
- **In a business transfer**, such as a merger, acquisition or sale of assets, subject to this policy.

## Third-party links

The Site links to rental company websites, government and other public sources, and Rental Growth Systems. We don't control those sites, and their own privacy practices apply when you visit them. A listing on Event Rental Finder is not an endorsement of a company's practices.

## Data retention

We keep featured placement applications and related correspondence for as long as needed to evaluate and manage featured placement and our relationship with you, and as required by law. [[CONFIRM RETENTION PERIOD, e.g., "up to 24 months after our last contact"]]. Server logs are retained according to our hosting provider's standard practices.

## Your choices and rights

You can ask us to access, correct or delete personal information you submitted through the Site by contacting us at the address below. Depending on where you live, you may have additional rights under applicable law, and we will respond to requests as that law requires. [[CONFIRM WHETHER ANY STATE PRIVACY LAW APPLIES; at current data volumes it likely does not, but counsel should confirm.]]

## Children's privacy

The Site is intended for adults planning events and for businesses. It is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has submitted information, contact us and we will delete it.

## Security

We use reasonable measures, including HTTPS encryption for the Site, to protect information. No method of transmission or storage is completely secure.

## Changes to this policy

We may update this policy from time to time. We will post the updated version on this page and change the "Last updated" date above.

## Contact us

Questions about this policy or requests about your information can be sent to:

[[LEGAL ENTITY NAME]]
[[PRIVACY CONTACT EMAIL — the site currently has no published email address]]
[[MAILING ADDRESS (optional, recommended)]]
