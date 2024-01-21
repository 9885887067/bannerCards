// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {bannersObj} = props
  const {headerText, description, className} = bannersObj
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="descr">{description}</p>
      <div>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
