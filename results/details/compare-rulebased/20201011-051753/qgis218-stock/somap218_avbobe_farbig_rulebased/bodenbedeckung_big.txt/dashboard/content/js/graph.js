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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2193.0, "series": [{"data": [[0.0, 28.0], [0.1, 29.0], [0.2, 30.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 32.0], [0.7, 32.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 33.0], [1.3, 33.0], [1.4, 33.0], [1.5, 34.0], [1.6, 34.0], [1.7, 34.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 38.0], [4.2, 38.0], [4.3, 38.0], [4.4, 38.0], [4.5, 38.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 39.0], [5.3, 39.0], [5.4, 39.0], [5.5, 40.0], [5.6, 40.0], [5.7, 40.0], [5.8, 40.0], [5.9, 40.0], [6.0, 40.0], [6.1, 40.0], [6.2, 40.0], [6.3, 40.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 44.0], [8.2, 44.0], [8.3, 44.0], [8.4, 44.0], [8.5, 45.0], [8.6, 45.0], [8.7, 45.0], [8.8, 45.0], [8.9, 45.0], [9.0, 46.0], [9.1, 46.0], [9.2, 46.0], [9.3, 47.0], [9.4, 47.0], [9.5, 47.0], [9.6, 47.0], [9.7, 47.0], [9.8, 48.0], [9.9, 48.0], [10.0, 48.0], [10.1, 48.0], [10.2, 48.0], [10.3, 48.0], [10.4, 48.0], [10.5, 49.0], [10.6, 49.0], [10.7, 49.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 51.0], [12.2, 51.0], [12.3, 51.0], [12.4, 51.0], [12.5, 51.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 52.0], [13.1, 52.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 54.0], [13.8, 54.0], [13.9, 54.0], [14.0, 54.0], [14.1, 54.0], [14.2, 54.0], [14.3, 54.0], [14.4, 55.0], [14.5, 55.0], [14.6, 55.0], [14.7, 55.0], [14.8, 56.0], [14.9, 56.0], [15.0, 56.0], [15.1, 56.0], [15.2, 56.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 57.0], [15.7, 58.0], [15.8, 58.0], [15.9, 58.0], [16.0, 58.0], [16.1, 58.0], [16.2, 59.0], [16.3, 59.0], [16.4, 59.0], [16.5, 59.0], [16.6, 59.0], [16.7, 60.0], [16.8, 60.0], [16.9, 60.0], [17.0, 60.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 61.0], [17.6, 61.0], [17.7, 62.0], [17.8, 62.0], [17.9, 62.0], [18.0, 62.0], [18.1, 63.0], [18.2, 63.0], [18.3, 63.0], [18.4, 63.0], [18.5, 63.0], [18.6, 63.0], [18.7, 64.0], [18.8, 64.0], [18.9, 64.0], [19.0, 64.0], [19.1, 64.0], [19.2, 64.0], [19.3, 65.0], [19.4, 65.0], [19.5, 65.0], [19.6, 65.0], [19.7, 65.0], [19.8, 66.0], [19.9, 66.0], [20.0, 66.0], [20.1, 66.0], [20.2, 66.0], [20.3, 67.0], [20.4, 67.0], [20.5, 67.0], [20.6, 67.0], [20.7, 67.0], [20.8, 68.0], [20.9, 68.0], [21.0, 68.0], [21.1, 68.0], [21.2, 68.0], [21.3, 69.0], [21.4, 69.0], [21.5, 69.0], [21.6, 69.0], [21.7, 70.0], [21.8, 70.0], [21.9, 70.0], [22.0, 70.0], [22.1, 70.0], [22.2, 71.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 71.0], [22.7, 71.0], [22.8, 72.0], [22.9, 72.0], [23.0, 72.0], [23.1, 72.0], [23.2, 73.0], [23.3, 73.0], [23.4, 73.0], [23.5, 74.0], [23.6, 74.0], [23.7, 74.0], [23.8, 74.0], [23.9, 74.0], [24.0, 75.0], [24.1, 75.0], [24.2, 75.0], [24.3, 75.0], [24.4, 76.0], [24.5, 76.0], [24.6, 76.0], [24.7, 76.0], [24.8, 76.0], [24.9, 77.0], [25.0, 77.0], [25.1, 77.0], [25.2, 77.0], [25.3, 77.0], [25.4, 78.0], [25.5, 78.0], [25.6, 78.0], [25.7, 78.0], [25.8, 79.0], [25.9, 79.0], [26.0, 79.0], [26.1, 79.0], [26.2, 80.0], [26.3, 80.0], [26.4, 80.0], [26.5, 80.0], [26.6, 80.0], [26.7, 81.0], [26.8, 81.0], [26.9, 81.0], [27.0, 81.0], [27.1, 81.0], [27.2, 82.0], [27.3, 82.0], [27.4, 82.0], [27.5, 82.0], [27.6, 83.0], [27.7, 83.0], [27.8, 83.0], [27.9, 83.0], [28.0, 83.0], [28.1, 84.0], [28.2, 84.0], [28.3, 84.0], [28.4, 84.0], [28.5, 84.0], [28.6, 85.0], [28.7, 85.0], [28.8, 85.0], [28.9, 86.0], [29.0, 86.0], [29.1, 86.0], [29.2, 86.0], [29.3, 87.0], [29.4, 87.0], [29.5, 88.0], [29.6, 88.0], [29.7, 88.0], [29.8, 88.0], [29.9, 88.0], [30.0, 89.0], [30.1, 89.0], [30.2, 89.0], [30.3, 89.0], [30.4, 90.0], [30.5, 90.0], [30.6, 90.0], [30.7, 91.0], [30.8, 91.0], [30.9, 92.0], [31.0, 92.0], [31.1, 92.0], [31.2, 92.0], [31.3, 93.0], [31.4, 93.0], [31.5, 93.0], [31.6, 93.0], [31.7, 94.0], [31.8, 94.0], [31.9, 94.0], [32.0, 95.0], [32.1, 95.0], [32.2, 95.0], [32.3, 95.0], [32.4, 95.0], [32.5, 96.0], [32.6, 96.0], [32.7, 96.0], [32.8, 96.0], [32.9, 97.0], [33.0, 97.0], [33.1, 97.0], [33.2, 97.0], [33.3, 98.0], [33.4, 98.0], [33.5, 98.0], [33.6, 99.0], [33.7, 99.0], [33.8, 99.0], [33.9, 99.0], [34.0, 100.0], [34.1, 101.0], [34.2, 101.0], [34.3, 101.0], [34.4, 101.0], [34.5, 101.0], [34.6, 102.0], [34.7, 102.0], [34.8, 103.0], [34.9, 103.0], [35.0, 103.0], [35.1, 103.0], [35.2, 103.0], [35.3, 104.0], [35.4, 104.0], [35.5, 104.0], [35.6, 104.0], [35.7, 104.0], [35.8, 104.0], [35.9, 105.0], [36.0, 105.0], [36.1, 105.0], [36.2, 105.0], [36.3, 105.0], [36.4, 105.0], [36.5, 105.0], [36.6, 106.0], [36.7, 106.0], [36.8, 106.0], [36.9, 106.0], [37.0, 106.0], [37.1, 106.0], [37.2, 106.0], [37.3, 107.0], [37.4, 107.0], [37.5, 107.0], [37.6, 107.0], [37.7, 107.0], [37.8, 108.0], [37.9, 108.0], [38.0, 108.0], [38.1, 108.0], [38.2, 108.0], [38.3, 108.0], [38.4, 109.0], [38.5, 109.0], [38.6, 109.0], [38.7, 109.0], [38.8, 109.0], [38.9, 109.0], [39.0, 110.0], [39.1, 110.0], [39.2, 110.0], [39.3, 110.0], [39.4, 111.0], [39.5, 111.0], [39.6, 111.0], [39.7, 111.0], [39.8, 112.0], [39.9, 112.0], [40.0, 112.0], [40.1, 112.0], [40.2, 112.0], [40.3, 113.0], [40.4, 113.0], [40.5, 113.0], [40.6, 114.0], [40.7, 114.0], [40.8, 114.0], [40.9, 115.0], [41.0, 115.0], [41.1, 115.0], [41.2, 115.0], [41.3, 116.0], [41.4, 116.0], [41.5, 116.0], [41.6, 116.0], [41.7, 117.0], [41.8, 117.0], [41.9, 117.0], [42.0, 117.0], [42.1, 117.0], [42.2, 118.0], [42.3, 118.0], [42.4, 118.0], [42.5, 119.0], [42.6, 119.0], [42.7, 119.0], [42.8, 120.0], [42.9, 120.0], [43.0, 120.0], [43.1, 121.0], [43.2, 121.0], [43.3, 121.0], [43.4, 121.0], [43.5, 122.0], [43.6, 122.0], [43.7, 122.0], [43.8, 123.0], [43.9, 123.0], [44.0, 123.0], [44.1, 124.0], [44.2, 124.0], [44.3, 125.0], [44.4, 125.0], [44.5, 125.0], [44.6, 125.0], [44.7, 126.0], [44.8, 126.0], [44.9, 126.0], [45.0, 126.0], [45.1, 127.0], [45.2, 127.0], [45.3, 127.0], [45.4, 128.0], [45.5, 128.0], [45.6, 128.0], [45.7, 128.0], [45.8, 129.0], [45.9, 129.0], [46.0, 129.0], [46.1, 129.0], [46.2, 130.0], [46.3, 130.0], [46.4, 130.0], [46.5, 131.0], [46.6, 131.0], [46.7, 132.0], [46.8, 132.0], [46.9, 132.0], [47.0, 132.0], [47.1, 133.0], [47.2, 133.0], [47.3, 133.0], [47.4, 133.0], [47.5, 134.0], [47.6, 134.0], [47.7, 135.0], [47.8, 135.0], [47.9, 136.0], [48.0, 136.0], [48.1, 136.0], [48.2, 137.0], [48.3, 137.0], [48.4, 138.0], [48.5, 138.0], [48.6, 139.0], [48.7, 139.0], [48.8, 140.0], [48.9, 140.0], [49.0, 140.0], [49.1, 140.0], [49.2, 140.0], [49.3, 141.0], [49.4, 141.0], [49.5, 141.0], [49.6, 142.0], [49.7, 143.0], [49.8, 143.0], [49.9, 144.0], [50.0, 144.0], [50.1, 145.0], [50.2, 145.0], [50.3, 146.0], [50.4, 146.0], [50.5, 147.0], [50.6, 147.0], [50.7, 148.0], [50.8, 148.0], [50.9, 148.0], [51.0, 149.0], [51.1, 149.0], [51.2, 150.0], [51.3, 150.0], [51.4, 150.0], [51.5, 151.0], [51.6, 152.0], [51.7, 152.0], [51.8, 153.0], [51.9, 153.0], [52.0, 153.0], [52.1, 154.0], [52.2, 155.0], [52.3, 155.0], [52.4, 155.0], [52.5, 156.0], [52.6, 157.0], [52.7, 158.0], [52.8, 159.0], [52.9, 159.0], [53.0, 159.0], [53.1, 160.0], [53.2, 160.0], [53.3, 161.0], [53.4, 161.0], [53.5, 162.0], [53.6, 162.0], [53.7, 163.0], [53.8, 163.0], [53.9, 164.0], [54.0, 164.0], [54.1, 165.0], [54.2, 166.0], [54.3, 166.0], [54.4, 167.0], [54.5, 167.0], [54.6, 168.0], [54.7, 169.0], [54.8, 170.0], [54.9, 171.0], [55.0, 172.0], [55.1, 172.0], [55.2, 173.0], [55.3, 173.0], [55.4, 174.0], [55.5, 175.0], [55.6, 176.0], [55.7, 176.0], [55.8, 177.0], [55.9, 178.0], [56.0, 179.0], [56.1, 179.0], [56.2, 180.0], [56.3, 180.0], [56.4, 180.0], [56.5, 181.0], [56.6, 181.0], [56.7, 182.0], [56.8, 183.0], [56.9, 184.0], [57.0, 186.0], [57.1, 187.0], [57.2, 188.0], [57.3, 188.0], [57.4, 189.0], [57.5, 190.0], [57.6, 190.0], [57.7, 190.0], [57.8, 191.0], [57.9, 192.0], [58.0, 192.0], [58.1, 193.0], [58.2, 194.0], [58.3, 194.0], [58.4, 195.0], [58.5, 195.0], [58.6, 196.0], [58.7, 197.0], [58.8, 197.0], [58.9, 198.0], [59.0, 198.0], [59.1, 199.0], [59.2, 200.0], [59.3, 200.0], [59.4, 200.0], [59.5, 202.0], [59.6, 202.0], [59.7, 203.0], [59.8, 203.0], [59.9, 204.0], [60.0, 205.0], [60.1, 206.0], [60.2, 206.0], [60.3, 207.0], [60.4, 208.0], [60.5, 208.0], [60.6, 209.0], [60.7, 211.0], [60.8, 211.0], [60.9, 212.0], [61.0, 212.0], [61.1, 213.0], [61.2, 214.0], [61.3, 214.0], [61.4, 214.0], [61.5, 214.0], [61.6, 216.0], [61.7, 216.0], [61.8, 217.0], [61.9, 217.0], [62.0, 218.0], [62.1, 219.0], [62.2, 220.0], [62.3, 220.0], [62.4, 221.0], [62.5, 221.0], [62.6, 222.0], [62.7, 223.0], [62.8, 223.0], [62.9, 224.0], [63.0, 224.0], [63.1, 225.0], [63.2, 226.0], [63.3, 227.0], [63.4, 228.0], [63.5, 229.0], [63.6, 229.0], [63.7, 230.0], [63.8, 231.0], [63.9, 232.0], [64.0, 232.0], [64.1, 233.0], [64.2, 233.0], [64.3, 234.0], [64.4, 235.0], [64.5, 236.0], [64.6, 237.0], [64.7, 238.0], [64.8, 239.0], [64.9, 241.0], [65.0, 242.0], [65.1, 243.0], [65.2, 243.0], [65.3, 244.0], [65.4, 245.0], [65.5, 246.0], [65.6, 248.0], [65.7, 248.0], [65.8, 249.0], [65.9, 250.0], [66.0, 250.0], [66.1, 251.0], [66.2, 252.0], [66.3, 252.0], [66.4, 253.0], [66.5, 253.0], [66.6, 254.0], [66.7, 254.0], [66.8, 255.0], [66.9, 256.0], [67.0, 257.0], [67.1, 257.0], [67.2, 257.0], [67.3, 258.0], [67.4, 258.0], [67.5, 259.0], [67.6, 260.0], [67.7, 260.0], [67.8, 262.0], [67.9, 264.0], [68.0, 265.0], [68.1, 265.0], [68.2, 266.0], [68.3, 267.0], [68.4, 269.0], [68.5, 269.0], [68.6, 270.0], [68.7, 271.0], [68.8, 272.0], [68.9, 273.0], [69.0, 274.0], [69.1, 275.0], [69.2, 275.0], [69.3, 276.0], [69.4, 277.0], [69.5, 278.0], [69.6, 279.0], [69.7, 280.0], [69.8, 281.0], [69.9, 281.0], [70.0, 282.0], [70.1, 283.0], [70.2, 284.0], [70.3, 285.0], [70.4, 286.0], [70.5, 287.0], [70.6, 287.0], [70.7, 288.0], [70.8, 289.0], [70.9, 290.0], [71.0, 291.0], [71.1, 292.0], [71.2, 292.0], [71.3, 294.0], [71.4, 294.0], [71.5, 295.0], [71.6, 296.0], [71.7, 297.0], [71.8, 298.0], [71.9, 299.0], [72.0, 300.0], [72.1, 300.0], [72.2, 301.0], [72.3, 301.0], [72.4, 302.0], [72.5, 303.0], [72.6, 304.0], [72.7, 306.0], [72.8, 307.0], [72.9, 308.0], [73.0, 309.0], [73.1, 310.0], [73.2, 312.0], [73.3, 312.0], [73.4, 314.0], [73.5, 315.0], [73.6, 316.0], [73.7, 318.0], [73.8, 320.0], [73.9, 321.0], [74.0, 322.0], [74.1, 323.0], [74.2, 324.0], [74.3, 325.0], [74.4, 327.0], [74.5, 327.0], [74.6, 328.0], [74.7, 329.0], [74.8, 330.0], [74.9, 332.0], [75.0, 334.0], [75.1, 335.0], [75.2, 337.0], [75.3, 339.0], [75.4, 340.0], [75.5, 341.0], [75.6, 342.0], [75.7, 343.0], [75.8, 344.0], [75.9, 345.0], [76.0, 347.0], [76.1, 349.0], [76.2, 350.0], [76.3, 351.0], [76.4, 353.0], [76.5, 354.0], [76.6, 355.0], [76.7, 357.0], [76.8, 358.0], [76.9, 358.0], [77.0, 359.0], [77.1, 360.0], [77.2, 361.0], [77.3, 361.0], [77.4, 363.0], [77.5, 364.0], [77.6, 365.0], [77.7, 366.0], [77.8, 367.0], [77.9, 370.0], [78.0, 371.0], [78.1, 373.0], [78.2, 374.0], [78.3, 375.0], [78.4, 376.0], [78.5, 376.0], [78.6, 378.0], [78.7, 379.0], [78.8, 380.0], [78.9, 382.0], [79.0, 383.0], [79.1, 385.0], [79.2, 386.0], [79.3, 388.0], [79.4, 389.0], [79.5, 391.0], [79.6, 391.0], [79.7, 392.0], [79.8, 393.0], [79.9, 394.0], [80.0, 395.0], [80.1, 396.0], [80.2, 397.0], [80.3, 398.0], [80.4, 399.0], [80.5, 401.0], [80.6, 402.0], [80.7, 404.0], [80.8, 407.0], [80.9, 409.0], [81.0, 410.0], [81.1, 412.0], [81.2, 414.0], [81.3, 415.0], [81.4, 418.0], [81.5, 419.0], [81.6, 421.0], [81.7, 423.0], [81.8, 424.0], [81.9, 425.0], [82.0, 425.0], [82.1, 428.0], [82.2, 431.0], [82.3, 432.0], [82.4, 434.0], [82.5, 435.0], [82.6, 439.0], [82.7, 442.0], [82.8, 443.0], [82.9, 444.0], [83.0, 445.0], [83.1, 446.0], [83.2, 449.0], [83.3, 451.0], [83.4, 452.0], [83.5, 453.0], [83.6, 454.0], [83.7, 456.0], [83.8, 456.0], [83.9, 458.0], [84.0, 461.0], [84.1, 462.0], [84.2, 465.0], [84.3, 467.0], [84.4, 468.0], [84.5, 469.0], [84.6, 472.0], [84.7, 474.0], [84.8, 475.0], [84.9, 476.0], [85.0, 478.0], [85.1, 478.0], [85.2, 479.0], [85.3, 480.0], [85.4, 481.0], [85.5, 482.0], [85.6, 483.0], [85.7, 485.0], [85.8, 486.0], [85.9, 486.0], [86.0, 489.0], [86.1, 489.0], [86.2, 491.0], [86.3, 492.0], [86.4, 493.0], [86.5, 495.0], [86.6, 497.0], [86.7, 497.0], [86.8, 499.0], [86.9, 500.0], [87.0, 501.0], [87.1, 502.0], [87.2, 503.0], [87.3, 503.0], [87.4, 505.0], [87.5, 506.0], [87.6, 508.0], [87.7, 509.0], [87.8, 511.0], [87.9, 513.0], [88.0, 517.0], [88.1, 518.0], [88.2, 520.0], [88.3, 521.0], [88.4, 523.0], [88.5, 525.0], [88.6, 527.0], [88.7, 528.0], [88.8, 530.0], [88.9, 531.0], [89.0, 532.0], [89.1, 533.0], [89.2, 535.0], [89.3, 536.0], [89.4, 538.0], [89.5, 539.0], [89.6, 543.0], [89.7, 544.0], [89.8, 546.0], [89.9, 547.0], [90.0, 548.0], [90.1, 549.0], [90.2, 551.0], [90.3, 553.0], [90.4, 555.0], [90.5, 557.0], [90.6, 559.0], [90.7, 561.0], [90.8, 561.0], [90.9, 562.0], [91.0, 564.0], [91.1, 565.0], [91.2, 568.0], [91.3, 570.0], [91.4, 572.0], [91.5, 575.0], [91.6, 577.0], [91.7, 578.0], [91.8, 580.0], [91.9, 581.0], [92.0, 583.0], [92.1, 585.0], [92.2, 587.0], [92.3, 588.0], [92.4, 590.0], [92.5, 591.0], [92.6, 594.0], [92.7, 597.0], [92.8, 602.0], [92.9, 602.0], [93.0, 603.0], [93.1, 604.0], [93.2, 606.0], [93.3, 608.0], [93.4, 611.0], [93.5, 616.0], [93.6, 617.0], [93.7, 619.0], [93.8, 622.0], [93.9, 624.0], [94.0, 628.0], [94.1, 630.0], [94.2, 631.0], [94.3, 633.0], [94.4, 634.0], [94.5, 637.0], [94.6, 638.0], [94.7, 639.0], [94.8, 643.0], [94.9, 644.0], [95.0, 645.0], [95.1, 647.0], [95.2, 649.0], [95.3, 651.0], [95.4, 654.0], [95.5, 657.0], [95.6, 659.0], [95.7, 660.0], [95.8, 664.0], [95.9, 668.0], [96.0, 672.0], [96.1, 677.0], [96.2, 679.0], [96.3, 680.0], [96.4, 686.0], [96.5, 689.0], [96.6, 692.0], [96.7, 699.0], [96.8, 703.0], [96.9, 706.0], [97.0, 714.0], [97.1, 717.0], [97.2, 721.0], [97.3, 726.0], [97.4, 730.0], [97.5, 737.0], [97.6, 742.0], [97.7, 746.0], [97.8, 751.0], [97.9, 755.0], [98.0, 765.0], [98.1, 771.0], [98.2, 780.0], [98.3, 789.0], [98.4, 800.0], [98.5, 809.0], [98.6, 819.0], [98.7, 827.0], [98.8, 839.0], [98.9, 854.0], [99.0, 864.0], [99.1, 870.0], [99.2, 921.0], [99.3, 950.0], [99.4, 988.0], [99.5, 1052.0], [99.6, 1137.0], [99.7, 1188.0], [99.8, 1474.0], [99.9, 1727.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1760.0, "series": [{"data": [[0.0, 1760.0], [2100.0, 2.0], [600.0, 205.0], [700.0, 87.0], [200.0, 666.0], [800.0, 41.0], [900.0, 13.0], [1000.0, 7.0], [1100.0, 8.0], [300.0, 438.0], [1200.0, 3.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [100.0, 1310.0], [400.0, 332.0], [1600.0, 1.0], [1700.0, 3.0], [1900.0, 1.0], [500.0, 308.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4514.0, "series": [{"data": [[0.0, 4514.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 667.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.943890274314215, "minX": 1.60239348E12, "maxY": 10.0, "series": [{"data": [[1.60239348E12, 9.998323085522633], [1.6023936E12, 9.943890274314215], [1.60239354E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023936E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 109.0, "minX": 1.0, "maxY": 827.0, "series": [{"data": [[8.0, 375.0], [4.0, 391.0], [2.0, 692.0], [1.0, 827.0], [9.0, 478.5], [10.0, 232.47769839737416], [5.0, 109.0], [6.0, 223.0], [3.0, 350.0], [7.0, 137.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990751445086751, 232.83969171483633]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6279.166666666667, "minX": 1.60239348E12, "maxY": 8470637.616666667, "series": [{"data": [[1.60239348E12, 5892396.466666667], [1.6023936E12, 2562483.316666667], [1.60239354E12, 8470637.616666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60239348E12, 13580.833333333334], [1.6023936E12, 6279.166666666667], [1.60239354E12, 19908.633333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023936E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 223.57231920199524, "minX": 1.60239348E12, "maxY": 241.15595304639464, "series": [{"data": [[1.60239348E12, 241.15595304639464], [1.6023936E12, 223.57231920199524], [1.60239354E12, 229.97499038091578]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023936E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 222.26932668329195, "minX": 1.60239348E12, "maxY": 239.27613191727227, "series": [{"data": [[1.60239348E12, 239.27613191727227], [1.6023936E12, 222.26932668329195], [1.60239354E12, 227.94382454790315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023936E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0037406483790523707, "minX": 1.60239348E12, "maxY": 0.049748462828395845, "series": [{"data": [[1.60239348E12, 0.049748462828395845], [1.6023936E12, 0.0037406483790523707], [1.60239354E12, 0.00654097729896113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023936E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.60239348E12, "maxY": 2193.0, "series": [{"data": [[1.60239348E12, 2193.0], [1.6023936E12, 1174.0], [1.60239354E12, 1582.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60239348E12, 34.0], [1.6023936E12, 32.0], [1.60239354E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60239348E12, 34.0], [1.6023936E12, 32.0], [1.60239354E12, 33.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60239348E12, 34.0], [1.6023936E12, 32.0], [1.60239354E12, 33.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60239348E12, 28.0], [1.6023936E12, 29.0], [1.60239354E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60239348E12, 148.0], [1.6023936E12, 141.0], [1.60239354E12, 141.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023936E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 827.0, "series": [{"data": [[3.0, 617.0], [19.0, 192.0], [22.0, 496.0], [23.0, 353.0], [24.0, 399.0], [25.0, 365.0], [26.0, 384.5], [27.0, 359.0], [28.0, 324.0], [29.0, 322.5], [30.0, 241.0], [31.0, 232.0], [33.0, 215.0], [32.0, 183.0], [34.0, 189.5], [35.0, 203.0], [36.0, 237.5], [37.0, 174.0], [38.0, 240.5], [39.0, 208.0], [40.0, 216.5], [41.0, 165.0], [43.0, 128.0], [42.0, 257.5], [44.0, 216.5], [45.0, 234.0], [46.0, 218.5], [48.0, 144.5], [49.0, 124.0], [51.0, 116.0], [55.0, 128.5], [54.0, 180.0], [57.0, 118.0], [56.0, 82.0], [58.0, 129.5], [60.0, 95.5], [61.0, 110.0], [65.0, 62.0], [67.0, 55.0], [68.0, 97.0], [69.0, 50.0], [70.0, 62.5], [73.0, 56.0], [74.0, 66.0], [76.0, 89.0], [79.0, 81.0], [83.0, 89.0], [85.0, 72.0], [88.0, 58.0], [92.0, 85.5], [106.0, 50.0], [1.0, 827.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 106.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 50.0, "minX": 1.0, "maxY": 824.0, "series": [{"data": [[3.0, 613.0], [19.0, 192.0], [22.0, 486.0], [23.0, 349.0], [24.0, 397.5], [25.0, 364.0], [26.0, 383.0], [27.0, 358.0], [28.0, 321.0], [29.0, 318.0], [30.0, 240.0], [31.0, 232.0], [33.0, 215.0], [32.0, 183.0], [34.0, 189.5], [35.0, 203.0], [36.0, 237.0], [37.0, 173.0], [38.0, 239.5], [39.0, 208.0], [40.0, 216.5], [41.0, 165.0], [43.0, 128.0], [42.0, 256.5], [44.0, 216.0], [45.0, 234.0], [46.0, 218.5], [48.0, 142.0], [49.0, 123.0], [51.0, 116.0], [55.0, 128.5], [54.0, 180.0], [57.0, 118.0], [56.0, 82.0], [58.0, 129.0], [60.0, 95.0], [61.0, 109.5], [65.0, 62.0], [67.0, 55.0], [68.0, 97.0], [69.0, 50.0], [70.0, 62.5], [73.0, 56.0], [74.0, 66.0], [76.0, 89.0], [79.0, 81.0], [83.0, 89.0], [85.0, 71.5], [88.0, 58.0], [92.0, 85.0], [106.0, 50.0], [1.0, 824.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 106.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.2, "minX": 1.60239348E12, "maxY": 43.31666666666667, "series": [{"data": [[1.60239348E12, 29.983333333333334], [1.6023936E12, 13.2], [1.60239354E12, 43.31666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023936E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.366666666666667, "minX": 1.60239348E12, "maxY": 43.31666666666667, "series": [{"data": [[1.60239348E12, 29.816666666666666], [1.6023936E12, 13.366666666666667], [1.60239354E12, 43.31666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023936E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.366666666666667, "minX": 1.60239348E12, "maxY": 43.31666666666667, "series": [{"data": [[1.60239348E12, 29.816666666666666], [1.6023936E12, 13.366666666666667], [1.60239354E12, 43.31666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023936E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.366666666666667, "minX": 1.60239348E12, "maxY": 43.31666666666667, "series": [{"data": [[1.60239348E12, 29.816666666666666], [1.6023936E12, 13.366666666666667], [1.60239354E12, 43.31666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023936E12, "title": "Total Transactions Per Second"}},
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

