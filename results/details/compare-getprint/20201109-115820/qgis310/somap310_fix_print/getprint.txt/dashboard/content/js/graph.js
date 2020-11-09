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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 120088.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 2123.0], [14.4, 2123.0], [14.5, 2123.0], [14.6, 2123.0], [14.7, 2123.0], [14.8, 2123.0], [14.9, 2123.0], [15.0, 2123.0], [15.1, 2123.0], [15.2, 2123.0], [15.3, 2123.0], [15.4, 2123.0], [15.5, 2123.0], [15.6, 2123.0], [15.7, 2123.0], [15.8, 2123.0], [15.9, 4417.0], [16.0, 4417.0], [16.1, 4417.0], [16.2, 4417.0], [16.3, 4417.0], [16.4, 4417.0], [16.5, 4417.0], [16.6, 4417.0], [16.7, 4417.0], [16.8, 4417.0], [16.9, 4417.0], [17.0, 4417.0], [17.1, 4417.0], [17.2, 4417.0], [17.3, 4417.0], [17.4, 4417.0], [17.5, 6268.0], [17.6, 6268.0], [17.7, 6268.0], [17.8, 6268.0], [17.9, 6268.0], [18.0, 6268.0], [18.1, 6268.0], [18.2, 6268.0], [18.3, 6268.0], [18.4, 6268.0], [18.5, 6268.0], [18.6, 6268.0], [18.7, 6268.0], [18.8, 6268.0], [18.9, 6268.0], [19.0, 6268.0], [19.1, 7916.0], [19.2, 7916.0], [19.3, 7916.0], [19.4, 7916.0], [19.5, 7916.0], [19.6, 7916.0], [19.7, 7916.0], [19.8, 7916.0], [19.9, 7916.0], [20.0, 7916.0], [20.1, 7916.0], [20.2, 7916.0], [20.3, 7916.0], [20.4, 7916.0], [20.5, 7916.0], [20.6, 7916.0], [20.7, 9659.0], [20.8, 9659.0], [20.9, 9659.0], [21.0, 9659.0], [21.1, 9659.0], [21.2, 9659.0], [21.3, 9659.0], [21.4, 9659.0], [21.5, 9659.0], [21.6, 9659.0], [21.7, 9659.0], [21.8, 9659.0], [21.9, 9659.0], [22.0, 9659.0], [22.1, 9659.0], [22.2, 9659.0], [22.3, 11472.0], [22.4, 11472.0], [22.5, 11472.0], [22.6, 11472.0], [22.7, 11472.0], [22.8, 11472.0], [22.9, 11472.0], [23.0, 11472.0], [23.1, 11472.0], [23.2, 11472.0], [23.3, 11472.0], [23.4, 11472.0], [23.5, 11472.0], [23.6, 11472.0], [23.7, 11472.0], [23.8, 11472.0], [23.9, 13211.0], [24.0, 13211.0], [24.1, 13211.0], [24.2, 13211.0], [24.3, 13211.0], [24.4, 13211.0], [24.5, 13211.0], [24.6, 13211.0], [24.7, 13211.0], [24.8, 13211.0], [24.9, 13211.0], [25.0, 13211.0], [25.1, 13211.0], [25.2, 13211.0], [25.3, 13211.0], [25.4, 15625.0], [25.5, 15625.0], [25.6, 15625.0], [25.7, 15625.0], [25.8, 15625.0], [25.9, 15625.0], [26.0, 15625.0], [26.1, 15625.0], [26.2, 15625.0], [26.3, 15625.0], [26.4, 15625.0], [26.5, 15625.0], [26.6, 15625.0], [26.7, 15625.0], [26.8, 15625.0], [26.9, 15625.0], [27.0, 17261.0], [27.1, 17261.0], [27.2, 17261.0], [27.3, 17261.0], [27.4, 17261.0], [27.5, 17261.0], [27.6, 17261.0], [27.7, 17261.0], [27.8, 17261.0], [27.9, 17261.0], [28.0, 17261.0], [28.1, 17261.0], [28.2, 17261.0], [28.3, 17261.0], [28.4, 17261.0], [28.5, 17261.0], [28.6, 18264.0], [28.7, 18264.0], [28.8, 18264.0], [28.9, 18264.0], [29.0, 18264.0], [29.1, 18264.0], [29.2, 18264.0], [29.3, 18264.0], [29.4, 18264.0], [29.5, 18264.0], [29.6, 18264.0], [29.7, 18264.0], [29.8, 18264.0], [29.9, 18264.0], [30.0, 18264.0], [30.1, 18264.0], [30.2, 18355.0], [30.3, 18355.0], [30.4, 18355.0], [30.5, 18355.0], [30.6, 18355.0], [30.7, 18355.0], [30.8, 18355.0], [30.9, 18355.0], [31.0, 18355.0], [31.1, 18355.0], [31.2, 18355.0], [31.3, 18355.0], [31.4, 18355.0], [31.5, 18355.0], [31.6, 18355.0], [31.7, 18355.0], [31.8, 18385.0], [31.9, 18385.0], [32.0, 18385.0], [32.1, 18385.0], [32.2, 18385.0], [32.3, 18385.0], [32.4, 18385.0], [32.5, 18385.0], [32.6, 18385.0], [32.7, 18385.0], [32.8, 18385.0], [32.9, 18385.0], [33.0, 18385.0], [33.1, 18385.0], [33.2, 18385.0], [33.3, 18385.0], [33.4, 18415.0], [33.5, 18415.0], [33.6, 18415.0], [33.7, 18415.0], [33.8, 18415.0], [33.9, 18415.0], [34.0, 18415.0], [34.1, 18415.0], [34.2, 18415.0], [34.3, 18415.0], [34.4, 18415.0], [34.5, 18415.0], [34.6, 18415.0], [34.7, 18415.0], [34.8, 18415.0], [34.9, 18415.0], [35.0, 18481.0], [35.1, 18481.0], [35.2, 18481.0], [35.3, 18481.0], [35.4, 18481.0], [35.5, 18481.0], [35.6, 18481.0], [35.7, 18481.0], [35.8, 18481.0], [35.9, 18481.0], [36.0, 18481.0], [36.1, 18481.0], [36.2, 18481.0], [36.3, 18481.0], [36.4, 18481.0], [36.5, 18481.0], [36.6, 18529.0], [36.7, 18529.0], [36.8, 18529.0], [36.9, 18529.0], [37.0, 18529.0], [37.1, 18529.0], [37.2, 18529.0], [37.3, 18529.0], [37.4, 18529.0], [37.5, 18529.0], [37.6, 18529.0], [37.7, 18529.0], [37.8, 18529.0], [37.9, 18529.0], [38.0, 18529.0], [38.1, 18553.0], [38.2, 18553.0], [38.3, 18553.0], [38.4, 18553.0], [38.5, 18553.0], [38.6, 18553.0], [38.7, 18553.0], [38.8, 18553.0], [38.9, 18553.0], [39.0, 18553.0], [39.1, 18553.0], [39.2, 18553.0], [39.3, 18553.0], [39.4, 18553.0], [39.5, 18553.0], [39.6, 18553.0], [39.7, 18645.0], [39.8, 18645.0], [39.9, 18645.0], [40.0, 18645.0], [40.1, 18645.0], [40.2, 18645.0], [40.3, 18645.0], [40.4, 18645.0], [40.5, 18645.0], [40.6, 18645.0], [40.7, 18645.0], [40.8, 18645.0], [40.9, 18645.0], [41.0, 18645.0], [41.1, 18645.0], [41.2, 18645.0], [41.3, 18764.0], [41.4, 18764.0], [41.5, 18764.0], [41.6, 18764.0], [41.7, 18764.0], [41.8, 18764.0], [41.9, 18764.0], [42.0, 18764.0], [42.1, 18764.0], [42.2, 18764.0], [42.3, 18764.0], [42.4, 18764.0], [42.5, 18764.0], [42.6, 18764.0], [42.7, 18764.0], [42.8, 18764.0], [42.9, 18817.0], [43.0, 18817.0], [43.1, 18817.0], [43.2, 18817.0], [43.3, 18817.0], [43.4, 18817.0], [43.5, 18817.0], [43.6, 18817.0], [43.7, 18817.0], [43.8, 18817.0], [43.9, 18817.0], [44.0, 18817.0], [44.1, 18817.0], [44.2, 18817.0], [44.3, 18817.0], [44.4, 18817.0], [44.5, 18888.0], [44.6, 18888.0], [44.7, 18888.0], [44.8, 18888.0], [44.9, 18888.0], [45.0, 18888.0], [45.1, 18888.0], [45.2, 18888.0], [45.3, 18888.0], [45.4, 18888.0], [45.5, 18888.0], [45.6, 18888.0], [45.7, 18888.0], [45.8, 18888.0], [45.9, 18888.0], [46.0, 18888.0], [46.1, 18907.0], [46.2, 18907.0], [46.3, 18907.0], [46.4, 18907.0], [46.5, 18907.0], [46.6, 18907.0], [46.7, 18907.0], [46.8, 18907.0], [46.9, 18907.0], [47.0, 18907.0], [47.1, 18907.0], [47.2, 18907.0], [47.3, 18907.0], [47.4, 18907.0], [47.5, 18907.0], [47.6, 18907.0], [47.7, 18922.0], [47.8, 18922.0], [47.9, 18922.0], [48.0, 18922.0], [48.1, 18922.0], [48.2, 18922.0], [48.3, 18922.0], [48.4, 18922.0], [48.5, 18922.0], [48.6, 18922.0], [48.7, 18922.0], [48.8, 18922.0], [48.9, 18922.0], [49.0, 18922.0], [49.1, 18922.0], [49.2, 18922.0], [49.3, 18974.0], [49.4, 18974.0], [49.5, 18974.0], [49.6, 18974.0], [49.7, 18974.0], [49.8, 18974.0], [49.9, 18974.0], [50.0, 18974.0], [50.1, 18974.0], [50.2, 18974.0], [50.3, 18974.0], [50.4, 18974.0], [50.5, 18974.0], [50.6, 18974.0], [50.7, 18974.0], [50.8, 18996.0], [50.9, 18996.0], [51.0, 18996.0], [51.1, 18996.0], [51.2, 18996.0], [51.3, 18996.0], [51.4, 18996.0], [51.5, 18996.0], [51.6, 18996.0], [51.7, 18996.0], [51.8, 18996.0], [51.9, 18996.0], [52.0, 18996.0], [52.1, 18996.0], [52.2, 18996.0], [52.3, 18996.0], [52.4, 19018.0], [52.5, 19018.0], [52.6, 19018.0], [52.7, 19018.0], [52.8, 19018.0], [52.9, 19018.0], [53.0, 19018.0], [53.1, 19018.0], [53.2, 19018.0], [53.3, 19018.0], [53.4, 19018.0], [53.5, 19018.0], [53.6, 19018.0], [53.7, 19018.0], [53.8, 19018.0], [53.9, 19018.0], [54.0, 19032.0], [54.1, 19032.0], [54.2, 19032.0], [54.3, 19032.0], [54.4, 19032.0], [54.5, 19032.0], [54.6, 19032.0], [54.7, 19032.0], [54.8, 19032.0], [54.9, 19032.0], [55.0, 19032.0], [55.1, 19032.0], [55.2, 19032.0], [55.3, 19032.0], [55.4, 19032.0], [55.5, 19032.0], [55.6, 19089.0], [55.7, 19089.0], [55.8, 19089.0], [55.9, 19089.0], [56.0, 19089.0], [56.1, 19089.0], [56.2, 19089.0], [56.3, 19089.0], [56.4, 19089.0], [56.5, 19089.0], [56.6, 19089.0], [56.7, 19089.0], [56.8, 19089.0], [56.9, 19089.0], [57.0, 19089.0], [57.1, 19089.0], [57.2, 19105.0], [57.3, 19105.0], [57.4, 19105.0], [57.5, 19105.0], [57.6, 19105.0], [57.7, 19105.0], [57.8, 19105.0], [57.9, 19105.0], [58.0, 19105.0], [58.1, 19105.0], [58.2, 19105.0], [58.3, 19105.0], [58.4, 19105.0], [58.5, 19105.0], [58.6, 19105.0], [58.7, 19105.0], [58.8, 19166.0], [58.9, 19166.0], [59.0, 19166.0], [59.1, 19166.0], [59.2, 19166.0], [59.3, 19166.0], [59.4, 19166.0], [59.5, 19166.0], [59.6, 19166.0], [59.7, 19166.0], [59.8, 19166.0], [59.9, 19166.0], [60.0, 19166.0], [60.1, 19166.0], [60.2, 19166.0], [60.3, 19166.0], [60.4, 19195.0], [60.5, 19195.0], [60.6, 19195.0], [60.7, 19195.0], [60.8, 19195.0], [60.9, 19195.0], [61.0, 19195.0], [61.1, 19195.0], [61.2, 19195.0], [61.3, 19195.0], [61.4, 19195.0], [61.5, 19195.0], [61.6, 19195.0], [61.7, 19195.0], [61.8, 19195.0], [61.9, 19195.0], [62.0, 19273.0], [62.1, 19273.0], [62.2, 19273.0], [62.3, 19273.0], [62.4, 19273.0], [62.5, 19273.0], [62.6, 19273.0], [62.7, 19273.0], [62.8, 19273.0], [62.9, 19273.0], [63.0, 19273.0], [63.1, 19273.0], [63.2, 19273.0], [63.3, 19273.0], [63.4, 19273.0], [63.5, 19283.0], [63.6, 19283.0], [63.7, 19283.0], [63.8, 19283.0], [63.9, 19283.0], [64.0, 19283.0], [64.1, 19283.0], [64.2, 19283.0], [64.3, 19283.0], [64.4, 19283.0], [64.5, 19283.0], [64.6, 19283.0], [64.7, 19283.0], [64.8, 19283.0], [64.9, 19283.0], [65.0, 19283.0], [65.1, 19328.0], [65.2, 19328.0], [65.3, 19328.0], [65.4, 19328.0], [65.5, 19328.0], [65.6, 19328.0], [65.7, 19328.0], [65.8, 19328.0], [65.9, 19328.0], [66.0, 19328.0], [66.1, 19328.0], [66.2, 19328.0], [66.3, 19328.0], [66.4, 19328.0], [66.5, 19328.0], [66.6, 19328.0], [66.7, 19465.0], [66.8, 19465.0], [66.9, 19465.0], [67.0, 19465.0], [67.1, 19465.0], [67.2, 19465.0], [67.3, 19465.0], [67.4, 19465.0], [67.5, 19465.0], [67.6, 19465.0], [67.7, 19465.0], [67.8, 19465.0], [67.9, 19465.0], [68.0, 19465.0], [68.1, 19465.0], [68.2, 19465.0], [68.3, 19492.0], [68.4, 19492.0], [68.5, 19492.0], [68.6, 19492.0], [68.7, 19492.0], [68.8, 19492.0], [68.9, 19492.0], [69.0, 19492.0], [69.1, 19492.0], [69.2, 19492.0], [69.3, 19492.0], [69.4, 19492.0], [69.5, 19492.0], [69.6, 19492.0], [69.7, 19492.0], [69.8, 19492.0], [69.9, 19788.0], [70.0, 19788.0], [70.1, 19788.0], [70.2, 19788.0], [70.3, 19788.0], [70.4, 19788.0], [70.5, 19788.0], [70.6, 19788.0], [70.7, 19788.0], [70.8, 19788.0], [70.9, 19788.0], [71.0, 19788.0], [71.1, 19788.0], [71.2, 19788.0], [71.3, 19788.0], [71.4, 19788.0], [71.5, 19792.0], [71.6, 19792.0], [71.7, 19792.0], [71.8, 19792.0], [71.9, 19792.0], [72.0, 19792.0], [72.1, 19792.0], [72.2, 19792.0], [72.3, 19792.0], [72.4, 19792.0], [72.5, 19792.0], [72.6, 19792.0], [72.7, 19792.0], [72.8, 19792.0], [72.9, 19792.0], [73.0, 19792.0], [73.1, 19815.0], [73.2, 19815.0], [73.3, 19815.0], [73.4, 19815.0], [73.5, 19815.0], [73.6, 19815.0], [73.7, 19815.0], [73.8, 19815.0], [73.9, 19815.0], [74.0, 19815.0], [74.1, 19815.0], [74.2, 19815.0], [74.3, 19815.0], [74.4, 19815.0], [74.5, 19815.0], [74.6, 19815.0], [74.7, 19833.0], [74.8, 19833.0], [74.9, 19833.0], [75.0, 19833.0], [75.1, 19833.0], [75.2, 19833.0], [75.3, 19833.0], [75.4, 19833.0], [75.5, 19833.0], [75.6, 19833.0], [75.7, 19833.0], [75.8, 19833.0], [75.9, 19833.0], [76.0, 19833.0], [76.1, 19833.0], [76.2, 19861.0], [76.3, 19861.0], [76.4, 19861.0], [76.5, 19861.0], [76.6, 19861.0], [76.7, 19861.0], [76.8, 19861.0], [76.9, 19861.0], [77.0, 19861.0], [77.1, 19861.0], [77.2, 19861.0], [77.3, 19861.0], [77.4, 19861.0], [77.5, 19861.0], [77.6, 19861.0], [77.7, 19861.0], [77.8, 19877.0], [77.9, 19877.0], [78.0, 19877.0], [78.1, 19877.0], [78.2, 19877.0], [78.3, 19877.0], [78.4, 19877.0], [78.5, 19877.0], [78.6, 19877.0], [78.7, 19877.0], [78.8, 19877.0], [78.9, 19877.0], [79.0, 19877.0], [79.1, 19877.0], [79.2, 19877.0], [79.3, 19877.0], [79.4, 20029.0], [79.5, 20029.0], [79.6, 20029.0], [79.7, 20029.0], [79.8, 20029.0], [79.9, 20029.0], [80.0, 20029.0], [80.1, 20029.0], [80.2, 20029.0], [80.3, 20029.0], [80.4, 20029.0], [80.5, 20029.0], [80.6, 20029.0], [80.7, 20029.0], [80.8, 20029.0], [80.9, 20029.0], [81.0, 20103.0], [81.1, 20103.0], [81.2, 20103.0], [81.3, 20103.0], [81.4, 20103.0], [81.5, 20103.0], [81.6, 20103.0], [81.7, 20103.0], [81.8, 20103.0], [81.9, 20103.0], [82.0, 20103.0], [82.1, 20103.0], [82.2, 20103.0], [82.3, 20103.0], [82.4, 20103.0], [82.5, 20103.0], [82.6, 20256.0], [82.7, 20256.0], [82.8, 20256.0], [82.9, 20256.0], [83.0, 20256.0], [83.1, 20256.0], [83.2, 20256.0], [83.3, 20256.0], [83.4, 20256.0], [83.5, 20256.0], [83.6, 20256.0], [83.7, 20256.0], [83.8, 20256.0], [83.9, 20256.0], [84.0, 20256.0], [84.1, 20256.0], [84.2, 60002.0], [84.3, 60002.0], [84.4, 60002.0], [84.5, 60002.0], [84.6, 60002.0], [84.7, 60002.0], [84.8, 60002.0], [84.9, 60002.0], [85.0, 60002.0], [85.1, 60002.0], [85.2, 60002.0], [85.3, 60002.0], [85.4, 60002.0], [85.5, 60002.0], [85.6, 60002.0], [85.7, 60002.0], [85.8, 60002.0], [85.9, 60002.0], [86.0, 60002.0], [86.1, 60002.0], [86.2, 60002.0], [86.3, 60002.0], [86.4, 60002.0], [86.5, 60002.0], [86.6, 60002.0], [86.7, 60002.0], [86.8, 60002.0], [86.9, 60002.0], [87.0, 60002.0], [87.1, 60002.0], [87.2, 60002.0], [87.3, 60002.0], [87.4, 60004.0], [87.5, 60004.0], [87.6, 60004.0], [87.7, 60004.0], [87.8, 60004.0], [87.9, 60004.0], [88.0, 60004.0], [88.1, 60004.0], [88.2, 60004.0], [88.3, 60004.0], [88.4, 60004.0], [88.5, 60004.0], [88.6, 60004.0], [88.7, 60004.0], [88.8, 60004.0], [88.9, 60005.0], [89.0, 60005.0], [89.1, 60005.0], [89.2, 60005.0], [89.3, 60005.0], [89.4, 60005.0], [89.5, 60005.0], [89.6, 60005.0], [89.7, 60005.0], [89.8, 60005.0], [89.9, 60005.0], [90.0, 60005.0], [90.1, 60005.0], [90.2, 60005.0], [90.3, 60005.0], [90.4, 60005.0], [90.5, 60005.0], [90.6, 60005.0], [90.7, 60005.0], [90.8, 60005.0], [90.9, 60005.0], [91.0, 60005.0], [91.1, 60005.0], [91.2, 60005.0], [91.3, 60005.0], [91.4, 60005.0], [91.5, 60005.0], [91.6, 60005.0], [91.7, 60005.0], [91.8, 60005.0], [91.9, 60005.0], [92.0, 60005.0], [92.1, 60006.0], [92.2, 60006.0], [92.3, 60006.0], [92.4, 60006.0], [92.5, 60006.0], [92.6, 60006.0], [92.7, 60006.0], [92.8, 60006.0], [92.9, 60006.0], [93.0, 60006.0], [93.1, 60006.0], [93.2, 60006.0], [93.3, 60006.0], [93.4, 60006.0], [93.5, 60006.0], [93.6, 60006.0], [93.7, 60007.0], [93.8, 60007.0], [93.9, 60007.0], [94.0, 60007.0], [94.1, 60007.0], [94.2, 60007.0], [94.3, 60007.0], [94.4, 60007.0], [94.5, 60007.0], [94.6, 60007.0], [94.7, 60007.0], [94.8, 60007.0], [94.9, 60007.0], [95.0, 60007.0], [95.1, 60007.0], [95.2, 60007.0], [95.3, 60008.0], [95.4, 60008.0], [95.5, 60008.0], [95.6, 60008.0], [95.7, 60008.0], [95.8, 60008.0], [95.9, 60008.0], [96.0, 60008.0], [96.1, 60008.0], [96.2, 60008.0], [96.3, 60008.0], [96.4, 60008.0], [96.5, 60008.0], [96.6, 60008.0], [96.7, 60008.0], [96.8, 60008.0], [96.9, 60009.0], [97.0, 60009.0], [97.1, 60009.0], [97.2, 60009.0], [97.3, 60009.0], [97.4, 60009.0], [97.5, 60009.0], [97.6, 60009.0], [97.7, 60009.0], [97.8, 60009.0], [97.9, 60009.0], [98.0, 60009.0], [98.1, 60009.0], [98.2, 60009.0], [98.3, 60009.0], [98.4, 60009.0], [98.5, 120088.0], [98.6, 120088.0], [98.7, 120088.0], [98.8, 120088.0], [98.9, 120088.0], [99.0, 120088.0], [99.1, 120088.0], [99.2, 120088.0], [99.3, 120088.0], [99.4, 120088.0], [99.5, 120088.0], [99.6, 120088.0], [99.7, 120088.0], [99.8, 120088.0], [99.9, 120088.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9.0, "series": [{"data": [[0.0, 9.0], [9600.0, 1.0], [11400.0, 1.0], [13200.0, 1.0], [15600.0, 1.0], [17200.0, 1.0], [18400.0, 2.0], [18300.0, 2.0], [18200.0, 1.0], [19300.0, 1.0], [19000.0, 3.0], [19400.0, 2.0], [19100.0, 3.0], [19200.0, 2.0], [18500.0, 2.0], [18600.0, 1.0], [18900.0, 4.0], [18800.0, 2.0], [18700.0, 1.0], [19800.0, 4.0], [20100.0, 1.0], [20000.0, 1.0], [20200.0, 1.0], [19700.0, 2.0], [2100.0, 1.0], [60000.0, 9.0], [4400.0, 1.0], [6200.0, 1.0], [120000.0, 1.0], [7900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 44.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 44.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 19.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60492332E12, "maxY": 10.0, "series": [{"data": [[1.60492344E12, 7.999999999999999], [1.60492332E12, 10.0], [1.6049235E12, 1.0], [1.60492338E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6049235E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15160.518518518518, "minX": 1.0, "maxY": 120088.0, "series": [{"data": [[8.0, 60005.0], [4.0, 60007.0], [2.0, 60002.0], [1.0, 120088.0], [9.0, 60005.0], [10.0, 15160.518518518518], [5.0, 60006.0], [6.0, 60002.0], [3.0, 60004.0], [7.0, 60009.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.285714285714286, 22520.571428571428]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5.7, "minX": 1.60492332E12, "maxY": 85665.15, "series": [{"data": [[1.60492344E12, 102.6], [1.60492332E12, 77270.25], [1.6049235E12, 5.7], [1.60492338E12, 85665.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60492344E12, 261.8833333333333], [1.60492332E12, 258.56666666666666], [1.6049235E12, 11.0], [1.60492338E12, 357.3666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6049235E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14669.105263157895, "minX": 1.60492332E12, "maxY": 120088.0, "series": [{"data": [[1.60492344E12, 30003.388888888887], [1.60492332E12, 14669.105263157895], [1.6049235E12, 120088.0], [1.60492338E12, 19197.36]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6049235E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14666.736842105263, "minX": 1.60492332E12, "maxY": 120088.0, "series": [{"data": [[1.60492344E12, 30003.333333333332], [1.60492332E12, 14666.736842105263], [1.6049235E12, 120088.0], [1.60492338E12, 19195.76]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6049235E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.32, "minX": 1.60492332E12, "maxY": 4.421052631578947, "series": [{"data": [[1.60492344E12, 0.5000000000000001], [1.60492332E12, 4.421052631578947], [1.6049235E12, 1.0], [1.60492338E12, 0.32]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6049235E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2123.0, "minX": 1.60492332E12, "maxY": 20256.0, "series": [{"data": [[1.60492332E12, 19465.0], [1.60492338E12, 20256.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60492332E12, 2123.0], [1.60492338E12, 18264.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60492332E12, 2123.0], [1.60492338E12, 18264.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60492332E12, 2123.0], [1.60492338E12, 18264.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60492332E12, 2123.0], [1.60492338E12, 18264.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60492332E12, 18481.0], [1.60492338E12, 18996.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60492338E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 60005.0, "series": [{"data": [[1.0, 18948.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60005.0], [10.0, 1.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 60005.0, "series": [{"data": [[1.0, 18947.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 60005.0], [10.0, 1.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.60492332E12, "maxY": 0.48333333333333334, "series": [{"data": [[1.60492344E12, 0.15], [1.60492332E12, 0.48333333333333334], [1.60492338E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60492344E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60492332E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.60492332E12, 0.31666666666666665], [1.60492338E12, 0.4166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60492344E12, 0.3], [1.6049235E12, 0.016666666666666666]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6049235E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60492332E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.60492332E12, 0.31666666666666665], [1.60492338E12, 0.4166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60492344E12, 0.3], [1.6049235E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6049235E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60492332E12, "maxY": 0.4166666666666667, "series": [{"data": [[1.60492332E12, 0.31666666666666665], [1.60492338E12, 0.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60492344E12, 0.3], [1.6049235E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6049235E12, "title": "Total Transactions Per Second"}},
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

