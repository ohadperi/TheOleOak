import { useState } from "react";

const photos = [
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/3bd0e0ffe_View06R2.png", caption: "Aerial View — Ole Oak Village" },
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/9af49b64d_Cam_12.jpg", caption: "Community Entrance Gate" },
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/2e5c31bb0_Cam_1_PNG.png", caption: "Home Exterior — Blue Model" },
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/c2ed636d3_Cam_21.jpg", caption: "Home Exterior — Tan Model" },
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/65a973ca9_Cam_3_PNG.png", caption: "Street View — Community Homes" },
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/5786c1e7e_Cam_4_PNG.png", caption: "Clubhouse & Pickleball Court" },
  { url: "https://media.base44.com/images/public/69f428b2367eda2bfee1b69a/a7539bca7_BelleviewLand.png", caption: "Site Plan — Belleview, FL" },
];

const highlights = [
  { icon: "🏗️", title: "Shovel Ready", desc: "Fully permitted & approved. Marion County Site Construction Permit issued Oct 2025." },
  { icon: "🏠", title: "31 Double-Wide Lots", desc: "5.77 acres zoned P-MH. Private roads newly constructed and ready." },
  { icon: "💧", title: "Public Utilities", desc: "City of Belleview water & sewer with lift station. No septic risk." },
  { icon: "📍", title: "Prime Location", desc: "On US-301, minutes from The Villages — one of America's fastest-growing 55+ markets." },
  { icon: "💰", title: "Strong NOI ~65%", desc: "Land lease model — sell the homes, keep the land, collect lot rent forever." },
  { icon: "📈", title: "$3M+ Valuation at Maturity", desc: "Generational wealth asset with growing value and multiple exit strategies." },
];

const permits = [
  "Marion County Site Construction Permit (AR #31223, issued 10/16/2025)",
  "FDOT Driveway Permit (#2024-A-595-00028)",
  "City of Belleview Developer Agreement",
  "City Annexation Agreement (executed)",
  "Utility approvals: water, sewer & lift station",
];

const specs = [
  { label: "Address", value: "11987 S US Hwy 301, Belleview, FL" },
  { label: "Total Lots", value: "31 Double-Wide Lots" },
  { label: "Total Acreage", value: "5.77 Acres" },
  { label: "Zoning", value: "P-MH (Mobile Home Park)" },
  { label: "Utilities", value: "City of Belleview Water & Sewer" },
  { label: "Roads", value: "Private, Newly Constructed" },
  { label: "Target Market", value: "55+ Active Adult Community" },
  { label: "Future Annexation", value: "Executed Agreement with City of Belleview" },
];

