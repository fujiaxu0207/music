import * as actionTypes from './contants';
import { getSongDetail } from "../../service/play";

const changeCurrentSongAction = (res)=>({
    type:actionTypes.CHANGE_CURRENT_SONG,
    currentSong:res.songs[0]
});

export const getSongDetailAction = (ids) => {
    return (dispatch) => {
        getSongDetail(ids).then((res) => {
            // console.log(res.songs[0]);
            dispatch(changeCurrentSongAction(res))
        });
    };
};