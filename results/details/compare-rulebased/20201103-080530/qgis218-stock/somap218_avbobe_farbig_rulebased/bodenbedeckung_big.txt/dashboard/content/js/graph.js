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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 2111.0, "series": [{"data": [[0.0, 28.0], [0.1, 30.0], [0.2, 31.0], [0.3, 33.0], [0.4, 33.0], [0.5, 33.0], [0.6, 33.0], [0.7, 34.0], [0.8, 34.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 35.0], [1.9, 35.0], [2.0, 35.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 37.0], [2.6, 37.0], [2.7, 37.0], [2.8, 37.0], [2.9, 37.0], [3.0, 37.0], [3.1, 37.0], [3.2, 38.0], [3.3, 38.0], [3.4, 38.0], [3.5, 38.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 39.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 41.0], [5.1, 41.0], [5.2, 41.0], [5.3, 41.0], [5.4, 41.0], [5.5, 41.0], [5.6, 42.0], [5.7, 42.0], [5.8, 42.0], [5.9, 42.0], [6.0, 42.0], [6.1, 43.0], [6.2, 43.0], [6.3, 43.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 44.0], [6.8, 44.0], [6.9, 44.0], [7.0, 44.0], [7.1, 45.0], [7.2, 45.0], [7.3, 45.0], [7.4, 45.0], [7.5, 46.0], [7.6, 46.0], [7.7, 46.0], [7.8, 46.0], [7.9, 46.0], [8.0, 46.0], [8.1, 46.0], [8.2, 47.0], [8.3, 47.0], [8.4, 48.0], [8.5, 48.0], [8.6, 48.0], [8.7, 48.0], [8.8, 48.0], [8.9, 49.0], [9.0, 49.0], [9.1, 49.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 49.0], [9.6, 49.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 52.0], [10.9, 52.0], [11.0, 52.0], [11.1, 52.0], [11.2, 52.0], [11.3, 52.0], [11.4, 52.0], [11.5, 53.0], [11.6, 53.0], [11.7, 53.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 54.0], [12.2, 54.0], [12.3, 54.0], [12.4, 54.0], [12.5, 54.0], [12.6, 55.0], [12.7, 55.0], [12.8, 55.0], [12.9, 55.0], [13.0, 56.0], [13.1, 56.0], [13.2, 56.0], [13.3, 56.0], [13.4, 57.0], [13.5, 57.0], [13.6, 57.0], [13.7, 57.0], [13.8, 58.0], [13.9, 58.0], [14.0, 58.0], [14.1, 58.0], [14.2, 58.0], [14.3, 59.0], [14.4, 59.0], [14.5, 59.0], [14.6, 59.0], [14.7, 59.0], [14.8, 59.0], [14.9, 59.0], [15.0, 60.0], [15.1, 60.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 61.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 61.0], [16.1, 62.0], [16.2, 62.0], [16.3, 62.0], [16.4, 62.0], [16.5, 63.0], [16.6, 63.0], [16.7, 63.0], [16.8, 63.0], [16.9, 63.0], [17.0, 64.0], [17.1, 64.0], [17.2, 64.0], [17.3, 64.0], [17.4, 65.0], [17.5, 65.0], [17.6, 65.0], [17.7, 65.0], [17.8, 66.0], [17.9, 66.0], [18.0, 66.0], [18.1, 66.0], [18.2, 67.0], [18.3, 67.0], [18.4, 67.0], [18.5, 67.0], [18.6, 67.0], [18.7, 68.0], [18.8, 68.0], [18.9, 68.0], [19.0, 68.0], [19.1, 68.0], [19.2, 69.0], [19.3, 69.0], [19.4, 69.0], [19.5, 69.0], [19.6, 69.0], [19.7, 70.0], [19.8, 70.0], [19.9, 70.0], [20.0, 70.0], [20.1, 70.0], [20.2, 71.0], [20.3, 71.0], [20.4, 71.0], [20.5, 71.0], [20.6, 71.0], [20.7, 71.0], [20.8, 71.0], [20.9, 72.0], [21.0, 72.0], [21.1, 72.0], [21.2, 72.0], [21.3, 73.0], [21.4, 73.0], [21.5, 73.0], [21.6, 73.0], [21.7, 73.0], [21.8, 74.0], [21.9, 74.0], [22.0, 74.0], [22.1, 74.0], [22.2, 75.0], [22.3, 75.0], [22.4, 75.0], [22.5, 75.0], [22.6, 75.0], [22.7, 76.0], [22.8, 76.0], [22.9, 76.0], [23.0, 77.0], [23.1, 77.0], [23.2, 77.0], [23.3, 77.0], [23.4, 78.0], [23.5, 78.0], [23.6, 78.0], [23.7, 78.0], [23.8, 79.0], [23.9, 79.0], [24.0, 79.0], [24.1, 79.0], [24.2, 80.0], [24.3, 80.0], [24.4, 80.0], [24.5, 80.0], [24.6, 80.0], [24.7, 80.0], [24.8, 81.0], [24.9, 81.0], [25.0, 82.0], [25.1, 82.0], [25.2, 82.0], [25.3, 83.0], [25.4, 83.0], [25.5, 83.0], [25.6, 84.0], [25.7, 84.0], [25.8, 84.0], [25.9, 84.0], [26.0, 85.0], [26.1, 85.0], [26.2, 85.0], [26.3, 85.0], [26.4, 85.0], [26.5, 86.0], [26.6, 86.0], [26.7, 86.0], [26.8, 86.0], [26.9, 86.0], [27.0, 87.0], [27.1, 87.0], [27.2, 87.0], [27.3, 87.0], [27.4, 88.0], [27.5, 88.0], [27.6, 88.0], [27.7, 88.0], [27.8, 89.0], [27.9, 89.0], [28.0, 89.0], [28.1, 90.0], [28.2, 90.0], [28.3, 90.0], [28.4, 90.0], [28.5, 91.0], [28.6, 91.0], [28.7, 91.0], [28.8, 91.0], [28.9, 92.0], [29.0, 92.0], [29.1, 92.0], [29.2, 92.0], [29.3, 93.0], [29.4, 93.0], [29.5, 93.0], [29.6, 93.0], [29.7, 93.0], [29.8, 94.0], [29.9, 94.0], [30.0, 94.0], [30.1, 94.0], [30.2, 94.0], [30.3, 95.0], [30.4, 95.0], [30.5, 95.0], [30.6, 96.0], [30.7, 96.0], [30.8, 96.0], [30.9, 96.0], [31.0, 97.0], [31.1, 97.0], [31.2, 98.0], [31.3, 98.0], [31.4, 98.0], [31.5, 99.0], [31.6, 99.0], [31.7, 99.0], [31.8, 100.0], [31.9, 100.0], [32.0, 100.0], [32.1, 100.0], [32.2, 101.0], [32.3, 101.0], [32.4, 101.0], [32.5, 102.0], [32.6, 103.0], [32.7, 103.0], [32.8, 103.0], [32.9, 103.0], [33.0, 104.0], [33.1, 104.0], [33.2, 105.0], [33.3, 105.0], [33.4, 105.0], [33.5, 105.0], [33.6, 106.0], [33.7, 106.0], [33.8, 106.0], [33.9, 106.0], [34.0, 106.0], [34.1, 107.0], [34.2, 107.0], [34.3, 107.0], [34.4, 107.0], [34.5, 107.0], [34.6, 107.0], [34.7, 107.0], [34.8, 107.0], [34.9, 108.0], [35.0, 108.0], [35.1, 108.0], [35.2, 108.0], [35.3, 108.0], [35.4, 108.0], [35.5, 109.0], [35.6, 109.0], [35.7, 109.0], [35.8, 109.0], [35.9, 109.0], [36.0, 110.0], [36.1, 110.0], [36.2, 110.0], [36.3, 111.0], [36.4, 111.0], [36.5, 111.0], [36.6, 111.0], [36.7, 111.0], [36.8, 112.0], [36.9, 112.0], [37.0, 112.0], [37.1, 112.0], [37.2, 112.0], [37.3, 113.0], [37.4, 113.0], [37.5, 113.0], [37.6, 113.0], [37.7, 114.0], [37.8, 114.0], [37.9, 114.0], [38.0, 114.0], [38.1, 115.0], [38.2, 115.0], [38.3, 115.0], [38.4, 115.0], [38.5, 116.0], [38.6, 116.0], [38.7, 116.0], [38.8, 116.0], [38.9, 116.0], [39.0, 117.0], [39.1, 117.0], [39.2, 117.0], [39.3, 117.0], [39.4, 118.0], [39.5, 118.0], [39.6, 118.0], [39.7, 118.0], [39.8, 119.0], [39.9, 119.0], [40.0, 120.0], [40.1, 120.0], [40.2, 120.0], [40.3, 120.0], [40.4, 121.0], [40.5, 121.0], [40.6, 121.0], [40.7, 122.0], [40.8, 122.0], [40.9, 122.0], [41.0, 123.0], [41.1, 123.0], [41.2, 123.0], [41.3, 123.0], [41.4, 123.0], [41.5, 124.0], [41.6, 124.0], [41.7, 124.0], [41.8, 125.0], [41.9, 125.0], [42.0, 125.0], [42.1, 126.0], [42.2, 126.0], [42.3, 126.0], [42.4, 127.0], [42.5, 127.0], [42.6, 127.0], [42.7, 128.0], [42.8, 128.0], [42.9, 128.0], [43.0, 128.0], [43.1, 129.0], [43.2, 129.0], [43.3, 129.0], [43.4, 129.0], [43.5, 130.0], [43.6, 130.0], [43.7, 130.0], [43.8, 130.0], [43.9, 131.0], [44.0, 131.0], [44.1, 131.0], [44.2, 132.0], [44.3, 132.0], [44.4, 133.0], [44.5, 133.0], [44.6, 133.0], [44.7, 133.0], [44.8, 133.0], [44.9, 134.0], [45.0, 134.0], [45.1, 134.0], [45.2, 134.0], [45.3, 135.0], [45.4, 135.0], [45.5, 136.0], [45.6, 136.0], [45.7, 136.0], [45.8, 137.0], [45.9, 137.0], [46.0, 137.0], [46.1, 137.0], [46.2, 137.0], [46.3, 138.0], [46.4, 138.0], [46.5, 138.0], [46.6, 139.0], [46.7, 139.0], [46.8, 139.0], [46.9, 140.0], [47.0, 140.0], [47.1, 140.0], [47.2, 141.0], [47.3, 141.0], [47.4, 142.0], [47.5, 142.0], [47.6, 142.0], [47.7, 143.0], [47.8, 143.0], [47.9, 144.0], [48.0, 144.0], [48.1, 144.0], [48.2, 145.0], [48.3, 146.0], [48.4, 146.0], [48.5, 146.0], [48.6, 147.0], [48.7, 147.0], [48.8, 147.0], [48.9, 148.0], [49.0, 148.0], [49.1, 148.0], [49.2, 149.0], [49.3, 149.0], [49.4, 149.0], [49.5, 149.0], [49.6, 150.0], [49.7, 150.0], [49.8, 151.0], [49.9, 151.0], [50.0, 152.0], [50.1, 153.0], [50.2, 153.0], [50.3, 154.0], [50.4, 155.0], [50.5, 156.0], [50.6, 156.0], [50.7, 157.0], [50.8, 157.0], [50.9, 158.0], [51.0, 159.0], [51.1, 159.0], [51.2, 159.0], [51.3, 160.0], [51.4, 160.0], [51.5, 161.0], [51.6, 161.0], [51.7, 162.0], [51.8, 162.0], [51.9, 162.0], [52.0, 163.0], [52.1, 164.0], [52.2, 165.0], [52.3, 166.0], [52.4, 166.0], [52.5, 167.0], [52.6, 167.0], [52.7, 169.0], [52.8, 170.0], [52.9, 170.0], [53.0, 171.0], [53.1, 172.0], [53.2, 172.0], [53.3, 173.0], [53.4, 173.0], [53.5, 174.0], [53.6, 174.0], [53.7, 175.0], [53.8, 176.0], [53.9, 177.0], [54.0, 178.0], [54.1, 178.0], [54.2, 179.0], [54.3, 179.0], [54.4, 180.0], [54.5, 180.0], [54.6, 181.0], [54.7, 182.0], [54.8, 182.0], [54.9, 183.0], [55.0, 183.0], [55.1, 184.0], [55.2, 184.0], [55.3, 185.0], [55.4, 185.0], [55.5, 186.0], [55.6, 187.0], [55.7, 188.0], [55.8, 189.0], [55.9, 189.0], [56.0, 190.0], [56.1, 191.0], [56.2, 191.0], [56.3, 192.0], [56.4, 194.0], [56.5, 194.0], [56.6, 195.0], [56.7, 195.0], [56.8, 196.0], [56.9, 197.0], [57.0, 197.0], [57.1, 199.0], [57.2, 200.0], [57.3, 200.0], [57.4, 200.0], [57.5, 201.0], [57.6, 202.0], [57.7, 202.0], [57.8, 202.0], [57.9, 203.0], [58.0, 203.0], [58.1, 205.0], [58.2, 205.0], [58.3, 205.0], [58.4, 206.0], [58.5, 207.0], [58.6, 208.0], [58.7, 208.0], [58.8, 209.0], [58.9, 210.0], [59.0, 211.0], [59.1, 211.0], [59.2, 212.0], [59.3, 213.0], [59.4, 213.0], [59.5, 214.0], [59.6, 215.0], [59.7, 215.0], [59.8, 216.0], [59.9, 217.0], [60.0, 217.0], [60.1, 218.0], [60.2, 218.0], [60.3, 219.0], [60.4, 220.0], [60.5, 221.0], [60.6, 222.0], [60.7, 222.0], [60.8, 223.0], [60.9, 224.0], [61.0, 224.0], [61.1, 225.0], [61.2, 225.0], [61.3, 226.0], [61.4, 226.0], [61.5, 227.0], [61.6, 229.0], [61.7, 230.0], [61.8, 230.0], [61.9, 231.0], [62.0, 232.0], [62.1, 232.0], [62.2, 233.0], [62.3, 233.0], [62.4, 234.0], [62.5, 235.0], [62.6, 235.0], [62.7, 236.0], [62.8, 237.0], [62.9, 238.0], [63.0, 239.0], [63.1, 239.0], [63.2, 240.0], [63.3, 241.0], [63.4, 243.0], [63.5, 243.0], [63.6, 244.0], [63.7, 245.0], [63.8, 245.0], [63.9, 246.0], [64.0, 247.0], [64.1, 247.0], [64.2, 248.0], [64.3, 249.0], [64.4, 250.0], [64.5, 251.0], [64.6, 252.0], [64.7, 253.0], [64.8, 254.0], [64.9, 255.0], [65.0, 256.0], [65.1, 256.0], [65.2, 257.0], [65.3, 258.0], [65.4, 259.0], [65.5, 260.0], [65.6, 261.0], [65.7, 262.0], [65.8, 263.0], [65.9, 264.0], [66.0, 265.0], [66.1, 267.0], [66.2, 268.0], [66.3, 268.0], [66.4, 270.0], [66.5, 270.0], [66.6, 271.0], [66.7, 272.0], [66.8, 273.0], [66.9, 274.0], [67.0, 275.0], [67.1, 275.0], [67.2, 276.0], [67.3, 277.0], [67.4, 279.0], [67.5, 280.0], [67.6, 280.0], [67.7, 281.0], [67.8, 282.0], [67.9, 283.0], [68.0, 283.0], [68.1, 284.0], [68.2, 284.0], [68.3, 285.0], [68.4, 285.0], [68.5, 287.0], [68.6, 287.0], [68.7, 288.0], [68.8, 289.0], [68.9, 289.0], [69.0, 290.0], [69.1, 291.0], [69.2, 292.0], [69.3, 293.0], [69.4, 294.0], [69.5, 294.0], [69.6, 295.0], [69.7, 296.0], [69.8, 297.0], [69.9, 297.0], [70.0, 298.0], [70.1, 299.0], [70.2, 301.0], [70.3, 302.0], [70.4, 304.0], [70.5, 305.0], [70.6, 307.0], [70.7, 307.0], [70.8, 309.0], [70.9, 309.0], [71.0, 310.0], [71.1, 312.0], [71.2, 313.0], [71.3, 314.0], [71.4, 316.0], [71.5, 317.0], [71.6, 317.0], [71.7, 319.0], [71.8, 320.0], [71.9, 320.0], [72.0, 321.0], [72.1, 322.0], [72.2, 323.0], [72.3, 324.0], [72.4, 324.0], [72.5, 325.0], [72.6, 327.0], [72.7, 329.0], [72.8, 329.0], [72.9, 331.0], [73.0, 332.0], [73.1, 332.0], [73.2, 333.0], [73.3, 334.0], [73.4, 335.0], [73.5, 337.0], [73.6, 339.0], [73.7, 341.0], [73.8, 342.0], [73.9, 343.0], [74.0, 344.0], [74.1, 345.0], [74.2, 347.0], [74.3, 348.0], [74.4, 348.0], [74.5, 349.0], [74.6, 350.0], [74.7, 352.0], [74.8, 353.0], [74.9, 353.0], [75.0, 354.0], [75.1, 356.0], [75.2, 357.0], [75.3, 360.0], [75.4, 361.0], [75.5, 362.0], [75.6, 364.0], [75.7, 365.0], [75.8, 367.0], [75.9, 367.0], [76.0, 368.0], [76.1, 370.0], [76.2, 371.0], [76.3, 372.0], [76.4, 375.0], [76.5, 375.0], [76.6, 376.0], [76.7, 378.0], [76.8, 378.0], [76.9, 381.0], [77.0, 382.0], [77.1, 383.0], [77.2, 383.0], [77.3, 385.0], [77.4, 386.0], [77.5, 387.0], [77.6, 388.0], [77.7, 389.0], [77.8, 390.0], [77.9, 391.0], [78.0, 392.0], [78.1, 393.0], [78.2, 395.0], [78.3, 397.0], [78.4, 399.0], [78.5, 402.0], [78.6, 403.0], [78.7, 405.0], [78.8, 406.0], [78.9, 406.0], [79.0, 408.0], [79.1, 410.0], [79.2, 411.0], [79.3, 412.0], [79.4, 413.0], [79.5, 415.0], [79.6, 416.0], [79.7, 417.0], [79.8, 418.0], [79.9, 420.0], [80.0, 422.0], [80.1, 423.0], [80.2, 425.0], [80.3, 427.0], [80.4, 428.0], [80.5, 429.0], [80.6, 431.0], [80.7, 432.0], [80.8, 433.0], [80.9, 434.0], [81.0, 436.0], [81.1, 437.0], [81.2, 439.0], [81.3, 441.0], [81.4, 444.0], [81.5, 445.0], [81.6, 447.0], [81.7, 449.0], [81.8, 450.0], [81.9, 451.0], [82.0, 453.0], [82.1, 456.0], [82.2, 459.0], [82.3, 460.0], [82.4, 462.0], [82.5, 464.0], [82.6, 466.0], [82.7, 469.0], [82.8, 472.0], [82.9, 474.0], [83.0, 476.0], [83.1, 478.0], [83.2, 480.0], [83.3, 481.0], [83.4, 483.0], [83.5, 485.0], [83.6, 485.0], [83.7, 486.0], [83.8, 489.0], [83.9, 490.0], [84.0, 491.0], [84.1, 493.0], [84.2, 494.0], [84.3, 496.0], [84.4, 498.0], [84.5, 500.0], [84.6, 501.0], [84.7, 503.0], [84.8, 505.0], [84.9, 506.0], [85.0, 507.0], [85.1, 509.0], [85.2, 511.0], [85.3, 513.0], [85.4, 514.0], [85.5, 516.0], [85.6, 518.0], [85.7, 519.0], [85.8, 520.0], [85.9, 522.0], [86.0, 524.0], [86.1, 525.0], [86.2, 527.0], [86.3, 529.0], [86.4, 531.0], [86.5, 533.0], [86.6, 533.0], [86.7, 535.0], [86.8, 537.0], [86.9, 539.0], [87.0, 543.0], [87.1, 544.0], [87.2, 546.0], [87.3, 547.0], [87.4, 548.0], [87.5, 549.0], [87.6, 551.0], [87.7, 552.0], [87.8, 556.0], [87.9, 558.0], [88.0, 561.0], [88.1, 563.0], [88.2, 564.0], [88.3, 565.0], [88.4, 567.0], [88.5, 569.0], [88.6, 569.0], [88.7, 572.0], [88.8, 573.0], [88.9, 575.0], [89.0, 576.0], [89.1, 578.0], [89.2, 580.0], [89.3, 582.0], [89.4, 584.0], [89.5, 586.0], [89.6, 588.0], [89.7, 589.0], [89.8, 590.0], [89.9, 591.0], [90.0, 592.0], [90.1, 594.0], [90.2, 596.0], [90.3, 598.0], [90.4, 601.0], [90.5, 602.0], [90.6, 603.0], [90.7, 604.0], [90.8, 606.0], [90.9, 607.0], [91.0, 609.0], [91.1, 612.0], [91.2, 614.0], [91.3, 616.0], [91.4, 618.0], [91.5, 619.0], [91.6, 621.0], [91.7, 624.0], [91.8, 628.0], [91.9, 631.0], [92.0, 632.0], [92.1, 634.0], [92.2, 635.0], [92.3, 637.0], [92.4, 640.0], [92.5, 642.0], [92.6, 643.0], [92.7, 646.0], [92.8, 648.0], [92.9, 649.0], [93.0, 650.0], [93.1, 652.0], [93.2, 658.0], [93.3, 660.0], [93.4, 661.0], [93.5, 664.0], [93.6, 667.0], [93.7, 668.0], [93.8, 669.0], [93.9, 671.0], [94.0, 675.0], [94.1, 676.0], [94.2, 678.0], [94.3, 682.0], [94.4, 684.0], [94.5, 688.0], [94.6, 689.0], [94.7, 692.0], [94.8, 695.0], [94.9, 697.0], [95.0, 699.0], [95.1, 704.0], [95.2, 705.0], [95.3, 711.0], [95.4, 714.0], [95.5, 715.0], [95.6, 717.0], [95.7, 721.0], [95.8, 725.0], [95.9, 728.0], [96.0, 732.0], [96.1, 734.0], [96.2, 738.0], [96.3, 739.0], [96.4, 742.0], [96.5, 746.0], [96.6, 750.0], [96.7, 755.0], [96.8, 757.0], [96.9, 760.0], [97.0, 765.0], [97.1, 771.0], [97.2, 774.0], [97.3, 778.0], [97.4, 783.0], [97.5, 787.0], [97.6, 793.0], [97.7, 799.0], [97.8, 804.0], [97.9, 815.0], [98.0, 822.0], [98.1, 829.0], [98.2, 839.0], [98.3, 844.0], [98.4, 854.0], [98.5, 875.0], [98.6, 881.0], [98.7, 893.0], [98.8, 916.0], [98.9, 939.0], [99.0, 966.0], [99.1, 991.0], [99.2, 1009.0], [99.3, 1081.0], [99.4, 1128.0], [99.5, 1240.0], [99.6, 1342.0], [99.7, 1502.0], [99.8, 1623.0], [99.9, 1814.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1650.0, "series": [{"data": [[0.0, 1650.0], [2100.0, 1.0], [600.0, 241.0], [700.0, 140.0], [200.0, 672.0], [800.0, 53.0], [900.0, 22.0], [1000.0, 10.0], [1100.0, 6.0], [300.0, 430.0], [1200.0, 5.0], [1300.0, 5.0], [1400.0, 2.0], [1500.0, 5.0], [100.0, 1318.0], [400.0, 314.0], [1600.0, 2.0], [1700.0, 3.0], [1800.0, 2.0], [1900.0, 2.0], [500.0, 306.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4387.0, "series": [{"data": [[0.0, 4387.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 787.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 16.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.839285714285714, "minX": 1.6043907E12, "maxY": 10.0, "series": [{"data": [[1.60439076E12, 10.0], [1.60439088E12, 9.861963190184051], [1.6043907E12, 9.839285714285714], [1.60439082E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439088E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 118.0, "minX": 1.0, "maxY": 878.0, "series": [{"data": [[8.0, 137.0], [4.0, 361.0], [2.0, 837.0], [1.0, 878.0], [9.0, 162.0], [5.0, 203.0], [10.0, 249.48387719637057], [6.0, 184.0], [3.0, 410.0], [7.0, 118.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98959537572256, 249.66358381502835]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 434.71666666666664, "minX": 1.6043907E12, "maxY": 7872811.483333333, "series": [{"data": [[1.60439076E12, 7872811.483333333], [1.60439088E12, 1107385.0833333333], [1.6043907E12, 241441.91666666666], [1.60439082E12, 7703878.916666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439076E12, 18316.683333333334], [1.60439088E12, 2543.15], [1.6043907E12, 434.71666666666664], [1.60439082E12, 18474.083333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439088E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 230.60122699386508, "minX": 1.6043907E12, "maxY": 420.80357142857133, "series": [{"data": [[1.60439076E12, 250.83869619724194], [1.60439088E12, 230.60122699386508], [1.6043907E12, 420.80357142857133], [1.60439082E12, 247.10393374741201]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439088E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 229.0613496932515, "minX": 1.6043907E12, "maxY": 419.5892857142856, "series": [{"data": [[1.60439076E12, 248.7225240284162], [1.60439088E12, 229.0613496932515], [1.6043907E12, 419.5892857142856], [1.60439082E12, 245.36728778467923]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439088E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005797101449275365, "minX": 1.6043907E12, "maxY": 2.2499999999999996, "series": [{"data": [[1.60439076E12, 0.006268282490597581], [1.60439088E12, 0.012269938650306742], [1.6043907E12, 2.2499999999999996], [1.60439082E12, 0.005797101449275365]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439088E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.6043907E12, "maxY": 2111.0, "series": [{"data": [[1.60439076E12, 2111.0], [1.60439088E12, 1369.0], [1.6043907E12, 2017.0], [1.60439082E12, 1975.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439076E12, 33.0], [1.60439088E12, 34.0], [1.6043907E12, 44.0], [1.60439082E12, 34.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439076E12, 33.0], [1.60439088E12, 34.0], [1.6043907E12, 44.0], [1.60439082E12, 34.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439076E12, 33.0], [1.60439088E12, 34.0], [1.6043907E12, 44.0], [1.60439082E12, 34.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439076E12, 28.0], [1.60439088E12, 34.0], [1.6043907E12, 44.0], [1.60439082E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439076E12, 146.0], [1.60439088E12, 148.5], [1.6043907E12, 237.0], [1.60439082E12, 160.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439088E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 15.0, "maxY": 597.0, "series": [{"data": [[15.0, 173.0], [16.0, 240.0], [19.0, 597.0], [20.0, 501.0], [21.0, 492.0], [22.0, 342.0], [23.0, 473.5], [24.0, 300.5], [25.0, 300.5], [26.0, 250.0], [27.0, 362.0], [28.0, 290.0], [29.0, 259.0], [30.0, 218.5], [31.0, 256.0], [33.0, 246.0], [32.0, 234.0], [35.0, 221.0], [34.0, 215.0], [37.0, 176.0], [36.0, 220.0], [38.0, 162.0], [39.0, 160.0], [40.0, 243.0], [41.0, 284.0], [42.0, 148.0], [43.0, 132.0], [44.0, 146.0], [45.0, 129.0], [47.0, 114.0], [46.0, 137.5], [48.0, 170.0], [49.0, 168.0], [51.0, 79.0], [53.0, 160.0], [54.0, 146.5], [55.0, 117.0], [57.0, 64.0], [59.0, 131.5], [61.0, 64.5], [62.0, 86.5], [67.0, 59.5], [71.0, 70.0], [74.0, 103.0], [78.0, 93.0], [76.0, 96.0], [84.0, 66.5], [85.0, 75.0], [92.0, 55.0], [100.0, 59.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 15.0, "maxY": 585.0, "series": [{"data": [[15.0, 173.0], [16.0, 239.5], [19.0, 585.0], [20.0, 496.0], [21.0, 485.0], [22.0, 340.5], [23.0, 466.5], [24.0, 299.5], [25.0, 300.0], [26.0, 249.0], [27.0, 352.0], [28.0, 288.5], [29.0, 259.0], [30.0, 217.0], [31.0, 255.0], [33.0, 244.5], [32.0, 233.5], [35.0, 221.0], [34.0, 214.0], [37.0, 176.0], [36.0, 219.5], [38.0, 161.5], [39.0, 160.0], [40.0, 242.5], [41.0, 283.0], [42.0, 145.5], [43.0, 131.5], [44.0, 145.5], [45.0, 129.0], [47.0, 114.0], [46.0, 137.5], [48.0, 170.0], [49.0, 166.0], [51.0, 79.0], [53.0, 159.0], [54.0, 146.0], [55.0, 117.0], [57.0, 64.0], [59.0, 131.0], [61.0, 64.5], [62.0, 86.5], [67.0, 59.5], [71.0, 70.0], [74.0, 102.5], [78.0, 92.5], [76.0, 96.0], [84.0, 66.5], [85.0, 75.0], [92.0, 55.0], [100.0, 59.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.6043907E12, "maxY": 40.25, "series": [{"data": [[1.60439076E12, 39.88333333333333], [1.60439088E12, 5.266666666666667], [1.6043907E12, 1.1], [1.60439082E12, 40.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439088E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.6043907E12, "maxY": 40.25, "series": [{"data": [[1.60439076E12, 39.88333333333333], [1.60439088E12, 5.433333333333334], [1.6043907E12, 0.9333333333333333], [1.60439082E12, 40.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439088E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.6043907E12, "maxY": 40.25, "series": [{"data": [[1.60439076E12, 39.88333333333333], [1.60439088E12, 5.433333333333334], [1.6043907E12, 0.9333333333333333], [1.60439082E12, 40.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439088E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.6043907E12, "maxY": 40.25, "series": [{"data": [[1.60439076E12, 39.88333333333333], [1.60439088E12, 5.433333333333334], [1.6043907E12, 0.9333333333333333], [1.60439082E12, 40.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439088E12, "title": "Total Transactions Per Second"}},
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

