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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 19647.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 185.0], [0.3, 185.0], [0.4, 185.0], [0.5, 186.0], [0.6, 186.0], [0.7, 187.0], [0.8, 187.0], [0.9, 187.0], [1.0, 187.0], [1.1, 187.0], [1.2, 187.0], [1.3, 187.0], [1.4, 188.0], [1.5, 188.0], [1.6, 188.0], [1.7, 188.0], [1.8, 189.0], [1.9, 189.0], [2.0, 189.0], [2.1, 189.0], [2.2, 190.0], [2.3, 190.0], [2.4, 190.0], [2.5, 190.0], [2.6, 190.0], [2.7, 190.0], [2.8, 190.0], [2.9, 190.0], [3.0, 190.0], [3.1, 190.0], [3.2, 190.0], [3.3, 191.0], [3.4, 191.0], [3.5, 191.0], [3.6, 191.0], [3.7, 191.0], [3.8, 191.0], [3.9, 191.0], [4.0, 191.0], [4.1, 192.0], [4.2, 192.0], [4.3, 192.0], [4.4, 192.0], [4.5, 192.0], [4.6, 192.0], [4.7, 193.0], [4.8, 193.0], [4.9, 193.0], [5.0, 193.0], [5.1, 194.0], [5.2, 194.0], [5.3, 194.0], [5.4, 194.0], [5.5, 194.0], [5.6, 194.0], [5.7, 194.0], [5.8, 195.0], [5.9, 195.0], [6.0, 195.0], [6.1, 195.0], [6.2, 195.0], [6.3, 195.0], [6.4, 195.0], [6.5, 195.0], [6.6, 195.0], [6.7, 196.0], [6.8, 196.0], [6.9, 196.0], [7.0, 196.0], [7.1, 196.0], [7.2, 196.0], [7.3, 196.0], [7.4, 196.0], [7.5, 196.0], [7.6, 196.0], [7.7, 197.0], [7.8, 197.0], [7.9, 197.0], [8.0, 197.0], [8.1, 197.0], [8.2, 197.0], [8.3, 197.0], [8.4, 197.0], [8.5, 197.0], [8.6, 197.0], [8.7, 197.0], [8.8, 197.0], [8.9, 197.0], [9.0, 197.0], [9.1, 197.0], [9.2, 197.0], [9.3, 197.0], [9.4, 198.0], [9.5, 198.0], [9.6, 198.0], [9.7, 198.0], [9.8, 198.0], [9.9, 198.0], [10.0, 198.0], [10.1, 198.0], [10.2, 198.0], [10.3, 198.0], [10.4, 198.0], [10.5, 199.0], [10.6, 199.0], [10.7, 199.0], [10.8, 199.0], [10.9, 199.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 199.0], [11.4, 199.0], [11.5, 199.0], [11.6, 199.0], [11.7, 199.0], [11.8, 199.0], [11.9, 199.0], [12.0, 200.0], [12.1, 200.0], [12.2, 200.0], [12.3, 200.0], [12.4, 200.0], [12.5, 200.0], [12.6, 200.0], [12.7, 200.0], [12.8, 200.0], [12.9, 200.0], [13.0, 200.0], [13.1, 200.0], [13.2, 200.0], [13.3, 200.0], [13.4, 201.0], [13.5, 201.0], [13.6, 201.0], [13.7, 201.0], [13.8, 201.0], [13.9, 201.0], [14.0, 201.0], [14.1, 201.0], [14.2, 201.0], [14.3, 201.0], [14.4, 201.0], [14.5, 202.0], [14.6, 202.0], [14.7, 202.0], [14.8, 202.0], [14.9, 202.0], [15.0, 203.0], [15.1, 203.0], [15.2, 203.0], [15.3, 203.0], [15.4, 203.0], [15.5, 203.0], [15.6, 203.0], [15.7, 203.0], [15.8, 203.0], [15.9, 203.0], [16.0, 204.0], [16.1, 204.0], [16.2, 204.0], [16.3, 204.0], [16.4, 204.0], [16.5, 204.0], [16.6, 204.0], [16.7, 204.0], [16.8, 205.0], [16.9, 205.0], [17.0, 205.0], [17.1, 205.0], [17.2, 205.0], [17.3, 206.0], [17.4, 206.0], [17.5, 206.0], [17.6, 206.0], [17.7, 206.0], [17.8, 206.0], [17.9, 206.0], [18.0, 207.0], [18.1, 207.0], [18.2, 207.0], [18.3, 207.0], [18.4, 207.0], [18.5, 207.0], [18.6, 208.0], [18.7, 208.0], [18.8, 208.0], [18.9, 208.0], [19.0, 208.0], [19.1, 208.0], [19.2, 208.0], [19.3, 208.0], [19.4, 208.0], [19.5, 208.0], [19.6, 208.0], [19.7, 208.0], [19.8, 209.0], [19.9, 209.0], [20.0, 209.0], [20.1, 209.0], [20.2, 209.0], [20.3, 209.0], [20.4, 209.0], [20.5, 210.0], [20.6, 210.0], [20.7, 210.0], [20.8, 210.0], [20.9, 210.0], [21.0, 210.0], [21.1, 210.0], [21.2, 210.0], [21.3, 210.0], [21.4, 210.0], [21.5, 211.0], [21.6, 211.0], [21.7, 211.0], [21.8, 211.0], [21.9, 211.0], [22.0, 211.0], [22.1, 211.0], [22.2, 212.0], [22.3, 212.0], [22.4, 212.0], [22.5, 212.0], [22.6, 213.0], [22.7, 213.0], [22.8, 213.0], [22.9, 214.0], [23.0, 214.0], [23.1, 214.0], [23.2, 214.0], [23.3, 214.0], [23.4, 214.0], [23.5, 214.0], [23.6, 214.0], [23.7, 214.0], [23.8, 214.0], [23.9, 215.0], [24.0, 215.0], [24.1, 215.0], [24.2, 215.0], [24.3, 215.0], [24.4, 215.0], [24.5, 215.0], [24.6, 215.0], [24.7, 216.0], [24.8, 216.0], [24.9, 216.0], [25.0, 216.0], [25.1, 216.0], [25.2, 216.0], [25.3, 216.0], [25.4, 216.0], [25.5, 216.0], [25.6, 216.0], [25.7, 216.0], [25.8, 216.0], [25.9, 216.0], [26.0, 216.0], [26.1, 216.0], [26.2, 216.0], [26.3, 217.0], [26.4, 217.0], [26.5, 217.0], [26.6, 217.0], [26.7, 217.0], [26.8, 217.0], [26.9, 217.0], [27.0, 217.0], [27.1, 217.0], [27.2, 217.0], [27.3, 217.0], [27.4, 217.0], [27.5, 217.0], [27.6, 217.0], [27.7, 217.0], [27.8, 217.0], [27.9, 218.0], [28.0, 218.0], [28.1, 218.0], [28.2, 218.0], [28.3, 218.0], [28.4, 218.0], [28.5, 218.0], [28.6, 218.0], [28.7, 218.0], [28.8, 218.0], [28.9, 218.0], [29.0, 218.0], [29.1, 218.0], [29.2, 218.0], [29.3, 219.0], [29.4, 219.0], [29.5, 219.0], [29.6, 219.0], [29.7, 219.0], [29.8, 219.0], [29.9, 219.0], [30.0, 219.0], [30.1, 219.0], [30.2, 219.0], [30.3, 219.0], [30.4, 219.0], [30.5, 219.0], [30.6, 219.0], [30.7, 219.0], [30.8, 219.0], [30.9, 219.0], [31.0, 219.0], [31.1, 219.0], [31.2, 219.0], [31.3, 219.0], [31.4, 219.0], [31.5, 220.0], [31.6, 220.0], [31.7, 220.0], [31.8, 220.0], [31.9, 220.0], [32.0, 220.0], [32.1, 220.0], [32.2, 220.0], [32.3, 220.0], [32.4, 220.0], [32.5, 220.0], [32.6, 220.0], [32.7, 220.0], [32.8, 220.0], [32.9, 220.0], [33.0, 220.0], [33.1, 220.0], [33.2, 220.0], [33.3, 220.0], [33.4, 220.0], [33.5, 220.0], [33.6, 220.0], [33.7, 220.0], [33.8, 220.0], [33.9, 220.0], [34.0, 220.0], [34.1, 220.0], [34.2, 220.0], [34.3, 220.0], [34.4, 220.0], [34.5, 221.0], [34.6, 221.0], [34.7, 221.0], [34.8, 221.0], [34.9, 221.0], [35.0, 221.0], [35.1, 221.0], [35.2, 221.0], [35.3, 221.0], [35.4, 221.0], [35.5, 221.0], [35.6, 221.0], [35.7, 221.0], [35.8, 221.0], [35.9, 221.0], [36.0, 221.0], [36.1, 221.0], [36.2, 221.0], [36.3, 221.0], [36.4, 221.0], [36.5, 221.0], [36.6, 221.0], [36.7, 221.0], [36.8, 221.0], [36.9, 221.0], [37.0, 221.0], [37.1, 221.0], [37.2, 221.0], [37.3, 221.0], [37.4, 221.0], [37.5, 221.0], [37.6, 221.0], [37.7, 221.0], [37.8, 221.0], [37.9, 222.0], [38.0, 222.0], [38.1, 222.0], [38.2, 222.0], [38.3, 222.0], [38.4, 222.0], [38.5, 222.0], [38.6, 222.0], [38.7, 222.0], [38.8, 222.0], [38.9, 222.0], [39.0, 222.0], [39.1, 222.0], [39.2, 222.0], [39.3, 222.0], [39.4, 222.0], [39.5, 222.0], [39.6, 222.0], [39.7, 222.0], [39.8, 222.0], [39.9, 222.0], [40.0, 222.0], [40.1, 222.0], [40.2, 222.0], [40.3, 222.0], [40.4, 222.0], [40.5, 222.0], [40.6, 222.0], [40.7, 222.0], [40.8, 222.0], [40.9, 222.0], [41.0, 223.0], [41.1, 223.0], [41.2, 223.0], [41.3, 223.0], [41.4, 223.0], [41.5, 223.0], [41.6, 223.0], [41.7, 223.0], [41.8, 223.0], [41.9, 223.0], [42.0, 223.0], [42.1, 223.0], [42.2, 223.0], [42.3, 223.0], [42.4, 223.0], [42.5, 223.0], [42.6, 223.0], [42.7, 223.0], [42.8, 223.0], [42.9, 223.0], [43.0, 223.0], [43.1, 223.0], [43.2, 223.0], [43.3, 223.0], [43.4, 223.0], [43.5, 224.0], [43.6, 224.0], [43.7, 224.0], [43.8, 224.0], [43.9, 224.0], [44.0, 224.0], [44.1, 224.0], [44.2, 224.0], [44.3, 224.0], [44.4, 224.0], [44.5, 224.0], [44.6, 224.0], [44.7, 224.0], [44.8, 224.0], [44.9, 224.0], [45.0, 224.0], [45.1, 224.0], [45.2, 224.0], [45.3, 224.0], [45.4, 224.0], [45.5, 224.0], [45.6, 224.0], [45.7, 224.0], [45.8, 224.0], [45.9, 224.0], [46.0, 224.0], [46.1, 224.0], [46.2, 224.0], [46.3, 225.0], [46.4, 225.0], [46.5, 225.0], [46.6, 225.0], [46.7, 225.0], [46.8, 225.0], [46.9, 225.0], [47.0, 225.0], [47.1, 225.0], [47.2, 225.0], [47.3, 225.0], [47.4, 225.0], [47.5, 225.0], [47.6, 225.0], [47.7, 225.0], [47.8, 225.0], [47.9, 225.0], [48.0, 225.0], [48.1, 225.0], [48.2, 225.0], [48.3, 225.0], [48.4, 225.0], [48.5, 225.0], [48.6, 226.0], [48.7, 226.0], [48.8, 226.0], [48.9, 226.0], [49.0, 226.0], [49.1, 226.0], [49.2, 226.0], [49.3, 226.0], [49.4, 226.0], [49.5, 226.0], [49.6, 226.0], [49.7, 226.0], [49.8, 226.0], [49.9, 226.0], [50.0, 226.0], [50.1, 226.0], [50.2, 226.0], [50.3, 226.0], [50.4, 227.0], [50.5, 227.0], [50.6, 227.0], [50.7, 227.0], [50.8, 227.0], [50.9, 227.0], [51.0, 227.0], [51.1, 227.0], [51.2, 227.0], [51.3, 227.0], [51.4, 227.0], [51.5, 228.0], [51.6, 228.0], [51.7, 228.0], [51.8, 228.0], [51.9, 228.0], [52.0, 228.0], [52.1, 228.0], [52.2, 228.0], [52.3, 228.0], [52.4, 228.0], [52.5, 228.0], [52.6, 228.0], [52.7, 229.0], [52.8, 229.0], [52.9, 229.0], [53.0, 229.0], [53.1, 229.0], [53.2, 229.0], [53.3, 229.0], [53.4, 229.0], [53.5, 229.0], [53.6, 229.0], [53.7, 229.0], [53.8, 229.0], [53.9, 229.0], [54.0, 229.0], [54.1, 229.0], [54.2, 229.0], [54.3, 229.0], [54.4, 229.0], [54.5, 229.0], [54.6, 229.0], [54.7, 230.0], [54.8, 230.0], [54.9, 230.0], [55.0, 230.0], [55.1, 230.0], [55.2, 230.0], [55.3, 230.0], [55.4, 230.0], [55.5, 230.0], [55.6, 230.0], [55.7, 230.0], [55.8, 230.0], [55.9, 230.0], [56.0, 231.0], [56.1, 231.0], [56.2, 231.0], [56.3, 231.0], [56.4, 231.0], [56.5, 231.0], [56.6, 231.0], [56.7, 231.0], [56.8, 231.0], [56.9, 231.0], [57.0, 231.0], [57.1, 231.0], [57.2, 231.0], [57.3, 231.0], [57.4, 231.0], [57.5, 231.0], [57.6, 231.0], [57.7, 232.0], [57.8, 232.0], [57.9, 232.0], [58.0, 232.0], [58.1, 232.0], [58.2, 232.0], [58.3, 232.0], [58.4, 232.0], [58.5, 232.0], [58.6, 232.0], [58.7, 232.0], [58.8, 232.0], [58.9, 232.0], [59.0, 232.0], [59.1, 232.0], [59.2, 233.0], [59.3, 233.0], [59.4, 233.0], [59.5, 233.0], [59.6, 233.0], [59.7, 233.0], [59.8, 233.0], [59.9, 233.0], [60.0, 233.0], [60.1, 233.0], [60.2, 234.0], [60.3, 234.0], [60.4, 234.0], [60.5, 234.0], [60.6, 234.0], [60.7, 234.0], [60.8, 234.0], [60.9, 234.0], [61.0, 234.0], [61.1, 234.0], [61.2, 234.0], [61.3, 234.0], [61.4, 234.0], [61.5, 234.0], [61.6, 234.0], [61.7, 234.0], [61.8, 235.0], [61.9, 235.0], [62.0, 235.0], [62.1, 235.0], [62.2, 235.0], [62.3, 235.0], [62.4, 235.0], [62.5, 236.0], [62.6, 236.0], [62.7, 236.0], [62.8, 236.0], [62.9, 236.0], [63.0, 236.0], [63.1, 236.0], [63.2, 236.0], [63.3, 236.0], [63.4, 236.0], [63.5, 236.0], [63.6, 236.0], [63.7, 237.0], [63.8, 237.0], [63.9, 237.0], [64.0, 237.0], [64.1, 237.0], [64.2, 237.0], [64.3, 237.0], [64.4, 237.0], [64.5, 238.0], [64.6, 238.0], [64.7, 238.0], [64.8, 238.0], [64.9, 238.0], [65.0, 238.0], [65.1, 238.0], [65.2, 238.0], [65.3, 238.0], [65.4, 238.0], [65.5, 239.0], [65.6, 239.0], [65.7, 239.0], [65.8, 239.0], [65.9, 239.0], [66.0, 239.0], [66.1, 239.0], [66.2, 239.0], [66.3, 239.0], [66.4, 240.0], [66.5, 240.0], [66.6, 240.0], [66.7, 240.0], [66.8, 240.0], [66.9, 241.0], [67.0, 241.0], [67.1, 241.0], [67.2, 241.0], [67.3, 241.0], [67.4, 241.0], [67.5, 241.0], [67.6, 241.0], [67.7, 241.0], [67.8, 241.0], [67.9, 241.0], [68.0, 241.0], [68.1, 242.0], [68.2, 242.0], [68.3, 242.0], [68.4, 242.0], [68.5, 243.0], [68.6, 243.0], [68.7, 243.0], [68.8, 243.0], [68.9, 243.0], [69.0, 243.0], [69.1, 243.0], [69.2, 244.0], [69.3, 244.0], [69.4, 244.0], [69.5, 244.0], [69.6, 245.0], [69.7, 245.0], [69.8, 245.0], [69.9, 245.0], [70.0, 245.0], [70.1, 245.0], [70.2, 245.0], [70.3, 245.0], [70.4, 246.0], [70.5, 246.0], [70.6, 246.0], [70.7, 247.0], [70.8, 247.0], [70.9, 247.0], [71.0, 247.0], [71.1, 247.0], [71.2, 248.0], [71.3, 248.0], [71.4, 248.0], [71.5, 249.0], [71.6, 249.0], [71.7, 249.0], [71.8, 250.0], [71.9, 250.0], [72.0, 250.0], [72.1, 250.0], [72.2, 250.0], [72.3, 251.0], [72.4, 251.0], [72.5, 251.0], [72.6, 251.0], [72.7, 251.0], [72.8, 251.0], [72.9, 251.0], [73.0, 251.0], [73.1, 251.0], [73.2, 251.0], [73.3, 251.0], [73.4, 251.0], [73.5, 252.0], [73.6, 252.0], [73.7, 252.0], [73.8, 252.0], [73.9, 252.0], [74.0, 252.0], [74.1, 252.0], [74.2, 253.0], [74.3, 253.0], [74.4, 253.0], [74.5, 253.0], [74.6, 254.0], [74.7, 254.0], [74.8, 254.0], [74.9, 255.0], [75.0, 255.0], [75.1, 255.0], [75.2, 255.0], [75.3, 256.0], [75.4, 256.0], [75.5, 256.0], [75.6, 256.0], [75.7, 256.0], [75.8, 257.0], [75.9, 257.0], [76.0, 258.0], [76.1, 258.0], [76.2, 258.0], [76.3, 258.0], [76.4, 258.0], [76.5, 259.0], [76.6, 259.0], [76.7, 259.0], [76.8, 259.0], [76.9, 259.0], [77.0, 259.0], [77.1, 259.0], [77.2, 259.0], [77.3, 259.0], [77.4, 259.0], [77.5, 259.0], [77.6, 259.0], [77.7, 260.0], [77.8, 260.0], [77.9, 260.0], [78.0, 260.0], [78.1, 260.0], [78.2, 260.0], [78.3, 261.0], [78.4, 261.0], [78.5, 261.0], [78.6, 261.0], [78.7, 261.0], [78.8, 262.0], [78.9, 262.0], [79.0, 262.0], [79.1, 262.0], [79.2, 262.0], [79.3, 262.0], [79.4, 263.0], [79.5, 263.0], [79.6, 263.0], [79.7, 263.0], [79.8, 264.0], [79.9, 265.0], [80.0, 265.0], [80.1, 265.0], [80.2, 266.0], [80.3, 266.0], [80.4, 266.0], [80.5, 266.0], [80.6, 267.0], [80.7, 269.0], [80.8, 269.0], [80.9, 270.0], [81.0, 271.0], [81.1, 271.0], [81.2, 271.0], [81.3, 272.0], [81.4, 273.0], [81.5, 274.0], [81.6, 274.0], [81.7, 274.0], [81.8, 275.0], [81.9, 275.0], [82.0, 275.0], [82.1, 275.0], [82.2, 277.0], [82.3, 277.0], [82.4, 278.0], [82.5, 279.0], [82.6, 280.0], [82.7, 280.0], [82.8, 281.0], [82.9, 283.0], [83.0, 285.0], [83.1, 285.0], [83.2, 285.0], [83.3, 286.0], [83.4, 286.0], [83.5, 287.0], [83.6, 289.0], [83.7, 290.0], [83.8, 290.0], [83.9, 293.0], [84.0, 294.0], [84.1, 294.0], [84.2, 294.0], [84.3, 296.0], [84.4, 296.0], [84.5, 297.0], [84.6, 297.0], [84.7, 297.0], [84.8, 297.0], [84.9, 299.0], [85.0, 299.0], [85.1, 302.0], [85.2, 303.0], [85.3, 303.0], [85.4, 305.0], [85.5, 305.0], [85.6, 310.0], [85.7, 310.0], [85.8, 321.0], [85.9, 329.0], [86.0, 336.0], [86.1, 336.0], [86.2, 361.0], [86.3, 362.0], [86.4, 363.0], [86.5, 363.0], [86.6, 366.0], [86.7, 371.0], [86.8, 371.0], [86.9, 376.0], [87.0, 378.0], [87.1, 387.0], [87.2, 387.0], [87.3, 391.0], [87.4, 396.0], [87.5, 398.0], [87.6, 398.0], [87.7, 401.0], [87.8, 413.0], [87.9, 413.0], [88.0, 413.0], [88.1, 416.0], [88.2, 417.0], [88.3, 418.0], [88.4, 418.0], [88.5, 418.0], [88.6, 419.0], [88.7, 419.0], [88.8, 420.0], [88.9, 424.0], [89.0, 425.0], [89.1, 425.0], [89.2, 426.0], [89.3, 428.0], [89.4, 428.0], [89.5, 428.0], [89.6, 430.0], [89.7, 430.0], [89.8, 432.0], [89.9, 432.0], [90.0, 433.0], [90.1, 439.0], [90.2, 439.0], [90.3, 453.0], [90.4, 454.0], [90.5, 466.0], [90.6, 466.0], [90.7, 476.0], [90.8, 479.0], [90.9, 483.0], [91.0, 483.0], [91.1, 486.0], [91.2, 490.0], [91.3, 493.0], [91.4, 493.0], [91.5, 500.0], [91.6, 508.0], [91.7, 508.0], [91.8, 508.0], [91.9, 509.0], [92.0, 513.0], [92.1, 513.0], [92.2, 514.0], [92.3, 516.0], [92.4, 518.0], [92.5, 518.0], [92.6, 530.0], [92.7, 534.0], [92.8, 542.0], [92.9, 542.0], [93.0, 545.0], [93.1, 600.0], [93.2, 603.0], [93.3, 603.0], [93.4, 603.0], [93.5, 604.0], [93.6, 604.0], [93.7, 605.0], [93.8, 606.0], [93.9, 607.0], [94.0, 607.0], [94.1, 612.0], [94.2, 616.0], [94.3, 620.0], [94.4, 620.0], [94.5, 625.0], [94.6, 629.0], [94.7, 631.0], [94.8, 631.0], [94.9, 636.0], [95.0, 637.0], [95.1, 637.0], [95.2, 647.0], [95.3, 649.0], [95.4, 651.0], [95.5, 651.0], [95.6, 663.0], [95.7, 664.0], [95.8, 665.0], [95.9, 665.0], [96.0, 668.0], [96.1, 676.0], [96.2, 681.0], [96.3, 681.0], [96.4, 681.0], [96.5, 689.0], [96.6, 690.0], [96.7, 690.0], [96.8, 690.0], [96.9, 704.0], [97.0, 704.0], [97.1, 709.0], [97.2, 709.0], [97.3, 717.0], [97.4, 717.0], [97.5, 718.0], [97.6, 735.0], [97.7, 737.0], [97.8, 737.0], [97.9, 770.0], [98.0, 814.0], [98.1, 818.0], [98.2, 818.0], [98.3, 839.0], [98.4, 848.0], [98.5, 848.0], [98.6, 860.0], [98.7, 877.0], [98.8, 878.0], [98.9, 878.0], [99.0, 884.0], [99.1, 911.0], [99.2, 985.0], [99.3, 985.0], [99.4, 6236.0], [99.5, 7275.0], [99.6, 8640.0], [99.7, 8640.0], [99.8, 10234.0], [99.9, 19647.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 537.0, "series": [{"data": [[8600.0, 1.0], [600.0, 28.0], [10200.0, 1.0], [700.0, 8.0], [800.0, 8.0], [200.0, 537.0], [900.0, 2.0], [300.0, 19.0], [19600.0, 1.0], [6200.0, 1.0], [100.0, 88.0], [400.0, 28.0], [7200.0, 1.0], [500.0, 12.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 673.0, "series": [{"data": [[0.0, 673.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 57.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93877551020408, "minX": 1.60422288E12, "maxY": 9.93877551020408, "series": [{"data": [[1.60422288E12, 9.93877551020408]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422288E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 187.0, "minX": 1.0, "maxY": 19647.0, "series": [{"data": [[8.0, 195.0], [4.0, 187.0], [2.0, 7275.0], [1.0, 19647.0], [9.0, 190.0], [10.0, 305.5895316804404], [5.0, 430.0], [6.0, 203.0], [3.0, 600.0], [7.0, 204.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 341.2095238095235]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5339.283333333334, "minX": 1.60422288E12, "maxY": 373288.4666666667, "series": [{"data": [[1.60422288E12, 373288.4666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422288E12, 5339.283333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422288E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 341.2095238095235, "minX": 1.60422288E12, "maxY": 341.2095238095235, "series": [{"data": [[1.60422288E12, 341.2095238095235]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422288E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 341.07891156462614, "minX": 1.60422288E12, "maxY": 341.07891156462614, "series": [{"data": [[1.60422288E12, 341.07891156462614]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422288E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.1197278911564626, "minX": 1.60422288E12, "maxY": 0.1197278911564626, "series": [{"data": [[1.60422288E12, 0.1197278911564626]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422288E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.60422288E12, "maxY": 19647.0, "series": [{"data": [[1.60422288E12, 19647.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422288E12, 187.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422288E12, 187.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422288E12, 187.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422288E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422288E12, 226.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422288E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 206.0, "minX": 2.0, "maxY": 13461.0, "series": [{"data": [[33.0, 222.0], [32.0, 226.0], [2.0, 13461.0], [34.0, 206.0], [20.0, 206.5], [22.0, 327.5], [25.0, 283.0], [26.0, 208.5], [27.0, 232.0], [28.0, 218.0], [29.0, 236.0], [30.0, 215.0], [31.0, 229.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 206.0, "minX": 2.0, "maxY": 13461.0, "series": [{"data": [[33.0, 222.0], [32.0, 225.5], [2.0, 13461.0], [34.0, 206.0], [20.0, 206.5], [22.0, 327.5], [25.0, 282.0], [26.0, 208.0], [27.0, 232.0], [28.0, 218.0], [29.0, 236.0], [30.0, 215.0], [31.0, 229.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60422288E12, "maxY": 12.25, "series": [{"data": [[1.60422288E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422288E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60422288E12, "maxY": 12.25, "series": [{"data": [[1.60422288E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422288E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60422288E12, "maxY": 12.25, "series": [{"data": [[1.60422288E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422288E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60422288E12, "maxY": 12.25, "series": [{"data": [[1.60422288E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422288E12, "title": "Total Transactions Per Second"}},
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

