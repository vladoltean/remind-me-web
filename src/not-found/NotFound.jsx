import React from "react";
import {MyRow} from "../custom-components/Components";
import styled from 'styled-components'


export const NotFound = () => {

    const StyledDiv = styled.div`
        display: flex;
        height: 100%;
        width:100%;
        align-items: center;
        justify-content: center;
        
        .content{
          h2{
            font-weight: bold;
          }
          p{
            color: purple;
            font-style: italic;
          }
        }
      
    `;

    return (
        <StyledDiv>
            <div class="content">
                <h2>404 Page Not Found</h2>
                <p>Please contact support if this persists!</p>
            </div>
        </StyledDiv>
    )

};