import * as actionType from './actionType.js';
import * as sideBarActionType from '../../sideBar/store/actionType.js';
import * as headerActionType from '../../header/store/actionType.js';
import { fromJS } from 'immutable';

const filmlist = [
    {
        title:"Spectre (VF)",
        imgUrl:"https://i.ytimg.com/vi/EDC4q5Bw2QE/movieposter.jpg",
        catalogue:"action",
    },{
        title:"Jason",
        imgUrl:"https://i.ytimg.com/vi/GRW2UMSYX4o/movieposter.jpg",
        catalogue:"action",
    },{
        title:"Contagion",
        imgUrl:"https://i.ytimg.com/vi/wMDoUFajq1I/movieposter.jpg",
        catalogue:"amour",
    },{
        title:"La vie",
        imgUrl:"https://i.ytimg.com/vi/04Cx-i2k-8M/movieposter.jpg",
        catalogue:"famille",
    },{
        title:"ROBO",
        imgUrl:"https://i.ytimg.com/vi/W4jt3Gp98jI/movieposter.jpg",
        catalogue:"faction",
    },{
        title:"JOKER",
        imgUrl:"https://i.ytimg.com/vi/UvuS3Q0yzLk/movieposter.jpg",
        catalogue:"horrible",
    },{
        title:"Les Miserables",
        imgUrl:"https://i.ytimg.com/vi/4NVTKmoQ98E/movieposter.jpg",
        catalogue:"action",
    },{
        title:"Inseparable",
        imgUrl:"https://i.ytimg.com/vi/aIVXeqgxyJA/movieposter.jpg",
        catalogue:"faction",
    },{
        title:"Car-Quatre roues",
        imgUrl:"https://i.ytimg.com/vi/_cfMFdsJytA/movieposter.jpg",
        catalogue:"cartoon",
    },{
        title:"Mister Babadook",
        imgUrl:"https://i.ytimg.com/vi/cWnER_z7pwU/movieposter.jpg",
        catalogue:"horrible",
    },{
        title:"La Reine de Neiges",
        imgUrl:"https://i.ytimg.com/vi/5rIxR2KUhEg/movieposter.jpg",
        catalogue:"cartoon",
    },{
        title:"Fast & Furious",
        imgUrl:"https://i.ytimg.com/vi/m0bGgPiCs-k/movieposter.jpg",
        catalogue:"action",
    },{
        title:"FAHIM",
        imgUrl:"https://i.ytimg.com/vi/djiIoX3O_-c/movieposter.jpg",
        catalogue:"famille",
    },{
        title:"Emma",
        imgUrl:"https://i.ytimg.com/vi/E42CvUIcjtA/movieposter.jpg",
        catalogue:"comedy",
    },
]

const defaultState = fromJS({
    totalList: filmlist,
    dislike:[],
    changedList:filmlist,
    chosenTag:["all"],
    display:"4",
    currentPage:1,
});

const filterFilm = function(dislike,filmList){
    if(filmList.length > 0 ){
        let newList=[];
        newList = filmList.filter((item)=>{
            return dislike.indexOf(item.catalogue)<0;
        })
        return newList;
    }
    else return filmList;
}

const chooseFilm = function(choose,filmList){
    let newList = filmList.filter((item)=>{
        return choose.indexOf(item.catalogue) >= 0 ;
    })
    console.log("after filter"+ newList);
    return newList;
}


const searchFilm = function(str,filmList){
    let newList = filmList.filter((item)=>{
        return item.title.toLowerCase().indexOf(str.toLowerCase()) > -1;
    })
    return newList;
}

export default (prevState = defaultState,action)=>{
	switch (action.type) {
        case actionType.HANDLE_DISLIKE:
                return prevState.set("dislike",prevState.get('dislike').push(action.catalogue));
        case actionType.FILTER_LIST:
            {   
                let a = filterFilm(prevState.get("dislike").toJS(),prevState.get("changedList").toJS());
                return prevState.set("changedList",fromJS(a));
            }
        case actionType.ON_CHANGE_DISPLAY:
            return prevState.set("display",action.displayNumber);
        case actionType.CHANGE_PAGE:
            return prevState.set("currentPage",action.pageNumber);
        case headerActionType.SEARCH_FILM:
            return prevState.set("changedList",fromJS(searchFilm(action.value,prevState.get("totalList").toJS())))
        case headerActionType.HANDLE_CLICK:
            {   
                if(action.item === "all") return prevState.set("changedList",prevState.get("totalList"));
                let newList = chooseFilm([action.item],prevState.get("totalList").toJS());
                return prevState.set("changedList",fromJS(newList));
            }
        case sideBarActionType.ADD_LIST:
            {	
                return prevState.set("chosenTag",prevState.get("chosenTag").push(action.item));
            }
        case sideBarActionType.DELETE_LIST:
            {	
                var index = prevState.get("chosenTag").indexOf(action.item);
                return prevState.set("chosenTag",prevState.get("chosenTag").splice(index, 1));
            } 
        case sideBarActionType.UPDATE_LIST:
            {
                let chosenTag = prevState.get("chosenTag").toJS();
                if(chosenTag.length === 0){
                    console.log(1);
                    return prevState.set("changedList",[]);
                }
                if(chosenTag.indexOf("all")!== -1){
                    return prevState.set("changedList",prevState.get("totalList"));
                    
                }else{
                    console.log(3);
                    let newList = chooseFilm(chosenTag,prevState.get("totalList").toJS());
                    return prevState.set("changedList",fromJS(newList));
                }
            }
		default:
			return prevState;
	}
}