export default function OleOakVillage() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/functions/sendOleOakInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {}
    setSubmitted(true);
  };

  const green = "#2d6a4f";
  const gold = "#b5870a";
  const lightGreen = "#e8f5ee";

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#f9f9f6", minHeight: "100vh", color: "#1a1a1a" }}>

      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, #1a3c2a 0%, #2d6a4f 60%, #4a9068 100%)`,
        padding: "60px 24px 48px",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(181,135,10,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "1rem", letterSpacing: "4px", textTransform: "uppercase", color: "#f0c040", marginBottom: "12px", fontFamily: "sans-serif" }}>
            INVESTMENT OPPORTUNITY
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: "bold", margin: "0 0 8px", textShadow: "0 2px 12px rgba(0,0,0,0.3)", lineHeight: 1.15 }}>
            🌳 The Ole Oak Village
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)", opacity: 0.92, margin: "0 0 6px", fontStyle: "italic" }}>
            Premium 55+ Manufactured Housing Community
          </p>
          <p style={{ fontSize: "1.05rem", opacity: 0.8, margin: "0 0 28px", fontFamily: "sans-serif" }}>
            Belleview, Florida · Near The Villages
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["31 Lots", "5.77 Acres", "Shovel Ready", "55+ Community"].map(tag => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50px", padding: "8px 20px", fontSize: "0.9rem", fontFamily: "sans-serif", backdropFilter: "blur(4px)" }}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "32px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ background: "#b5870a", color: "white", padding: "14px 36px", borderRadius: "50px", fontWeight: "bold", fontSize: "1.05rem", textDecoration: "none", fontFamily: "sans-serif", boxShadow: "0 4px 16px rgba(181,135,10,0.4)" }}>
              Request Investment Package
            </a>
            <a href="#gallery" style={{ background: "rgba(255,255,255,0.15)", color: "white", padding: "14px 36px", borderRadius: "50px", fontWeight: "bold", fontSize: "1.05rem", textDecoration: "none", fontFamily: "sans-serif", border: "1px solid rgba(255,255,255,0.4)" }}>
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div style={{ background: "#1a3c2a", padding: "20px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "16px" }}>
          {[
            { val: "31", label: "Lots Available" },
            { val: "5.77", label: "Acres" },
            { val: "~65%", label: "NOI Margin" },
            { val: "$3M+", label: "Est. Valuation at Maturity" },
            { val: "100%", label: "Permitted & Approved" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ color: "#f0c040", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "bold" }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Opportunity Statement */}
        <div style={{ background: "white", borderRadius: "16px", padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", marginBottom: "40px", borderLeft: "5px solid #2d6a4f" }}>
          <h2 style={{ color: green, fontSize: "1.7rem", marginTop: 0 }}>A Rare, Shovel-Ready Opportunity</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.85", color: "#333", margin: "0 0 18px" }}>
            Ole Oak Village is a fully entitled and permitted Manufactured Housing Community (MHC) located in Belleview, Florida — just minutes from <strong>The Villages</strong>, one of the nation's premier 55+ lifestyle destinations.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.85", color: "#333", margin: "0 0 18px" }}>
            With <strong>31 double-wide home sites</strong> across 5.77 acres, this land-lease community offers investors and developers an exceptional entry point into one of real estate's most resilient asset classes. Sell the homes. Keep the land. <strong>Collect lot rent — forever.</strong>
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.85", color: "#333", margin: 0 }}>
            This is not a raw land play. Every permit is in hand. Roads are built. Utilities are connected. <strong>You can break ground immediately.</strong> The hard work is done — now it's time to build wealth.
          </p>
        </div>

        {/* Gallery */}
        <div id="gallery" style={{ marginBottom: "48px" }}>
          <h2 style={{ color: green, fontSize: "1.7rem", marginBottom: "20px", textAlign: "center" }}>Community Illustrations</h2>
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", background: "#111", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px", position: "relative" }}>
            <img src={photos[activePhoto].url} alt={photos[activePhoto].caption} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.6))", padding: "20px 20px 14px", color: "white", fontFamily: "sans-serif", fontSize: "0.9rem" }}>
              {photos[activePhoto].caption}
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {photos.map((p, i) => (
              <div key={i} onClick={() => setActivePhoto(i)} style={{ width: "80px", height: "60px", borderRadius: "8px", overflow: "hidden", cursor: "pointer", border: activePhoto === i ? `3px solid ${green}` : "3px solid transparent", boxShadow: activePhoto === i ? `0 0 0 2px #4a9068` : "none", transition: "all 0.2s", flexShrink: 0 }}>
                <img src={p.url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Investment Highlights */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ color: green, fontSize: "1.7rem", marginBottom: "24px", textAlign: "center" }}>Why Ole Oak Village?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {highlights.map((h) => (
              <div key={h.title} style={{ background: "white", borderRadius: "14px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", borderTop: `4px solid ${green}` }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{h.icon}</div>
                <h3 style={{ color: green, margin: "0 0 8px", fontSize: "1.1rem" }}>{h.title}</h3>
                <p style={{ color: "#555", margin: 0, lineHeight: "1.7", fontSize: "0.95rem", fontFamily: "sans-serif" }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Land Lease Model Explainer */}
        <div style={{ background: `linear-gradient(135deg, #1a3c2a, #2d6a4f)`, borderRadius: "16px", padding: "40px 36px", marginBottom: "48px", color: "white" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: "1.7rem" }}>🏦 The Land Lease Advantage</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", opacity: 0.92, margin: "0 0 16px", fontFamily: "sans-serif" }}>
            In a land-lease community, the developer <strong>retains ownership of the land</strong> and sells only the manufactured homes to residents. Residents pay a monthly lot rent — creating a predictable, recession-resilient income stream.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "24px" }}>
            {[
              { icon: "🏡", text: "Sell homes once, earn lot rent forever" },
              { icon: "📊", text: "~65% NOI margin — best in class" },
              { icon: "🔒", text: "Recession-resistant asset class" },
              { icon: "🌱", text: "Generational wealth with growing land value" },
              { icon: "🚪", text: "Multiple exit strategies: operate, refi, or sell" },
              { icon: "📍", text: "55+ demand corridor — The Villages effect" },
            ].map(item => (
              <div key={item.text} style={{ background: "rgba(255,255,255,0.1)", borderRadius: "10px", padding: "16px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: "0.88rem", fontFamily: "sans-serif", lineHeight: "1.5", opacity: 0.9 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Site Specs */}
        <div style={{ background: "white", borderRadius: "16px", padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", marginBottom: "40px" }}>
          <h2 style={{ color: green, fontSize: "1.7rem", marginTop: 0, marginBottom: "24px" }}>📋 Project Specifications</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0" }}>
            {specs.map((s, i) => (
              <div key={s.label} style={{ padding: "14px 0", borderBottom: "1px solid #eee", display: "flex", gap: "12px" }}>
                <span style={{ fontWeight: "bold", color: "#444", fontFamily: "sans-serif", minWidth: "140px", fontSize: "0.9rem" }}>{s.label}</span>
                <span style={{ color: "#222", fontFamily: "sans-serif", fontSize: "0.9rem" }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Permits */}
        <div style={{ background: lightGreen, borderRadius: "16px", padding: "36px", marginBottom: "48px", border: "1px solid #b7d9c4" }}>
          <h2 style={{ color: green, fontSize: "1.7rem", marginTop: 0, marginBottom: "20px" }}>✅ Fully Entitled & Permitted</h2>
          <p style={{ fontFamily: "sans-serif", color: "#444", margin: "0 0 20px", fontSize: "0.95rem" }}>
            All approvals are in place. This is a true shovel-ready site — no entitlement risk, no waiting.
          </p>
          <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {permits.map(p => (
              <li key={p} style={{ fontFamily: "sans-serif", color: "#333", fontSize: "0.95rem", lineHeight: "1.5" }}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div id="contact" style={{ background: "white", borderRadius: "16px", padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <h2 style={{ color: green, fontSize: "1.7rem", marginTop: 0, textAlign: "center" }}>📩 Request Investment Package</h2>
          <p style={{ textAlign: "center", color: "#666", fontFamily: "sans-serif", marginBottom: "32px", fontSize: "0.95rem" }}>
            Serious inquiries only. Fill in your details and we'll send you the full investment deck, financials, and site plan.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "540px", margin: "0 auto" }}>
              {[
                { key: "name", label: "Full Name *", placeholder: "Your name", type: "text", required: true },
                { key: "email", label: "Email Address *", placeholder: "your@email.com", type: "email", required: true },
                { key: "phone", label: "Phone Number", placeholder: "+1 (555) 000-0000", type: "tel", required: false },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontWeight: "bold", color: "#333", display: "block", marginBottom: "6px", fontFamily: "sans-serif", fontSize: "0.9rem" }}>{f.label}</label>
                  <input
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={formData[f.key]}
                    onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "2px solid #ddd", fontSize: "1rem", boxSizing: "border-box", fontFamily: "sans-serif", outline: "none" }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontWeight: "bold", color: "#333", display: "block", marginBottom: "6px", fontFamily: "sans-serif", fontSize: "0.9rem" }}>Message / Questions</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your investment background or any specific questions..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "2px solid #ddd", fontSize: "1rem", boxSizing: "border-box", fontFamily: "sans-serif", resize: "vertical", outline: "none" }}
                />
              </div>
              <button type="submit" style={{ background: green, color: "white", padding: "16px", borderRadius: "50px", border: "none", fontWeight: "bold", fontSize: "1.05rem", cursor: "pointer", fontFamily: "sans-serif", boxShadow: "0 4px 16px rgba(45,106,79,0.35)" }}>
                Send Request →
              </button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
              <h3 style={{ color: green, margin: "0 0 8px" }}>Thank you!</h3>
              <p style={{ color: "#555", fontFamily: "sans-serif" }}>We'll be in touch shortly with the full investment package.</p>
            </div>
          )}

          {/* Direct Contact */}
          <div style={{ marginTop: "40px", padding: "28px", background: lightGreen, borderRadius: "12px", textAlign: "center" }}>
            <p style={{ fontFamily: "sans-serif", color: "#333", fontWeight: "bold", margin: "0 0 12px", fontSize: "0.95rem" }}>Or reach us directly:</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <a href="tel:2016585953" style={{ color: green, fontFamily: "sans-serif", fontSize: "1rem", textDecoration: "none", fontWeight: "bold" }}>📞 201-658-5953</a>
              <a href="mailto:peri@triplepVenture.com" style={{ color: green, fontFamily: "sans-serif", fontSize: "1rem", textDecoration: "none", fontWeight: "bold" }}>✉️ peri@triplepVenture.com</a>
              <a href="https://wa.me/12016585953" target="_blank" style={{ background: "#25D366", color: "white", padding: "10px 24px", borderRadius: "50px", fontFamily: "sans-serif", fontWeight: "bold", fontSize: "0.95rem", textDecoration: "none" }}>💬 WhatsApp</a>
            </div>
            <p style={{ fontFamily: "sans-serif", color: "#777", fontSize: "0.85rem", margin: "12px 0 0" }}>Triple P Ventures LLC</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ background: "#1a3c2a", color: "rgba(255,255,255,0.6)", textAlign: "center", padding: "24px", fontFamily: "sans-serif", fontSize: "0.82rem" }}>
        © 2026 Triple P Ventures LLC · 301 MHC LLC · Ole Oak Village · Belleview, Florida
        <br />
        <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>This page is for informational purposes only. Investment returns are projections and not guaranteed.</span>
      </div>

    </div>
  );
}
