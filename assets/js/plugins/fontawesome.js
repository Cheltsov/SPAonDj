import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesome from '@fortawesome/vue-fontawesome'

import {
  faUser, faBook, faSignOutAlt, faCog, faImage, faRubleSign, faQuestionCircle, faUserCircle,
  faUniversity, faChartLine, faMapMarker,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBars,
  faTimes,
  faSort, faSortUp, faSortDown, faInfo, faCheck, faAngleDown,
  faPlus, faMinus, faPlusCircle, faAngleRight,
  faFileCode, faFileExcel, faFilePdf, faFilePowerpoint, faFilter,
  faChartArea, faCogs, faTable, faEye, faDownload,
  faGraduationCap, faClipboardList
} from "@fortawesome/fontawesome-free-solid/shakable";
import {faLock} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(
  faUser, faLock, faSignOutAlt, faCog, faImage, faRubleSign, faQuestionCircle, faUserCircle,
  faUniversity, faChartLine, faMapMarker,faAngleDoubleLeft,faAngleDoubleRight, faBars,faTimes,
  faSort, faSortUp, faSortDown, faInfo, faCheck, faAngleDown, faPlus, faMinus, faPlusCircle, faAngleRight,
  faFileCode, faFileExcel, faFilePdf, faFilePowerpoint, faFilter, faTable, faEye, faDownload, faChartArea, faCogs,
  faGraduationCap, faClipboardList
)
