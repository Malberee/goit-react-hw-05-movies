import{s as e,u,r as d,j as l,a as r,O as m}from"./index-2df86a3c.js";import{a as x}from"./axios-4a70c6fc.js";import{M as g}from"./MoviesList-c92e83a7.js";const v="3cfc4cc3ed7c09ed117ed148c7a04c75",y=async s=>{const t=await x.get(`https://api.themoviedb.org/3/search/movie?api_key=${v}&query=${s}`);return console.log(t.data.results),t.data.results},S=e.div``,b=e.form``,w=e.input`
	padding: 10px;
	width: 300px;
	border-radius: 10px 0px 0px 10px;
	border-color: transparent;
`,M=e.button`
	padding: 10px;
	border-radius: 0px 10px 10px 0px;
	border-color: transparent;
`;e.ul`
padding-top: 60px;
	display: flex;
    justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`;e.li`
	width: 200px;
`;const i=()=>{const[s,t]=u(),[c,h]=d.useState(),[f,p]=d.useState(!1);return l(S,{children:[l(b,{onSubmit:a=>{a.preventDefault(),a.currentTarget.reset();async function o(){try{p(!0);const n=await y(s.get("q"));h(n)}catch(n){console.log(n)}finally{p(!1)}}o()},children:[r(w,{type:"text",onChange:a=>{const o=a.target.value;t({q:o})}}),r(M,{type:"submit",children:"Search"})]}),c&&r(g,{movies:c,fromPage:"/movies"}),f&&r(m,{height:80,width:80,color:"#ffffff",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#ffffff",strokeWidth:2,strokeWidthSecondary:2})]})};i.propTypes={};i.defaultProps={};const I=i;export{I as default};
