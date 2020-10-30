/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2927.0, "minX": 0.0, "maxY": 24243.0, "series": [{"data": [[0.0, 2927.0], [0.1, 2927.0], [0.2, 2927.0], [0.3, 2927.0], [0.4, 2927.0], [0.5, 2927.0], [0.6, 2927.0], [0.7, 2927.0], [0.8, 2927.0], [0.9, 2927.0], [1.0, 2927.0], [1.1, 2927.0], [1.2, 2927.0], [1.3, 2927.0], [1.4, 2927.0], [1.5, 2927.0], [1.6, 2927.0], [1.7, 2927.0], [1.8, 2927.0], [1.9, 2927.0], [2.0, 2927.0], [2.1, 2927.0], [2.2, 2927.0], [2.3, 2927.0], [2.4, 2927.0], [2.5, 2927.0], [2.6, 2927.0], [2.7, 2927.0], [2.8, 2927.0], [2.9, 2927.0], [3.0, 2927.0], [3.1, 2927.0], [3.2, 2927.0], [3.3, 2927.0], [3.4, 5222.0], [3.5, 5222.0], [3.6, 5222.0], [3.7, 5222.0], [3.8, 5222.0], [3.9, 5222.0], [4.0, 5222.0], [4.1, 5222.0], [4.2, 5222.0], [4.3, 5222.0], [4.4, 5222.0], [4.5, 5222.0], [4.6, 5222.0], [4.7, 5222.0], [4.8, 5222.0], [4.9, 5222.0], [5.0, 5222.0], [5.1, 5222.0], [5.2, 5222.0], [5.3, 5222.0], [5.4, 5222.0], [5.5, 5222.0], [5.6, 5222.0], [5.7, 5222.0], [5.8, 5222.0], [5.9, 5222.0], [6.0, 5222.0], [6.1, 5222.0], [6.2, 5222.0], [6.3, 5222.0], [6.4, 5222.0], [6.5, 5222.0], [6.6, 5222.0], [6.7, 7565.0], [6.8, 7565.0], [6.9, 7565.0], [7.0, 7565.0], [7.1, 7565.0], [7.2, 7565.0], [7.3, 7565.0], [7.4, 7565.0], [7.5, 7565.0], [7.6, 7565.0], [7.7, 7565.0], [7.8, 7565.0], [7.9, 7565.0], [8.0, 7565.0], [8.1, 7565.0], [8.2, 7565.0], [8.3, 7565.0], [8.4, 7565.0], [8.5, 7565.0], [8.6, 7565.0], [8.7, 7565.0], [8.8, 7565.0], [8.9, 7565.0], [9.0, 7565.0], [9.1, 7565.0], [9.2, 7565.0], [9.3, 7565.0], [9.4, 7565.0], [9.5, 7565.0], [9.6, 7565.0], [9.7, 7565.0], [9.8, 7565.0], [9.9, 7565.0], [10.0, 9842.0], [10.1, 9842.0], [10.2, 9842.0], [10.3, 9842.0], [10.4, 9842.0], [10.5, 9842.0], [10.6, 9842.0], [10.7, 9842.0], [10.8, 9842.0], [10.9, 9842.0], [11.0, 9842.0], [11.1, 9842.0], [11.2, 9842.0], [11.3, 9842.0], [11.4, 9842.0], [11.5, 9842.0], [11.6, 9842.0], [11.7, 9842.0], [11.8, 9842.0], [11.9, 9842.0], [12.0, 9842.0], [12.1, 9842.0], [12.2, 9842.0], [12.3, 9842.0], [12.4, 9842.0], [12.5, 9842.0], [12.6, 9842.0], [12.7, 9842.0], [12.8, 9842.0], [12.9, 9842.0], [13.0, 9842.0], [13.1, 9842.0], [13.2, 9842.0], [13.3, 9842.0], [13.4, 12083.0], [13.5, 12083.0], [13.6, 12083.0], [13.7, 12083.0], [13.8, 12083.0], [13.9, 12083.0], [14.0, 12083.0], [14.1, 12083.0], [14.2, 12083.0], [14.3, 12083.0], [14.4, 12083.0], [14.5, 12083.0], [14.6, 12083.0], [14.7, 12083.0], [14.8, 12083.0], [14.9, 12083.0], [15.0, 12083.0], [15.1, 12083.0], [15.2, 12083.0], [15.3, 12083.0], [15.4, 12083.0], [15.5, 12083.0], [15.6, 12083.0], [15.7, 12083.0], [15.8, 12083.0], [15.9, 12083.0], [16.0, 12083.0], [16.1, 12083.0], [16.2, 12083.0], [16.3, 12083.0], [16.4, 12083.0], [16.5, 12083.0], [16.6, 12083.0], [16.7, 14325.0], [16.8, 14325.0], [16.9, 14325.0], [17.0, 14325.0], [17.1, 14325.0], [17.2, 14325.0], [17.3, 14325.0], [17.4, 14325.0], [17.5, 14325.0], [17.6, 14325.0], [17.7, 14325.0], [17.8, 14325.0], [17.9, 14325.0], [18.0, 14325.0], [18.1, 14325.0], [18.2, 14325.0], [18.3, 14325.0], [18.4, 14325.0], [18.5, 14325.0], [18.6, 14325.0], [18.7, 14325.0], [18.8, 14325.0], [18.9, 14325.0], [19.0, 14325.0], [19.1, 14325.0], [19.2, 14325.0], [19.3, 14325.0], [19.4, 14325.0], [19.5, 14325.0], [19.6, 14325.0], [19.7, 14325.0], [19.8, 14325.0], [19.9, 14325.0], [20.0, 16695.0], [20.1, 16695.0], [20.2, 16695.0], [20.3, 16695.0], [20.4, 16695.0], [20.5, 16695.0], [20.6, 16695.0], [20.7, 16695.0], [20.8, 16695.0], [20.9, 16695.0], [21.0, 16695.0], [21.1, 16695.0], [21.2, 16695.0], [21.3, 16695.0], [21.4, 16695.0], [21.5, 16695.0], [21.6, 16695.0], [21.7, 16695.0], [21.8, 16695.0], [21.9, 16695.0], [22.0, 16695.0], [22.1, 16695.0], [22.2, 16695.0], [22.3, 16695.0], [22.4, 16695.0], [22.5, 16695.0], [22.6, 16695.0], [22.7, 16695.0], [22.8, 16695.0], [22.9, 16695.0], [23.0, 16695.0], [23.1, 16695.0], [23.2, 16695.0], [23.3, 16695.0], [23.4, 19152.0], [23.5, 19152.0], [23.6, 19152.0], [23.7, 19152.0], [23.8, 19152.0], [23.9, 19152.0], [24.0, 19152.0], [24.1, 19152.0], [24.2, 19152.0], [24.3, 19152.0], [24.4, 19152.0], [24.5, 19152.0], [24.6, 19152.0], [24.7, 19152.0], [24.8, 19152.0], [24.9, 19152.0], [25.0, 19152.0], [25.1, 19152.0], [25.2, 19152.0], [25.3, 19152.0], [25.4, 19152.0], [25.5, 19152.0], [25.6, 19152.0], [25.7, 19152.0], [25.8, 19152.0], [25.9, 19152.0], [26.0, 19152.0], [26.1, 19152.0], [26.2, 19152.0], [26.3, 19152.0], [26.4, 19152.0], [26.5, 19152.0], [26.6, 19152.0], [26.7, 21367.0], [26.8, 21367.0], [26.9, 21367.0], [27.0, 21367.0], [27.1, 21367.0], [27.2, 21367.0], [27.3, 21367.0], [27.4, 21367.0], [27.5, 21367.0], [27.6, 21367.0], [27.7, 21367.0], [27.8, 21367.0], [27.9, 21367.0], [28.0, 21367.0], [28.1, 21367.0], [28.2, 21367.0], [28.3, 21367.0], [28.4, 21367.0], [28.5, 21367.0], [28.6, 21367.0], [28.7, 21367.0], [28.8, 21367.0], [28.9, 21367.0], [29.0, 21367.0], [29.1, 21367.0], [29.2, 21367.0], [29.3, 21367.0], [29.4, 21367.0], [29.5, 21367.0], [29.6, 21367.0], [29.7, 21367.0], [29.8, 21367.0], [29.9, 21367.0], [30.0, 23409.0], [30.1, 23409.0], [30.2, 23409.0], [30.3, 23409.0], [30.4, 23409.0], [30.5, 23409.0], [30.6, 23409.0], [30.7, 23409.0], [30.8, 23409.0], [30.9, 23409.0], [31.0, 23409.0], [31.1, 23409.0], [31.2, 23409.0], [31.3, 23409.0], [31.4, 23409.0], [31.5, 23409.0], [31.6, 23409.0], [31.7, 23409.0], [31.8, 23409.0], [31.9, 23409.0], [32.0, 23409.0], [32.1, 23409.0], [32.2, 23409.0], [32.3, 23409.0], [32.4, 23409.0], [32.5, 23409.0], [32.6, 23409.0], [32.7, 23409.0], [32.8, 23409.0], [32.9, 23409.0], [33.0, 23409.0], [33.1, 23409.0], [33.2, 23409.0], [33.3, 23409.0], [33.4, 23422.0], [33.5, 23422.0], [33.6, 23422.0], [33.7, 23422.0], [33.8, 23422.0], [33.9, 23422.0], [34.0, 23422.0], [34.1, 23422.0], [34.2, 23422.0], [34.3, 23422.0], [34.4, 23422.0], [34.5, 23422.0], [34.6, 23422.0], [34.7, 23422.0], [34.8, 23422.0], [34.9, 23422.0], [35.0, 23422.0], [35.1, 23422.0], [35.2, 23422.0], [35.3, 23422.0], [35.4, 23422.0], [35.5, 23422.0], [35.6, 23422.0], [35.7, 23422.0], [35.8, 23422.0], [35.9, 23422.0], [36.0, 23422.0], [36.1, 23422.0], [36.2, 23422.0], [36.3, 23422.0], [36.4, 23422.0], [36.5, 23422.0], [36.6, 23422.0], [36.7, 23459.0], [36.8, 23459.0], [36.9, 23459.0], [37.0, 23459.0], [37.1, 23459.0], [37.2, 23459.0], [37.3, 23459.0], [37.4, 23459.0], [37.5, 23459.0], [37.6, 23459.0], [37.7, 23459.0], [37.8, 23459.0], [37.9, 23459.0], [38.0, 23459.0], [38.1, 23459.0], [38.2, 23459.0], [38.3, 23459.0], [38.4, 23459.0], [38.5, 23459.0], [38.6, 23459.0], [38.7, 23459.0], [38.8, 23459.0], [38.9, 23459.0], [39.0, 23459.0], [39.1, 23459.0], [39.2, 23459.0], [39.3, 23459.0], [39.4, 23459.0], [39.5, 23459.0], [39.6, 23459.0], [39.7, 23459.0], [39.8, 23459.0], [39.9, 23459.0], [40.0, 23556.0], [40.1, 23556.0], [40.2, 23556.0], [40.3, 23556.0], [40.4, 23556.0], [40.5, 23556.0], [40.6, 23556.0], [40.7, 23556.0], [40.8, 23556.0], [40.9, 23556.0], [41.0, 23556.0], [41.1, 23556.0], [41.2, 23556.0], [41.3, 23556.0], [41.4, 23556.0], [41.5, 23556.0], [41.6, 23556.0], [41.7, 23556.0], [41.8, 23556.0], [41.9, 23556.0], [42.0, 23556.0], [42.1, 23556.0], [42.2, 23556.0], [42.3, 23556.0], [42.4, 23556.0], [42.5, 23556.0], [42.6, 23556.0], [42.7, 23556.0], [42.8, 23556.0], [42.9, 23556.0], [43.0, 23556.0], [43.1, 23556.0], [43.2, 23556.0], [43.3, 23556.0], [43.4, 23561.0], [43.5, 23561.0], [43.6, 23561.0], [43.7, 23561.0], [43.8, 23561.0], [43.9, 23561.0], [44.0, 23561.0], [44.1, 23561.0], [44.2, 23561.0], [44.3, 23561.0], [44.4, 23561.0], [44.5, 23561.0], [44.6, 23561.0], [44.7, 23561.0], [44.8, 23561.0], [44.9, 23561.0], [45.0, 23561.0], [45.1, 23561.0], [45.2, 23561.0], [45.3, 23561.0], [45.4, 23561.0], [45.5, 23561.0], [45.6, 23561.0], [45.7, 23561.0], [45.8, 23561.0], [45.9, 23561.0], [46.0, 23561.0], [46.1, 23561.0], [46.2, 23561.0], [46.3, 23561.0], [46.4, 23561.0], [46.5, 23561.0], [46.6, 23561.0], [46.7, 23581.0], [46.8, 23581.0], [46.9, 23581.0], [47.0, 23581.0], [47.1, 23581.0], [47.2, 23581.0], [47.3, 23581.0], [47.4, 23581.0], [47.5, 23581.0], [47.6, 23581.0], [47.7, 23581.0], [47.8, 23581.0], [47.9, 23581.0], [48.0, 23581.0], [48.1, 23581.0], [48.2, 23581.0], [48.3, 23581.0], [48.4, 23581.0], [48.5, 23581.0], [48.6, 23581.0], [48.7, 23581.0], [48.8, 23581.0], [48.9, 23581.0], [49.0, 23581.0], [49.1, 23581.0], [49.2, 23581.0], [49.3, 23581.0], [49.4, 23581.0], [49.5, 23581.0], [49.6, 23581.0], [49.7, 23581.0], [49.8, 23581.0], [49.9, 23581.0], [50.0, 23581.0], [50.1, 23622.0], [50.2, 23622.0], [50.3, 23622.0], [50.4, 23622.0], [50.5, 23622.0], [50.6, 23622.0], [50.7, 23622.0], [50.8, 23622.0], [50.9, 23622.0], [51.0, 23622.0], [51.1, 23622.0], [51.2, 23622.0], [51.3, 23622.0], [51.4, 23622.0], [51.5, 23622.0], [51.6, 23622.0], [51.7, 23622.0], [51.8, 23622.0], [51.9, 23622.0], [52.0, 23622.0], [52.1, 23622.0], [52.2, 23622.0], [52.3, 23622.0], [52.4, 23622.0], [52.5, 23622.0], [52.6, 23622.0], [52.7, 23622.0], [52.8, 23622.0], [52.9, 23622.0], [53.0, 23622.0], [53.1, 23622.0], [53.2, 23622.0], [53.3, 23622.0], [53.4, 23634.0], [53.5, 23634.0], [53.6, 23634.0], [53.7, 23634.0], [53.8, 23634.0], [53.9, 23634.0], [54.0, 23634.0], [54.1, 23634.0], [54.2, 23634.0], [54.3, 23634.0], [54.4, 23634.0], [54.5, 23634.0], [54.6, 23634.0], [54.7, 23634.0], [54.8, 23634.0], [54.9, 23634.0], [55.0, 23634.0], [55.1, 23634.0], [55.2, 23634.0], [55.3, 23634.0], [55.4, 23634.0], [55.5, 23634.0], [55.6, 23634.0], [55.7, 23634.0], [55.8, 23634.0], [55.9, 23634.0], [56.0, 23634.0], [56.1, 23634.0], [56.2, 23634.0], [56.3, 23634.0], [56.4, 23634.0], [56.5, 23634.0], [56.6, 23634.0], [56.7, 23677.0], [56.8, 23677.0], [56.9, 23677.0], [57.0, 23677.0], [57.1, 23677.0], [57.2, 23677.0], [57.3, 23677.0], [57.4, 23677.0], [57.5, 23677.0], [57.6, 23677.0], [57.7, 23677.0], [57.8, 23677.0], [57.9, 23677.0], [58.0, 23677.0], [58.1, 23677.0], [58.2, 23677.0], [58.3, 23677.0], [58.4, 23677.0], [58.5, 23677.0], [58.6, 23677.0], [58.7, 23677.0], [58.8, 23677.0], [58.9, 23677.0], [59.0, 23677.0], [59.1, 23677.0], [59.2, 23677.0], [59.3, 23677.0], [59.4, 23677.0], [59.5, 23677.0], [59.6, 23677.0], [59.7, 23677.0], [59.8, 23677.0], [59.9, 23677.0], [60.0, 23677.0], [60.1, 23690.0], [60.2, 23690.0], [60.3, 23690.0], [60.4, 23690.0], [60.5, 23690.0], [60.6, 23690.0], [60.7, 23690.0], [60.8, 23690.0], [60.9, 23690.0], [61.0, 23690.0], [61.1, 23690.0], [61.2, 23690.0], [61.3, 23690.0], [61.4, 23690.0], [61.5, 23690.0], [61.6, 23690.0], [61.7, 23690.0], [61.8, 23690.0], [61.9, 23690.0], [62.0, 23690.0], [62.1, 23690.0], [62.2, 23690.0], [62.3, 23690.0], [62.4, 23690.0], [62.5, 23690.0], [62.6, 23690.0], [62.7, 23690.0], [62.8, 23690.0], [62.9, 23690.0], [63.0, 23690.0], [63.1, 23690.0], [63.2, 23690.0], [63.3, 23690.0], [63.4, 23711.0], [63.5, 23711.0], [63.6, 23711.0], [63.7, 23711.0], [63.8, 23711.0], [63.9, 23711.0], [64.0, 23711.0], [64.1, 23711.0], [64.2, 23711.0], [64.3, 23711.0], [64.4, 23711.0], [64.5, 23711.0], [64.6, 23711.0], [64.7, 23711.0], [64.8, 23711.0], [64.9, 23711.0], [65.0, 23711.0], [65.1, 23711.0], [65.2, 23711.0], [65.3, 23711.0], [65.4, 23711.0], [65.5, 23711.0], [65.6, 23711.0], [65.7, 23711.0], [65.8, 23711.0], [65.9, 23711.0], [66.0, 23711.0], [66.1, 23711.0], [66.2, 23711.0], [66.3, 23711.0], [66.4, 23711.0], [66.5, 23711.0], [66.6, 23711.0], [66.7, 23736.0], [66.8, 23736.0], [66.9, 23736.0], [67.0, 23736.0], [67.1, 23736.0], [67.2, 23736.0], [67.3, 23736.0], [67.4, 23736.0], [67.5, 23736.0], [67.6, 23736.0], [67.7, 23736.0], [67.8, 23736.0], [67.9, 23736.0], [68.0, 23736.0], [68.1, 23736.0], [68.2, 23736.0], [68.3, 23736.0], [68.4, 23736.0], [68.5, 23736.0], [68.6, 23736.0], [68.7, 23736.0], [68.8, 23736.0], [68.9, 23736.0], [69.0, 23736.0], [69.1, 23736.0], [69.2, 23736.0], [69.3, 23736.0], [69.4, 23736.0], [69.5, 23736.0], [69.6, 23736.0], [69.7, 23736.0], [69.8, 23736.0], [69.9, 23736.0], [70.0, 23736.0], [70.1, 23767.0], [70.2, 23767.0], [70.3, 23767.0], [70.4, 23767.0], [70.5, 23767.0], [70.6, 23767.0], [70.7, 23767.0], [70.8, 23767.0], [70.9, 23767.0], [71.0, 23767.0], [71.1, 23767.0], [71.2, 23767.0], [71.3, 23767.0], [71.4, 23767.0], [71.5, 23767.0], [71.6, 23767.0], [71.7, 23767.0], [71.8, 23767.0], [71.9, 23767.0], [72.0, 23767.0], [72.1, 23767.0], [72.2, 23767.0], [72.3, 23767.0], [72.4, 23767.0], [72.5, 23767.0], [72.6, 23767.0], [72.7, 23767.0], [72.8, 23767.0], [72.9, 23767.0], [73.0, 23767.0], [73.1, 23767.0], [73.2, 23767.0], [73.3, 23767.0], [73.4, 23772.0], [73.5, 23772.0], [73.6, 23772.0], [73.7, 23772.0], [73.8, 23772.0], [73.9, 23772.0], [74.0, 23772.0], [74.1, 23772.0], [74.2, 23772.0], [74.3, 23772.0], [74.4, 23772.0], [74.5, 23772.0], [74.6, 23772.0], [74.7, 23772.0], [74.8, 23772.0], [74.9, 23772.0], [75.0, 23772.0], [75.1, 23772.0], [75.2, 23772.0], [75.3, 23772.0], [75.4, 23772.0], [75.5, 23772.0], [75.6, 23772.0], [75.7, 23772.0], [75.8, 23772.0], [75.9, 23772.0], [76.0, 23772.0], [76.1, 23772.0], [76.2, 23772.0], [76.3, 23772.0], [76.4, 23772.0], [76.5, 23772.0], [76.6, 23772.0], [76.7, 23779.0], [76.8, 23779.0], [76.9, 23779.0], [77.0, 23779.0], [77.1, 23779.0], [77.2, 23779.0], [77.3, 23779.0], [77.4, 23779.0], [77.5, 23779.0], [77.6, 23779.0], [77.7, 23779.0], [77.8, 23779.0], [77.9, 23779.0], [78.0, 23779.0], [78.1, 23779.0], [78.2, 23779.0], [78.3, 23779.0], [78.4, 23779.0], [78.5, 23779.0], [78.6, 23779.0], [78.7, 23779.0], [78.8, 23779.0], [78.9, 23779.0], [79.0, 23779.0], [79.1, 23779.0], [79.2, 23779.0], [79.3, 23779.0], [79.4, 23779.0], [79.5, 23779.0], [79.6, 23779.0], [79.7, 23779.0], [79.8, 23779.0], [79.9, 23779.0], [80.0, 23842.0], [80.1, 23842.0], [80.2, 23842.0], [80.3, 23842.0], [80.4, 23842.0], [80.5, 23842.0], [80.6, 23842.0], [80.7, 23842.0], [80.8, 23842.0], [80.9, 23842.0], [81.0, 23842.0], [81.1, 23842.0], [81.2, 23842.0], [81.3, 23842.0], [81.4, 23842.0], [81.5, 23842.0], [81.6, 23842.0], [81.7, 23842.0], [81.8, 23842.0], [81.9, 23842.0], [82.0, 23842.0], [82.1, 23842.0], [82.2, 23842.0], [82.3, 23842.0], [82.4, 23842.0], [82.5, 23842.0], [82.6, 23842.0], [82.7, 23842.0], [82.8, 23842.0], [82.9, 23842.0], [83.0, 23842.0], [83.1, 23842.0], [83.2, 23842.0], [83.3, 23842.0], [83.4, 23886.0], [83.5, 23886.0], [83.6, 23886.0], [83.7, 23886.0], [83.8, 23886.0], [83.9, 23886.0], [84.0, 23886.0], [84.1, 23886.0], [84.2, 23886.0], [84.3, 23886.0], [84.4, 23886.0], [84.5, 23886.0], [84.6, 23886.0], [84.7, 23886.0], [84.8, 23886.0], [84.9, 23886.0], [85.0, 23886.0], [85.1, 23886.0], [85.2, 23886.0], [85.3, 23886.0], [85.4, 23886.0], [85.5, 23886.0], [85.6, 23886.0], [85.7, 23886.0], [85.8, 23886.0], [85.9, 23886.0], [86.0, 23886.0], [86.1, 23886.0], [86.2, 23886.0], [86.3, 23886.0], [86.4, 23886.0], [86.5, 23886.0], [86.6, 23886.0], [86.7, 23894.0], [86.8, 23894.0], [86.9, 23894.0], [87.0, 23894.0], [87.1, 23894.0], [87.2, 23894.0], [87.3, 23894.0], [87.4, 23894.0], [87.5, 23894.0], [87.6, 23894.0], [87.7, 23894.0], [87.8, 23894.0], [87.9, 23894.0], [88.0, 23894.0], [88.1, 23894.0], [88.2, 23894.0], [88.3, 23894.0], [88.4, 23894.0], [88.5, 23894.0], [88.6, 23894.0], [88.7, 23894.0], [88.8, 23894.0], [88.9, 23894.0], [89.0, 23894.0], [89.1, 23894.0], [89.2, 23894.0], [89.3, 23894.0], [89.4, 23894.0], [89.5, 23894.0], [89.6, 23894.0], [89.7, 23894.0], [89.8, 23894.0], [89.9, 23894.0], [90.0, 23919.0], [90.1, 23919.0], [90.2, 23919.0], [90.3, 23919.0], [90.4, 23919.0], [90.5, 23919.0], [90.6, 23919.0], [90.7, 23919.0], [90.8, 23919.0], [90.9, 23919.0], [91.0, 23919.0], [91.1, 23919.0], [91.2, 23919.0], [91.3, 23919.0], [91.4, 23919.0], [91.5, 23919.0], [91.6, 23919.0], [91.7, 23919.0], [91.8, 23919.0], [91.9, 23919.0], [92.0, 23919.0], [92.1, 23919.0], [92.2, 23919.0], [92.3, 23919.0], [92.4, 23919.0], [92.5, 23919.0], [92.6, 23919.0], [92.7, 23919.0], [92.8, 23919.0], [92.9, 23919.0], [93.0, 23919.0], [93.1, 23919.0], [93.2, 23919.0], [93.3, 23919.0], [93.4, 23979.0], [93.5, 23979.0], [93.6, 23979.0], [93.7, 23979.0], [93.8, 23979.0], [93.9, 23979.0], [94.0, 23979.0], [94.1, 23979.0], [94.2, 23979.0], [94.3, 23979.0], [94.4, 23979.0], [94.5, 23979.0], [94.6, 23979.0], [94.7, 23979.0], [94.8, 23979.0], [94.9, 23979.0], [95.0, 23979.0], [95.1, 23979.0], [95.2, 23979.0], [95.3, 23979.0], [95.4, 23979.0], [95.5, 23979.0], [95.6, 23979.0], [95.7, 23979.0], [95.8, 23979.0], [95.9, 23979.0], [96.0, 23979.0], [96.1, 23979.0], [96.2, 23979.0], [96.3, 23979.0], [96.4, 23979.0], [96.5, 23979.0], [96.6, 23979.0], [96.7, 24243.0], [96.8, 24243.0], [96.9, 24243.0], [97.0, 24243.0], [97.1, 24243.0], [97.2, 24243.0], [97.3, 24243.0], [97.4, 24243.0], [97.5, 24243.0], [97.6, 24243.0], [97.7, 24243.0], [97.8, 24243.0], [97.9, 24243.0], [98.0, 24243.0], [98.1, 24243.0], [98.2, 24243.0], [98.3, 24243.0], [98.4, 24243.0], [98.5, 24243.0], [98.6, 24243.0], [98.7, 24243.0], [98.8, 24243.0], [98.9, 24243.0], [99.0, 24243.0], [99.1, 24243.0], [99.2, 24243.0], [99.3, 24243.0], [99.4, 24243.0], [99.5, 24243.0], [99.6, 24243.0], [99.7, 24243.0], [99.8, 24243.0], [99.9, 24243.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2900.0, "maxY": 5.0, "series": [{"data": [[9800.0, 1.0], [2900.0, 1.0], [12000.0, 1.0], [14300.0, 1.0], [16600.0, 1.0], [19100.0, 1.0], [5200.0, 1.0], [21300.0, 1.0], [23400.0, 3.0], [23500.0, 3.0], [23700.0, 5.0], [23800.0, 3.0], [23900.0, 2.0], [23600.0, 4.0], [24200.0, 1.0], [7500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 30.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 30.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 30.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.7857142857142865, "minX": 1.6038681E12, "maxY": 10.0, "series": [{"data": [[1.6038681E12, 10.0], [1.60386816E12, 6.7857142857142865]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386816E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 18755.23809523809, "minX": 1.0, "maxY": 24243.0, "series": [{"data": [[8.0, 23561.0], [4.0, 23677.0], [2.0, 23979.0], [1.0, 24243.0], [9.0, 23459.0], [10.0, 18755.23809523809], [5.0, 23581.0], [6.0, 23556.0], [3.0, 23779.0], [7.0, 23622.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.500000000000002, 20243.9]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 97.73333333333333, "minX": 1.6038681E12, "maxY": 7392.1, "series": [{"data": [[1.6038681E12, 7392.1], [1.60386816E12, 6483.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6038681E12, 111.63333333333334], [1.60386816E12, 97.73333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386816E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 17248.0625, "minX": 1.6038681E12, "maxY": 23667.714285714286, "series": [{"data": [[1.6038681E12, 17248.0625], [1.60386816E12, 23667.714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386816E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 17245.9375, "minX": 1.6038681E12, "maxY": 23665.999999999996, "series": [{"data": [[1.6038681E12, 17245.9375], [1.60386816E12, 23665.999999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386816E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6038681E12, "maxY": 5.125, "series": [{"data": [[1.6038681E12, 5.125], [1.60386816E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386816E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2927.0, "minX": 1.6038681E12, "maxY": 24243.0, "series": [{"data": [[1.6038681E12, 23919.0], [1.60386816E12, 24243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6038681E12, 2927.0], [1.60386816E12, 23409.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6038681E12, 2927.0], [1.60386816E12, 23409.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6038681E12, 2927.0], [1.60386816E12, 23409.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6038681E12, 2927.0], [1.60386816E12, 23409.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6038681E12, 20259.5], [1.60386816E12, 23628.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 23601.5, "minX": 1.0, "maxY": 23601.5, "series": [{"data": [[1.0, 23601.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 23599.5, "minX": 1.0, "maxY": 23599.5, "series": [{"data": [[1.0, 23599.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.6038681E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.6038681E12, 0.43333333333333335], [1.60386816E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386816E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6038681E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.6038681E12, 0.26666666666666666], [1.60386816E12, 0.23333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386816E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6038681E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.6038681E12, 0.26666666666666666], [1.60386816E12, 0.23333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386816E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6038681E12, "maxY": 0.26666666666666666, "series": [{"data": [[1.6038681E12, 0.26666666666666666], [1.60386816E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386816E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

