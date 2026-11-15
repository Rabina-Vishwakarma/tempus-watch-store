import SmartImg from "./SmartImg.jsx";

export default function WatchCard({ watch, onOpen }) {
  return (
    <article className="watch-card" onClick={() => onOpen(watch)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onOpen(watch)}>
      <div className="watch-img"><SmartImg src={watch.img} alt={`${watch.brand} ${watch.name}`} loading="lazy" /><span className="tag">{watch.category}</span></div>
      <div className="watch-body">
        <p className="brand">{watch.brand}</p><h3 className="name">{watch.name}</h3>
        <div className="d-flex justify-content-between"><span className="price">${watch.price.toLocaleString()}</span><span className="view">View details</span></div>
      </div>
    </article>
  );
}
