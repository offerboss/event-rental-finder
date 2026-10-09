import Script from "next/script";

type GhlFormProps = {
  formId: string;
  formName: string;
  /** Used as both the iframe's own height and the data-height GHL reads on load. */
  height: number;
};

// Generic GoHighLevel inline form embed. GHL's own form_embed.js script
// resizes the iframe after it loads based on the form's real content height;
// `height` is just the initial value used to avoid a layout jump before that
// script runs, so the wrapping card should never constrain it further.
export default function GhlForm({ formId, formName, height }: GhlFormProps) {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: 8 }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={height}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={formName}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
