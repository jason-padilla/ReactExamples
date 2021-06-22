import React, {useState} from 'react'

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState({})
  return(
    <div>
      <header style={{display:"flex"}}>
        {
          props.tabItems.map((tab,i)=>{
            const tabStyles = { border: "solid 2px black", padding: "10px", margin:"10px"};
            if (selectedTab === tab){
              tabStyles.backgroundColor = "black";
              tabStyles.color = "white";
            }
            return <div key={i} onClick={(event)=>setSelectedTab(tab)} style={tabStyles}>
              {tab.name}
            </div>
          })
        }
      </header>
      <main>
        <textarea name="" id="" cols="30" rows="10" value={selectedTab.content}></textarea>
      </main>
    </div>
  )
}

export default Tabs;