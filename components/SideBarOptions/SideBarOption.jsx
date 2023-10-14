import "./SideBarOption.css";
const SideBarOptions = ({active,Text,Icon}) => {
  return (
    <>
      <div className={`SideBarOptions ${active && "SideBarOptionActive"}`}>        
        <Icon/>
        <h2>{Text}</h2>
      </div>
    </>
  );
};
export default SideBarOptions;