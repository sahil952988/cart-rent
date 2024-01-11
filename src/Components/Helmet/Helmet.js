


export const Helmet = (props) => {
  document.title = "Rent Car Service" + props.title;

  return (
    <div>{props.children}</div>
  )
}