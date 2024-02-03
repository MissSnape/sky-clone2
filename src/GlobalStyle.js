import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@keyframes pulse-point {
	0% {
		transform: scale(0.50);
	}
	
	70% {
		transform: scale(1);
	}
	
	100% {
		transform: scale(0.50);
	}
}

.pulse-point {
	box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
	animation: pulse-point  1s infinite;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  //-------------------------------//
  
  // ========== fonts ========
  @font-face {
    font-family: 'StratosSkyeng';
    src:
      local('StratosSkyeng'),
      local('StratosSkyeng'),
      url('../public/fonts/Stratos-Regular.woff2') format('woff2'),
      url('../public/fonts/Stratos-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  //--------------------------
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #ffffff;
  }
  
  // ========== hover ========
  ._btn-text:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  
  ._btn-icon:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  
  // ========== activ ========
  
  ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  
  ._btn-icon:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  .filter_point{
    background-color: #ad61ff;
    width: 26px;
    height: 26px;
    border-radius: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    left: 220px;
    &__text {
      font-size: 13px;
    }
  }
  .filter_point_genre{
    background-color: #ad61ff;
    width: 26px;
    height: 26px;
    border-radius: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    left: 320px;
    &__text {
      font-size: 13px;
    }
  }

  .filter_point_year{
    background-color: #ad61ff;
    width: 26px;
    height: 26px;
    border-radius: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    left: 472px;
    &__text {
      font-size: 13px;
    }
  }
  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  
  // =================== main ====================//
  
   .filter {
     &__button {
     &_clicked {
       border-color: #d9b6ff;
       color: #d9b6ff;
     }
   }
 }
  
  
`;
