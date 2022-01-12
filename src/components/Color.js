import React, { useState } from "react";

var options = [
            {
                label : 'Lime',
                value : 'lime'
            },
            {
                label : 'Lavender',
                value : 'lavender'
            },
            {
                label : 'Crimson',
                value : 'crimson'
            },
            {
                label : 'Darkblue',
                value : 'darkblue'
            },
            {
                label : 'Teal',
                value : 'teal'
            },
            {    
                label : 'Rebecca Purple',
                value : 'rebeccapurple'
            },
            {
                label : 'Ghost White',
                value : 'ghostwhite'
            },
            {
                label : 'Aqua Marine',
                value : 'aquamarine'
            },
            {
                label : 'Alice Blue',
                value : 'aliceblue'
            }
    ];

var showcolor='lime';
var first=false;
var bg="lime"

const Color = (props) => {
    const [colors, setColors] = useState('lime');
    function color()
    {
        if(first===false)
        {
            for(let i=0;i<options.length;i++)
            {
                var division=document.createElement('div');
                division.setAttribute("class", "Div1");
                division.setAttribute("id", "ele"+i);
                var c=document.createElement('button');
                c.innerHTML=options[i].label;
                division.appendChild(c);
                document.getElementById('color-opt').appendChild(division);
                division.onclick = function () {
                    setColors(options[i].value)
                };
            }
            first=true;
        }
        else
        {
            var list = document.getElementById("color-opt");
            for(let i=0;i<9;i++)
            {
                let j=0;
                list.removeChild(list.childNodes[j]);
            }
            first=false;
        }
    }

    return (
        <div>
        <div id="color" className="color"><button onClick={color} className="mainbtn">{showcolor} <i class="fas fa-chevron-up"></i></button></div>
        <div id="color-opt" className="color-opt"></div>
        <div id="bg" className="bg"  style={{background: colors}}></div>
        </div>
    );
    }

export default Color
