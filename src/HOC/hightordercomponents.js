const allTabs = ['/global', '/', '/indiastatewise'];
export const allTabsPropsHoc=({component:Component})=>{
    return (
        <Component allTabs={allTabs} />
    )
}