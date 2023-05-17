import{s as e,a as s,j as n,L as l}from"./index-2df86a3c.js";const d=e.ul`
	padding: 60px 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`,m=e.li`
	width: 200px;
`,p=({movies:i,fromPage:r})=>s(d,{children:i.map(({title:o,id:t,poster_path:a})=>s(m,{children:n(l,{to:`/movies/${t}`,state:{from:r},children:[s("img",{src:`https://image.tmdb.org/t/p/w500${a}`,alt:"movie poster",width:"200"}),o]})},t))});p.propTypes={};p.defaultProps={};export{p as M};
