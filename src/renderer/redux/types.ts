import * as actions from './actionTypes';
import { ModTrack } from "renderer/components/App";

export interface DownloadItem {
    id: string
    progress: number
    module: string
}

export type DownloadsState = DownloadItem[];

export interface UpdateDownloadProgressAction {
    type: typeof actions.UPDATE_DOWNLOAD_PROGRESS
    payload: {
        id: string
        progress: number
        module: string
    }
}

export interface RegisterNewDownloadProgressAction {
    type: typeof actions.REGISTER_NEW_DOWNLOAD
    payload: {
        id: string
        module: string
    }
}

export interface DeleteDownloadAction {
    type: typeof actions.DELETE_DOWNLOAD
    payload: {
        id: string
    }
}

export interface ShowWarningModalState {
    showWarningModal: boolean,
    track: null | ModTrack,
    trackHandler: null | CallableFunction,
}

export interface ShowWarningModalAction {
    type: typeof actions.CALL_WARNING_MODAL
    payload: {
        showWarningModal: boolean,
        track: null | ModTrack,
        trackHandler: null | CallableFunction,
    }
}

export interface qaModeState {
    qaMode: boolean,
}

export interface qaModeAction {
    type: typeof actions.CALL_QA_MODE
    payload: {
        qaMode: boolean,
    }
}

export type DownloadActionType = UpdateDownloadProgressAction | RegisterNewDownloadProgressAction | DeleteDownloadAction

export interface RootStore {
    downloads: DownloadsState
}
