

function Chip(props) {

  function ShowAlert(){
    alert('I am being called from functional component');
  }

  return (
    <>
    <div className="chip">
      {props.title}
    </div>
    <button className="btn ml-16" onClick={ShowAlert}>Functional Button!</button>
    </>
  );
}

export default Chip;


