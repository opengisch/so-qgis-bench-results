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
        data: {"result": {"minY": 150.0, "minX": 0.0, "maxY": 305.0, "series": [{"data": [[0.0, 150.0], [0.1, 150.0], [0.2, 150.0], [0.3, 150.0], [0.4, 150.0], [0.5, 150.0], [0.6, 150.0], [0.7, 150.0], [0.8, 150.0], [0.9, 150.0], [1.0, 150.0], [1.1, 150.0], [1.2, 150.0], [1.3, 150.0], [1.4, 150.0], [1.5, 150.0], [1.6, 150.0], [1.7, 150.0], [1.8, 150.0], [1.9, 150.0], [2.0, 150.0], [2.1, 150.0], [2.2, 150.0], [2.3, 150.0], [2.4, 150.0], [2.5, 150.0], [2.6, 150.0], [2.7, 150.0], [2.8, 150.0], [2.9, 150.0], [3.0, 150.0], [3.1, 150.0], [3.2, 150.0], [3.3, 150.0], [3.4, 171.0], [3.5, 171.0], [3.6, 171.0], [3.7, 171.0], [3.8, 171.0], [3.9, 171.0], [4.0, 171.0], [4.1, 171.0], [4.2, 171.0], [4.3, 171.0], [4.4, 171.0], [4.5, 171.0], [4.6, 171.0], [4.7, 171.0], [4.8, 171.0], [4.9, 171.0], [5.0, 171.0], [5.1, 171.0], [5.2, 171.0], [5.3, 171.0], [5.4, 171.0], [5.5, 171.0], [5.6, 171.0], [5.7, 171.0], [5.8, 171.0], [5.9, 171.0], [6.0, 171.0], [6.1, 171.0], [6.2, 171.0], [6.3, 171.0], [6.4, 171.0], [6.5, 171.0], [6.6, 171.0], [6.7, 182.0], [6.8, 182.0], [6.9, 182.0], [7.0, 182.0], [7.1, 182.0], [7.2, 182.0], [7.3, 182.0], [7.4, 182.0], [7.5, 182.0], [7.6, 182.0], [7.7, 182.0], [7.8, 182.0], [7.9, 182.0], [8.0, 182.0], [8.1, 182.0], [8.2, 182.0], [8.3, 182.0], [8.4, 182.0], [8.5, 182.0], [8.6, 182.0], [8.7, 182.0], [8.8, 182.0], [8.9, 182.0], [9.0, 182.0], [9.1, 182.0], [9.2, 182.0], [9.3, 182.0], [9.4, 182.0], [9.5, 182.0], [9.6, 182.0], [9.7, 182.0], [9.8, 182.0], [9.9, 182.0], [10.0, 188.0], [10.1, 188.0], [10.2, 188.0], [10.3, 188.0], [10.4, 188.0], [10.5, 188.0], [10.6, 188.0], [10.7, 188.0], [10.8, 188.0], [10.9, 188.0], [11.0, 188.0], [11.1, 188.0], [11.2, 188.0], [11.3, 188.0], [11.4, 188.0], [11.5, 188.0], [11.6, 188.0], [11.7, 188.0], [11.8, 188.0], [11.9, 188.0], [12.0, 188.0], [12.1, 188.0], [12.2, 188.0], [12.3, 188.0], [12.4, 188.0], [12.5, 188.0], [12.6, 188.0], [12.7, 188.0], [12.8, 188.0], [12.9, 188.0], [13.0, 188.0], [13.1, 188.0], [13.2, 188.0], [13.3, 188.0], [13.4, 196.0], [13.5, 196.0], [13.6, 196.0], [13.7, 196.0], [13.8, 196.0], [13.9, 196.0], [14.0, 196.0], [14.1, 196.0], [14.2, 196.0], [14.3, 196.0], [14.4, 196.0], [14.5, 196.0], [14.6, 196.0], [14.7, 196.0], [14.8, 196.0], [14.9, 196.0], [15.0, 196.0], [15.1, 196.0], [15.2, 196.0], [15.3, 196.0], [15.4, 196.0], [15.5, 196.0], [15.6, 196.0], [15.7, 196.0], [15.8, 196.0], [15.9, 196.0], [16.0, 196.0], [16.1, 196.0], [16.2, 196.0], [16.3, 196.0], [16.4, 196.0], [16.5, 196.0], [16.6, 196.0], [16.7, 197.0], [16.8, 197.0], [16.9, 197.0], [17.0, 197.0], [17.1, 197.0], [17.2, 197.0], [17.3, 197.0], [17.4, 197.0], [17.5, 197.0], [17.6, 197.0], [17.7, 197.0], [17.8, 197.0], [17.9, 197.0], [18.0, 197.0], [18.1, 197.0], [18.2, 197.0], [18.3, 197.0], [18.4, 197.0], [18.5, 197.0], [18.6, 197.0], [18.7, 197.0], [18.8, 197.0], [18.9, 197.0], [19.0, 197.0], [19.1, 197.0], [19.2, 197.0], [19.3, 197.0], [19.4, 197.0], [19.5, 197.0], [19.6, 197.0], [19.7, 197.0], [19.8, 197.0], [19.9, 197.0], [20.0, 198.0], [20.1, 198.0], [20.2, 198.0], [20.3, 198.0], [20.4, 198.0], [20.5, 198.0], [20.6, 198.0], [20.7, 198.0], [20.8, 198.0], [20.9, 198.0], [21.0, 198.0], [21.1, 198.0], [21.2, 198.0], [21.3, 198.0], [21.4, 198.0], [21.5, 198.0], [21.6, 198.0], [21.7, 198.0], [21.8, 198.0], [21.9, 198.0], [22.0, 198.0], [22.1, 198.0], [22.2, 198.0], [22.3, 198.0], [22.4, 198.0], [22.5, 198.0], [22.6, 198.0], [22.7, 198.0], [22.8, 198.0], [22.9, 198.0], [23.0, 198.0], [23.1, 198.0], [23.2, 198.0], [23.3, 198.0], [23.4, 201.0], [23.5, 201.0], [23.6, 201.0], [23.7, 201.0], [23.8, 201.0], [23.9, 201.0], [24.0, 201.0], [24.1, 201.0], [24.2, 201.0], [24.3, 201.0], [24.4, 201.0], [24.5, 201.0], [24.6, 201.0], [24.7, 201.0], [24.8, 201.0], [24.9, 201.0], [25.0, 201.0], [25.1, 201.0], [25.2, 201.0], [25.3, 201.0], [25.4, 201.0], [25.5, 201.0], [25.6, 201.0], [25.7, 201.0], [25.8, 201.0], [25.9, 201.0], [26.0, 201.0], [26.1, 201.0], [26.2, 201.0], [26.3, 201.0], [26.4, 201.0], [26.5, 201.0], [26.6, 201.0], [26.7, 202.0], [26.8, 202.0], [26.9, 202.0], [27.0, 202.0], [27.1, 202.0], [27.2, 202.0], [27.3, 202.0], [27.4, 202.0], [27.5, 202.0], [27.6, 202.0], [27.7, 202.0], [27.8, 202.0], [27.9, 202.0], [28.0, 202.0], [28.1, 202.0], [28.2, 202.0], [28.3, 202.0], [28.4, 202.0], [28.5, 202.0], [28.6, 202.0], [28.7, 202.0], [28.8, 202.0], [28.9, 202.0], [29.0, 202.0], [29.1, 202.0], [29.2, 202.0], [29.3, 202.0], [29.4, 202.0], [29.5, 202.0], [29.6, 202.0], [29.7, 202.0], [29.8, 202.0], [29.9, 202.0], [30.0, 204.0], [30.1, 204.0], [30.2, 204.0], [30.3, 204.0], [30.4, 204.0], [30.5, 204.0], [30.6, 204.0], [30.7, 204.0], [30.8, 204.0], [30.9, 204.0], [31.0, 204.0], [31.1, 204.0], [31.2, 204.0], [31.3, 204.0], [31.4, 204.0], [31.5, 204.0], [31.6, 204.0], [31.7, 204.0], [31.8, 204.0], [31.9, 204.0], [32.0, 204.0], [32.1, 204.0], [32.2, 204.0], [32.3, 204.0], [32.4, 204.0], [32.5, 204.0], [32.6, 204.0], [32.7, 204.0], [32.8, 204.0], [32.9, 204.0], [33.0, 204.0], [33.1, 204.0], [33.2, 204.0], [33.3, 204.0], [33.4, 205.0], [33.5, 205.0], [33.6, 205.0], [33.7, 205.0], [33.8, 205.0], [33.9, 205.0], [34.0, 205.0], [34.1, 205.0], [34.2, 205.0], [34.3, 205.0], [34.4, 205.0], [34.5, 205.0], [34.6, 205.0], [34.7, 205.0], [34.8, 205.0], [34.9, 205.0], [35.0, 205.0], [35.1, 205.0], [35.2, 205.0], [35.3, 205.0], [35.4, 205.0], [35.5, 205.0], [35.6, 205.0], [35.7, 205.0], [35.8, 205.0], [35.9, 205.0], [36.0, 205.0], [36.1, 205.0], [36.2, 205.0], [36.3, 205.0], [36.4, 205.0], [36.5, 205.0], [36.6, 205.0], [36.7, 207.0], [36.8, 207.0], [36.9, 207.0], [37.0, 207.0], [37.1, 207.0], [37.2, 207.0], [37.3, 207.0], [37.4, 207.0], [37.5, 207.0], [37.6, 207.0], [37.7, 207.0], [37.8, 207.0], [37.9, 207.0], [38.0, 207.0], [38.1, 207.0], [38.2, 207.0], [38.3, 207.0], [38.4, 207.0], [38.5, 207.0], [38.6, 207.0], [38.7, 207.0], [38.8, 207.0], [38.9, 207.0], [39.0, 207.0], [39.1, 207.0], [39.2, 207.0], [39.3, 207.0], [39.4, 207.0], [39.5, 207.0], [39.6, 207.0], [39.7, 207.0], [39.8, 207.0], [39.9, 207.0], [40.0, 207.0], [40.1, 207.0], [40.2, 207.0], [40.3, 207.0], [40.4, 207.0], [40.5, 207.0], [40.6, 207.0], [40.7, 207.0], [40.8, 207.0], [40.9, 207.0], [41.0, 207.0], [41.1, 207.0], [41.2, 207.0], [41.3, 207.0], [41.4, 207.0], [41.5, 207.0], [41.6, 207.0], [41.7, 207.0], [41.8, 207.0], [41.9, 207.0], [42.0, 207.0], [42.1, 207.0], [42.2, 207.0], [42.3, 207.0], [42.4, 207.0], [42.5, 207.0], [42.6, 207.0], [42.7, 207.0], [42.8, 207.0], [42.9, 207.0], [43.0, 207.0], [43.1, 207.0], [43.2, 207.0], [43.3, 207.0], [43.4, 208.0], [43.5, 208.0], [43.6, 208.0], [43.7, 208.0], [43.8, 208.0], [43.9, 208.0], [44.0, 208.0], [44.1, 208.0], [44.2, 208.0], [44.3, 208.0], [44.4, 208.0], [44.5, 208.0], [44.6, 208.0], [44.7, 208.0], [44.8, 208.0], [44.9, 208.0], [45.0, 208.0], [45.1, 208.0], [45.2, 208.0], [45.3, 208.0], [45.4, 208.0], [45.5, 208.0], [45.6, 208.0], [45.7, 208.0], [45.8, 208.0], [45.9, 208.0], [46.0, 208.0], [46.1, 208.0], [46.2, 208.0], [46.3, 208.0], [46.4, 208.0], [46.5, 208.0], [46.6, 208.0], [46.7, 213.0], [46.8, 213.0], [46.9, 213.0], [47.0, 213.0], [47.1, 213.0], [47.2, 213.0], [47.3, 213.0], [47.4, 213.0], [47.5, 213.0], [47.6, 213.0], [47.7, 213.0], [47.8, 213.0], [47.9, 213.0], [48.0, 213.0], [48.1, 213.0], [48.2, 213.0], [48.3, 213.0], [48.4, 213.0], [48.5, 213.0], [48.6, 213.0], [48.7, 213.0], [48.8, 213.0], [48.9, 213.0], [49.0, 213.0], [49.1, 213.0], [49.2, 213.0], [49.3, 213.0], [49.4, 213.0], [49.5, 213.0], [49.6, 213.0], [49.7, 213.0], [49.8, 213.0], [49.9, 213.0], [50.0, 219.0], [50.1, 219.0], [50.2, 219.0], [50.3, 219.0], [50.4, 219.0], [50.5, 219.0], [50.6, 219.0], [50.7, 219.0], [50.8, 219.0], [50.9, 219.0], [51.0, 219.0], [51.1, 219.0], [51.2, 219.0], [51.3, 219.0], [51.4, 219.0], [51.5, 219.0], [51.6, 219.0], [51.7, 219.0], [51.8, 219.0], [51.9, 219.0], [52.0, 219.0], [52.1, 219.0], [52.2, 219.0], [52.3, 219.0], [52.4, 219.0], [52.5, 219.0], [52.6, 219.0], [52.7, 219.0], [52.8, 219.0], [52.9, 219.0], [53.0, 219.0], [53.1, 219.0], [53.2, 219.0], [53.3, 219.0], [53.4, 220.0], [53.5, 220.0], [53.6, 220.0], [53.7, 220.0], [53.8, 220.0], [53.9, 220.0], [54.0, 220.0], [54.1, 220.0], [54.2, 220.0], [54.3, 220.0], [54.4, 220.0], [54.5, 220.0], [54.6, 220.0], [54.7, 220.0], [54.8, 220.0], [54.9, 220.0], [55.0, 220.0], [55.1, 220.0], [55.2, 220.0], [55.3, 220.0], [55.4, 220.0], [55.5, 220.0], [55.6, 220.0], [55.7, 220.0], [55.8, 220.0], [55.9, 220.0], [56.0, 220.0], [56.1, 220.0], [56.2, 220.0], [56.3, 220.0], [56.4, 220.0], [56.5, 220.0], [56.6, 220.0], [56.7, 221.0], [56.8, 221.0], [56.9, 221.0], [57.0, 221.0], [57.1, 221.0], [57.2, 221.0], [57.3, 221.0], [57.4, 221.0], [57.5, 221.0], [57.6, 221.0], [57.7, 221.0], [57.8, 221.0], [57.9, 221.0], [58.0, 221.0], [58.1, 221.0], [58.2, 221.0], [58.3, 221.0], [58.4, 221.0], [58.5, 221.0], [58.6, 221.0], [58.7, 221.0], [58.8, 221.0], [58.9, 221.0], [59.0, 221.0], [59.1, 221.0], [59.2, 221.0], [59.3, 221.0], [59.4, 221.0], [59.5, 221.0], [59.6, 221.0], [59.7, 221.0], [59.8, 221.0], [59.9, 221.0], [60.0, 221.0], [60.1, 222.0], [60.2, 222.0], [60.3, 222.0], [60.4, 222.0], [60.5, 222.0], [60.6, 222.0], [60.7, 222.0], [60.8, 222.0], [60.9, 222.0], [61.0, 222.0], [61.1, 222.0], [61.2, 222.0], [61.3, 222.0], [61.4, 222.0], [61.5, 222.0], [61.6, 222.0], [61.7, 222.0], [61.8, 222.0], [61.9, 222.0], [62.0, 222.0], [62.1, 222.0], [62.2, 222.0], [62.3, 222.0], [62.4, 222.0], [62.5, 222.0], [62.6, 222.0], [62.7, 222.0], [62.8, 222.0], [62.9, 222.0], [63.0, 222.0], [63.1, 222.0], [63.2, 222.0], [63.3, 222.0], [63.4, 223.0], [63.5, 223.0], [63.6, 223.0], [63.7, 223.0], [63.8, 223.0], [63.9, 223.0], [64.0, 223.0], [64.1, 223.0], [64.2, 223.0], [64.3, 223.0], [64.4, 223.0], [64.5, 223.0], [64.6, 223.0], [64.7, 223.0], [64.8, 223.0], [64.9, 223.0], [65.0, 223.0], [65.1, 223.0], [65.2, 223.0], [65.3, 223.0], [65.4, 223.0], [65.5, 223.0], [65.6, 223.0], [65.7, 223.0], [65.8, 223.0], [65.9, 223.0], [66.0, 223.0], [66.1, 223.0], [66.2, 223.0], [66.3, 223.0], [66.4, 223.0], [66.5, 223.0], [66.6, 223.0], [66.7, 223.0], [66.8, 223.0], [66.9, 223.0], [67.0, 223.0], [67.1, 223.0], [67.2, 223.0], [67.3, 223.0], [67.4, 223.0], [67.5, 223.0], [67.6, 223.0], [67.7, 223.0], [67.8, 223.0], [67.9, 223.0], [68.0, 223.0], [68.1, 223.0], [68.2, 223.0], [68.3, 223.0], [68.4, 223.0], [68.5, 223.0], [68.6, 223.0], [68.7, 223.0], [68.8, 223.0], [68.9, 223.0], [69.0, 223.0], [69.1, 223.0], [69.2, 223.0], [69.3, 223.0], [69.4, 223.0], [69.5, 223.0], [69.6, 223.0], [69.7, 223.0], [69.8, 223.0], [69.9, 223.0], [70.0, 223.0], [70.1, 230.0], [70.2, 230.0], [70.3, 230.0], [70.4, 230.0], [70.5, 230.0], [70.6, 230.0], [70.7, 230.0], [70.8, 230.0], [70.9, 230.0], [71.0, 230.0], [71.1, 230.0], [71.2, 230.0], [71.3, 230.0], [71.4, 230.0], [71.5, 230.0], [71.6, 230.0], [71.7, 230.0], [71.8, 230.0], [71.9, 230.0], [72.0, 230.0], [72.1, 230.0], [72.2, 230.0], [72.3, 230.0], [72.4, 230.0], [72.5, 230.0], [72.6, 230.0], [72.7, 230.0], [72.8, 230.0], [72.9, 230.0], [73.0, 230.0], [73.1, 230.0], [73.2, 230.0], [73.3, 230.0], [73.4, 231.0], [73.5, 231.0], [73.6, 231.0], [73.7, 231.0], [73.8, 231.0], [73.9, 231.0], [74.0, 231.0], [74.1, 231.0], [74.2, 231.0], [74.3, 231.0], [74.4, 231.0], [74.5, 231.0], [74.6, 231.0], [74.7, 231.0], [74.8, 231.0], [74.9, 231.0], [75.0, 231.0], [75.1, 231.0], [75.2, 231.0], [75.3, 231.0], [75.4, 231.0], [75.5, 231.0], [75.6, 231.0], [75.7, 231.0], [75.8, 231.0], [75.9, 231.0], [76.0, 231.0], [76.1, 231.0], [76.2, 231.0], [76.3, 231.0], [76.4, 231.0], [76.5, 231.0], [76.6, 231.0], [76.7, 235.0], [76.8, 235.0], [76.9, 235.0], [77.0, 235.0], [77.1, 235.0], [77.2, 235.0], [77.3, 235.0], [77.4, 235.0], [77.5, 235.0], [77.6, 235.0], [77.7, 235.0], [77.8, 235.0], [77.9, 235.0], [78.0, 235.0], [78.1, 235.0], [78.2, 235.0], [78.3, 235.0], [78.4, 235.0], [78.5, 235.0], [78.6, 235.0], [78.7, 235.0], [78.8, 235.0], [78.9, 235.0], [79.0, 235.0], [79.1, 235.0], [79.2, 235.0], [79.3, 235.0], [79.4, 235.0], [79.5, 235.0], [79.6, 235.0], [79.7, 235.0], [79.8, 235.0], [79.9, 235.0], [80.0, 238.0], [80.1, 238.0], [80.2, 238.0], [80.3, 238.0], [80.4, 238.0], [80.5, 238.0], [80.6, 238.0], [80.7, 238.0], [80.8, 238.0], [80.9, 238.0], [81.0, 238.0], [81.1, 238.0], [81.2, 238.0], [81.3, 238.0], [81.4, 238.0], [81.5, 238.0], [81.6, 238.0], [81.7, 238.0], [81.8, 238.0], [81.9, 238.0], [82.0, 238.0], [82.1, 238.0], [82.2, 238.0], [82.3, 238.0], [82.4, 238.0], [82.5, 238.0], [82.6, 238.0], [82.7, 238.0], [82.8, 238.0], [82.9, 238.0], [83.0, 238.0], [83.1, 238.0], [83.2, 238.0], [83.3, 238.0], [83.4, 254.0], [83.5, 254.0], [83.6, 254.0], [83.7, 254.0], [83.8, 254.0], [83.9, 254.0], [84.0, 254.0], [84.1, 254.0], [84.2, 254.0], [84.3, 254.0], [84.4, 254.0], [84.5, 254.0], [84.6, 254.0], [84.7, 254.0], [84.8, 254.0], [84.9, 254.0], [85.0, 254.0], [85.1, 254.0], [85.2, 254.0], [85.3, 254.0], [85.4, 254.0], [85.5, 254.0], [85.6, 254.0], [85.7, 254.0], [85.8, 254.0], [85.9, 254.0], [86.0, 254.0], [86.1, 254.0], [86.2, 254.0], [86.3, 254.0], [86.4, 254.0], [86.5, 254.0], [86.6, 254.0], [86.7, 265.0], [86.8, 265.0], [86.9, 265.0], [87.0, 265.0], [87.1, 265.0], [87.2, 265.0], [87.3, 265.0], [87.4, 265.0], [87.5, 265.0], [87.6, 265.0], [87.7, 265.0], [87.8, 265.0], [87.9, 265.0], [88.0, 265.0], [88.1, 265.0], [88.2, 265.0], [88.3, 265.0], [88.4, 265.0], [88.5, 265.0], [88.6, 265.0], [88.7, 265.0], [88.8, 265.0], [88.9, 265.0], [89.0, 265.0], [89.1, 265.0], [89.2, 265.0], [89.3, 265.0], [89.4, 265.0], [89.5, 265.0], [89.6, 265.0], [89.7, 265.0], [89.8, 265.0], [89.9, 265.0], [90.0, 284.0], [90.1, 284.0], [90.2, 284.0], [90.3, 284.0], [90.4, 284.0], [90.5, 284.0], [90.6, 284.0], [90.7, 284.0], [90.8, 284.0], [90.9, 284.0], [91.0, 284.0], [91.1, 284.0], [91.2, 284.0], [91.3, 284.0], [91.4, 284.0], [91.5, 284.0], [91.6, 284.0], [91.7, 284.0], [91.8, 284.0], [91.9, 284.0], [92.0, 284.0], [92.1, 284.0], [92.2, 284.0], [92.3, 284.0], [92.4, 284.0], [92.5, 284.0], [92.6, 284.0], [92.7, 284.0], [92.8, 284.0], [92.9, 284.0], [93.0, 284.0], [93.1, 284.0], [93.2, 284.0], [93.3, 284.0], [93.4, 295.0], [93.5, 295.0], [93.6, 295.0], [93.7, 295.0], [93.8, 295.0], [93.9, 295.0], [94.0, 295.0], [94.1, 295.0], [94.2, 295.0], [94.3, 295.0], [94.4, 295.0], [94.5, 295.0], [94.6, 295.0], [94.7, 295.0], [94.8, 295.0], [94.9, 295.0], [95.0, 295.0], [95.1, 295.0], [95.2, 295.0], [95.3, 295.0], [95.4, 295.0], [95.5, 295.0], [95.6, 295.0], [95.7, 295.0], [95.8, 295.0], [95.9, 295.0], [96.0, 295.0], [96.1, 295.0], [96.2, 295.0], [96.3, 295.0], [96.4, 295.0], [96.5, 295.0], [96.6, 295.0], [96.7, 305.0], [96.8, 305.0], [96.9, 305.0], [97.0, 305.0], [97.1, 305.0], [97.2, 305.0], [97.3, 305.0], [97.4, 305.0], [97.5, 305.0], [97.6, 305.0], [97.7, 305.0], [97.8, 305.0], [97.9, 305.0], [98.0, 305.0], [98.1, 305.0], [98.2, 305.0], [98.3, 305.0], [98.4, 305.0], [98.5, 305.0], [98.6, 305.0], [98.7, 305.0], [98.8, 305.0], [98.9, 305.0], [99.0, 305.0], [99.1, 305.0], [99.2, 305.0], [99.3, 305.0], [99.4, 305.0], [99.5, 305.0], [99.6, 305.0], [99.7, 305.0], [99.8, 305.0], [99.9, 305.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 22.0, "series": [{"data": [[300.0, 1.0], [200.0, 22.0], [100.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 30.0, "series": [{"data": [[0.0, 30.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.9333333333333345, "minX": 1.60386864E12, "maxY": 6.9333333333333345, "series": [{"data": [[1.60386864E12, 6.9333333333333345]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 184.5, "minX": 1.0, "maxY": 305.0, "series": [{"data": [[4.0, 234.5], [8.0, 208.5], [2.0, 295.0], [1.0, 305.0], [9.0, 212.4], [5.0, 242.33333333333334], [10.0, 217.8], [6.0, 184.5], [3.0, 284.0], [7.0, 197.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[6.9333333333333345, 219.8]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 208.86666666666667, "minX": 1.60386864E12, "maxY": 13875.833333333334, "series": [{"data": [[1.60386864E12, 13875.833333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60386864E12, 208.86666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 219.8, "minX": 1.60386864E12, "maxY": 219.8, "series": [{"data": [[1.60386864E12, 219.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 219.50000000000003, "minX": 1.60386864E12, "maxY": 219.50000000000003, "series": [{"data": [[1.60386864E12, 219.50000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.3666666666666663, "minX": 1.60386864E12, "maxY": 3.3666666666666663, "series": [{"data": [[1.60386864E12, 3.3666666666666663]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 150.0, "minX": 1.60386864E12, "maxY": 305.0, "series": [{"data": [[1.60386864E12, 305.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60386864E12, 150.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60386864E12, 150.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60386864E12, 150.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60386864E12, 150.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60386864E12, 216.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 198.0, "minX": 7.0, "maxY": 220.0, "series": [{"data": [[23.0, 220.0], [7.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 198.0, "minX": 7.0, "maxY": 220.0, "series": [{"data": [[23.0, 220.0], [7.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386864E12, "maxY": 0.5, "series": [{"data": [[1.60386864E12, 0.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386864E12, "maxY": 0.5, "series": [{"data": [[1.60386864E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60386864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386864E12, "maxY": 0.5, "series": [{"data": [[1.60386864E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60386864E12, "maxY": 0.5, "series": [{"data": [[1.60386864E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60386864E12, "title": "Total Transactions Per Second"}},
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

