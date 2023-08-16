import "./SectionTitle.css";

function SectionTitle({ title, description }) {
  return (
    <>
      <h2 className="section-title ">{title}</h2>
      <div className="divider"></div>
      <p className="section-description">{description}</p>
    </>
  );
}

export default SectionTitle;
