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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 3488.0, "series": [{"data": [[0.0, 30.0], [0.1, 32.0], [0.2, 32.0], [0.3, 33.0], [0.4, 34.0], [0.5, 34.0], [0.6, 35.0], [0.7, 35.0], [0.8, 36.0], [0.9, 36.0], [1.0, 36.0], [1.1, 36.0], [1.2, 37.0], [1.3, 37.0], [1.4, 37.0], [1.5, 37.0], [1.6, 37.0], [1.7, 37.0], [1.8, 37.0], [1.9, 37.0], [2.0, 38.0], [2.1, 38.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 38.0], [2.7, 38.0], [2.8, 38.0], [2.9, 39.0], [3.0, 39.0], [3.1, 39.0], [3.2, 39.0], [3.3, 39.0], [3.4, 39.0], [3.5, 39.0], [3.6, 39.0], [3.7, 39.0], [3.8, 39.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 40.0], [4.6, 40.0], [4.7, 40.0], [4.8, 40.0], [4.9, 40.0], [5.0, 40.0], [5.1, 40.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 41.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 41.0], [6.5, 41.0], [6.6, 41.0], [6.7, 41.0], [6.8, 41.0], [6.9, 42.0], [7.0, 42.0], [7.1, 42.0], [7.2, 42.0], [7.3, 42.0], [7.4, 42.0], [7.5, 42.0], [7.6, 42.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 43.0], [9.2, 43.0], [9.3, 43.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 45.0], [11.3, 45.0], [11.4, 45.0], [11.5, 45.0], [11.6, 45.0], [11.7, 45.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 47.0], [12.8, 47.0], [12.9, 47.0], [13.0, 47.0], [13.1, 47.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 48.0], [13.9, 48.0], [14.0, 48.0], [14.1, 48.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 49.0], [14.8, 49.0], [14.9, 49.0], [15.0, 49.0], [15.1, 49.0], [15.2, 49.0], [15.3, 50.0], [15.4, 50.0], [15.5, 50.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 53.0], [17.1, 53.0], [17.2, 53.0], [17.3, 53.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 55.0], [18.1, 55.0], [18.2, 55.0], [18.3, 55.0], [18.4, 55.0], [18.5, 56.0], [18.6, 56.0], [18.7, 56.0], [18.8, 56.0], [18.9, 57.0], [19.0, 57.0], [19.1, 57.0], [19.2, 57.0], [19.3, 58.0], [19.4, 58.0], [19.5, 58.0], [19.6, 59.0], [19.7, 59.0], [19.8, 59.0], [19.9, 59.0], [20.0, 60.0], [20.1, 60.0], [20.2, 61.0], [20.3, 61.0], [20.4, 61.0], [20.5, 61.0], [20.6, 61.0], [20.7, 62.0], [20.8, 62.0], [20.9, 63.0], [21.0, 63.0], [21.1, 63.0], [21.2, 64.0], [21.3, 64.0], [21.4, 64.0], [21.5, 64.0], [21.6, 65.0], [21.7, 65.0], [21.8, 65.0], [21.9, 65.0], [22.0, 66.0], [22.1, 66.0], [22.2, 66.0], [22.3, 66.0], [22.4, 66.0], [22.5, 67.0], [22.6, 67.0], [22.7, 67.0], [22.8, 67.0], [22.9, 68.0], [23.0, 68.0], [23.1, 68.0], [23.2, 68.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 70.0], [23.8, 70.0], [23.9, 70.0], [24.0, 71.0], [24.1, 71.0], [24.2, 71.0], [24.3, 71.0], [24.4, 71.0], [24.5, 72.0], [24.6, 72.0], [24.7, 72.0], [24.8, 72.0], [24.9, 72.0], [25.0, 72.0], [25.1, 72.0], [25.2, 73.0], [25.3, 73.0], [25.4, 73.0], [25.5, 73.0], [25.6, 73.0], [25.7, 74.0], [25.8, 74.0], [25.9, 74.0], [26.0, 74.0], [26.1, 74.0], [26.2, 74.0], [26.3, 75.0], [26.4, 75.0], [26.5, 75.0], [26.6, 75.0], [26.7, 75.0], [26.8, 75.0], [26.9, 76.0], [27.0, 76.0], [27.1, 76.0], [27.2, 76.0], [27.3, 76.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 78.0], [28.3, 78.0], [28.4, 78.0], [28.5, 78.0], [28.6, 78.0], [28.7, 78.0], [28.8, 78.0], [28.9, 78.0], [29.0, 79.0], [29.1, 79.0], [29.2, 79.0], [29.3, 79.0], [29.4, 79.0], [29.5, 79.0], [29.6, 79.0], [29.7, 80.0], [29.8, 80.0], [29.9, 80.0], [30.0, 80.0], [30.1, 80.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 81.0], [30.8, 81.0], [30.9, 82.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 82.0], [31.4, 82.0], [31.5, 83.0], [31.6, 83.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 83.0], [32.1, 83.0], [32.2, 84.0], [32.3, 84.0], [32.4, 84.0], [32.5, 84.0], [32.6, 84.0], [32.7, 84.0], [32.8, 85.0], [32.9, 85.0], [33.0, 85.0], [33.1, 85.0], [33.2, 85.0], [33.3, 86.0], [33.4, 86.0], [33.5, 86.0], [33.6, 86.0], [33.7, 86.0], [33.8, 86.0], [33.9, 86.0], [34.0, 86.0], [34.1, 87.0], [34.2, 87.0], [34.3, 87.0], [34.4, 87.0], [34.5, 87.0], [34.6, 87.0], [34.7, 87.0], [34.8, 88.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 89.0], [35.4, 89.0], [35.5, 89.0], [35.6, 89.0], [35.7, 89.0], [35.8, 89.0], [35.9, 89.0], [36.0, 90.0], [36.1, 90.0], [36.2, 90.0], [36.3, 90.0], [36.4, 91.0], [36.5, 91.0], [36.6, 91.0], [36.7, 92.0], [36.8, 92.0], [36.9, 92.0], [37.0, 92.0], [37.1, 93.0], [37.2, 93.0], [37.3, 93.0], [37.4, 93.0], [37.5, 94.0], [37.6, 94.0], [37.7, 95.0], [37.8, 95.0], [37.9, 95.0], [38.0, 96.0], [38.1, 96.0], [38.2, 96.0], [38.3, 97.0], [38.4, 98.0], [38.5, 98.0], [38.6, 98.0], [38.7, 99.0], [38.8, 99.0], [38.9, 100.0], [39.0, 100.0], [39.1, 101.0], [39.2, 102.0], [39.3, 103.0], [39.4, 103.0], [39.5, 104.0], [39.6, 105.0], [39.7, 105.0], [39.8, 105.0], [39.9, 106.0], [40.0, 106.0], [40.1, 108.0], [40.2, 108.0], [40.3, 109.0], [40.4, 110.0], [40.5, 111.0], [40.6, 112.0], [40.7, 113.0], [40.8, 113.0], [40.9, 114.0], [41.0, 114.0], [41.1, 114.0], [41.2, 115.0], [41.3, 116.0], [41.4, 117.0], [41.5, 117.0], [41.6, 118.0], [41.7, 119.0], [41.8, 120.0], [41.9, 121.0], [42.0, 121.0], [42.1, 122.0], [42.2, 122.0], [42.3, 123.0], [42.4, 123.0], [42.5, 124.0], [42.6, 124.0], [42.7, 125.0], [42.8, 126.0], [42.9, 126.0], [43.0, 127.0], [43.1, 128.0], [43.2, 128.0], [43.3, 129.0], [43.4, 130.0], [43.5, 131.0], [43.6, 131.0], [43.7, 133.0], [43.8, 133.0], [43.9, 134.0], [44.0, 135.0], [44.1, 135.0], [44.2, 136.0], [44.3, 137.0], [44.4, 138.0], [44.5, 139.0], [44.6, 139.0], [44.7, 140.0], [44.8, 141.0], [44.9, 142.0], [45.0, 144.0], [45.1, 145.0], [45.2, 146.0], [45.3, 146.0], [45.4, 148.0], [45.5, 149.0], [45.6, 150.0], [45.7, 151.0], [45.8, 153.0], [45.9, 154.0], [46.0, 154.0], [46.1, 155.0], [46.2, 157.0], [46.3, 158.0], [46.4, 159.0], [46.5, 160.0], [46.6, 162.0], [46.7, 163.0], [46.8, 163.0], [46.9, 164.0], [47.0, 164.0], [47.1, 165.0], [47.2, 166.0], [47.3, 167.0], [47.4, 169.0], [47.5, 169.0], [47.6, 170.0], [47.7, 171.0], [47.8, 171.0], [47.9, 173.0], [48.0, 173.0], [48.1, 174.0], [48.2, 175.0], [48.3, 176.0], [48.4, 176.0], [48.5, 177.0], [48.6, 178.0], [48.7, 178.0], [48.8, 179.0], [48.9, 180.0], [49.0, 181.0], [49.1, 182.0], [49.2, 182.0], [49.3, 184.0], [49.4, 184.0], [49.5, 185.0], [49.6, 186.0], [49.7, 187.0], [49.8, 187.0], [49.9, 188.0], [50.0, 190.0], [50.1, 190.0], [50.2, 191.0], [50.3, 192.0], [50.4, 192.0], [50.5, 193.0], [50.6, 193.0], [50.7, 194.0], [50.8, 194.0], [50.9, 195.0], [51.0, 195.0], [51.1, 196.0], [51.2, 196.0], [51.3, 196.0], [51.4, 197.0], [51.5, 197.0], [51.6, 198.0], [51.7, 199.0], [51.8, 200.0], [51.9, 200.0], [52.0, 201.0], [52.1, 202.0], [52.2, 203.0], [52.3, 203.0], [52.4, 204.0], [52.5, 204.0], [52.6, 205.0], [52.7, 206.0], [52.8, 206.0], [52.9, 208.0], [53.0, 208.0], [53.1, 209.0], [53.2, 210.0], [53.3, 210.0], [53.4, 211.0], [53.5, 211.0], [53.6, 212.0], [53.7, 212.0], [53.8, 213.0], [53.9, 214.0], [54.0, 215.0], [54.1, 216.0], [54.2, 217.0], [54.3, 217.0], [54.4, 218.0], [54.5, 218.0], [54.6, 220.0], [54.7, 220.0], [54.8, 221.0], [54.9, 222.0], [55.0, 223.0], [55.1, 224.0], [55.2, 224.0], [55.3, 225.0], [55.4, 226.0], [55.5, 227.0], [55.6, 227.0], [55.7, 229.0], [55.8, 230.0], [55.9, 231.0], [56.0, 232.0], [56.1, 232.0], [56.2, 233.0], [56.3, 234.0], [56.4, 234.0], [56.5, 235.0], [56.6, 236.0], [56.7, 236.0], [56.8, 238.0], [56.9, 239.0], [57.0, 240.0], [57.1, 241.0], [57.2, 241.0], [57.3, 242.0], [57.4, 243.0], [57.5, 243.0], [57.6, 245.0], [57.7, 246.0], [57.8, 246.0], [57.9, 247.0], [58.0, 248.0], [58.1, 249.0], [58.2, 250.0], [58.3, 251.0], [58.4, 252.0], [58.5, 253.0], [58.6, 253.0], [58.7, 254.0], [58.8, 255.0], [58.9, 256.0], [59.0, 257.0], [59.1, 258.0], [59.2, 259.0], [59.3, 260.0], [59.4, 261.0], [59.5, 261.0], [59.6, 262.0], [59.7, 264.0], [59.8, 265.0], [59.9, 266.0], [60.0, 267.0], [60.1, 267.0], [60.2, 268.0], [60.3, 270.0], [60.4, 271.0], [60.5, 271.0], [60.6, 272.0], [60.7, 273.0], [60.8, 274.0], [60.9, 275.0], [61.0, 276.0], [61.1, 276.0], [61.2, 277.0], [61.3, 278.0], [61.4, 278.0], [61.5, 280.0], [61.6, 281.0], [61.7, 282.0], [61.8, 284.0], [61.9, 285.0], [62.0, 286.0], [62.1, 287.0], [62.2, 288.0], [62.3, 290.0], [62.4, 291.0], [62.5, 293.0], [62.6, 295.0], [62.7, 297.0], [62.8, 298.0], [62.9, 299.0], [63.0, 300.0], [63.1, 302.0], [63.2, 304.0], [63.3, 305.0], [63.4, 306.0], [63.5, 307.0], [63.6, 308.0], [63.7, 310.0], [63.8, 312.0], [63.9, 314.0], [64.0, 316.0], [64.1, 317.0], [64.2, 318.0], [64.3, 319.0], [64.4, 321.0], [64.5, 322.0], [64.6, 324.0], [64.7, 325.0], [64.8, 325.0], [64.9, 326.0], [65.0, 327.0], [65.1, 329.0], [65.2, 330.0], [65.3, 330.0], [65.4, 332.0], [65.5, 333.0], [65.6, 335.0], [65.7, 337.0], [65.8, 339.0], [65.9, 340.0], [66.0, 342.0], [66.1, 345.0], [66.2, 346.0], [66.3, 347.0], [66.4, 349.0], [66.5, 350.0], [66.6, 352.0], [66.7, 354.0], [66.8, 355.0], [66.9, 356.0], [67.0, 357.0], [67.1, 357.0], [67.2, 359.0], [67.3, 359.0], [67.4, 360.0], [67.5, 361.0], [67.6, 363.0], [67.7, 364.0], [67.8, 365.0], [67.9, 366.0], [68.0, 368.0], [68.1, 370.0], [68.2, 371.0], [68.3, 373.0], [68.4, 374.0], [68.5, 374.0], [68.6, 375.0], [68.7, 376.0], [68.8, 379.0], [68.9, 379.0], [69.0, 381.0], [69.1, 382.0], [69.2, 383.0], [69.3, 384.0], [69.4, 386.0], [69.5, 388.0], [69.6, 389.0], [69.7, 390.0], [69.8, 391.0], [69.9, 394.0], [70.0, 396.0], [70.1, 397.0], [70.2, 398.0], [70.3, 400.0], [70.4, 402.0], [70.5, 403.0], [70.6, 404.0], [70.7, 405.0], [70.8, 406.0], [70.9, 407.0], [71.0, 409.0], [71.1, 410.0], [71.2, 410.0], [71.3, 412.0], [71.4, 413.0], [71.5, 414.0], [71.6, 415.0], [71.7, 415.0], [71.8, 417.0], [71.9, 419.0], [72.0, 420.0], [72.1, 422.0], [72.2, 424.0], [72.3, 425.0], [72.4, 426.0], [72.5, 427.0], [72.6, 430.0], [72.7, 430.0], [72.8, 432.0], [72.9, 434.0], [73.0, 435.0], [73.1, 435.0], [73.2, 437.0], [73.3, 438.0], [73.4, 440.0], [73.5, 442.0], [73.6, 443.0], [73.7, 445.0], [73.8, 447.0], [73.9, 447.0], [74.0, 450.0], [74.1, 452.0], [74.2, 453.0], [74.3, 453.0], [74.4, 455.0], [74.5, 456.0], [74.6, 458.0], [74.7, 460.0], [74.8, 462.0], [74.9, 462.0], [75.0, 463.0], [75.1, 464.0], [75.2, 465.0], [75.3, 467.0], [75.4, 468.0], [75.5, 469.0], [75.6, 470.0], [75.7, 471.0], [75.8, 473.0], [75.9, 474.0], [76.0, 475.0], [76.1, 477.0], [76.2, 481.0], [76.3, 482.0], [76.4, 485.0], [76.5, 486.0], [76.6, 488.0], [76.7, 490.0], [76.8, 492.0], [76.9, 492.0], [77.0, 494.0], [77.1, 496.0], [77.2, 498.0], [77.3, 499.0], [77.4, 500.0], [77.5, 502.0], [77.6, 503.0], [77.7, 505.0], [77.8, 507.0], [77.9, 509.0], [78.0, 512.0], [78.1, 516.0], [78.2, 518.0], [78.3, 520.0], [78.4, 521.0], [78.5, 524.0], [78.6, 525.0], [78.7, 527.0], [78.8, 530.0], [78.9, 531.0], [79.0, 532.0], [79.1, 534.0], [79.2, 538.0], [79.3, 540.0], [79.4, 543.0], [79.5, 544.0], [79.6, 546.0], [79.7, 548.0], [79.8, 550.0], [79.9, 551.0], [80.0, 554.0], [80.1, 555.0], [80.2, 557.0], [80.3, 560.0], [80.4, 561.0], [80.5, 562.0], [80.6, 563.0], [80.7, 566.0], [80.8, 570.0], [80.9, 571.0], [81.0, 574.0], [81.1, 577.0], [81.2, 579.0], [81.3, 580.0], [81.4, 582.0], [81.5, 584.0], [81.6, 586.0], [81.7, 588.0], [81.8, 589.0], [81.9, 591.0], [82.0, 593.0], [82.1, 595.0], [82.2, 598.0], [82.3, 602.0], [82.4, 605.0], [82.5, 608.0], [82.6, 610.0], [82.7, 612.0], [82.8, 615.0], [82.9, 617.0], [83.0, 619.0], [83.1, 621.0], [83.2, 622.0], [83.3, 625.0], [83.4, 626.0], [83.5, 628.0], [83.6, 630.0], [83.7, 632.0], [83.8, 634.0], [83.9, 634.0], [84.0, 637.0], [84.1, 638.0], [84.2, 642.0], [84.3, 645.0], [84.4, 647.0], [84.5, 649.0], [84.6, 651.0], [84.7, 653.0], [84.8, 655.0], [84.9, 657.0], [85.0, 660.0], [85.1, 661.0], [85.2, 663.0], [85.3, 665.0], [85.4, 666.0], [85.5, 669.0], [85.6, 670.0], [85.7, 672.0], [85.8, 673.0], [85.9, 674.0], [86.0, 676.0], [86.1, 678.0], [86.2, 680.0], [86.3, 682.0], [86.4, 683.0], [86.5, 685.0], [86.6, 688.0], [86.7, 692.0], [86.8, 695.0], [86.9, 696.0], [87.0, 697.0], [87.1, 700.0], [87.2, 702.0], [87.3, 702.0], [87.4, 707.0], [87.5, 710.0], [87.6, 713.0], [87.7, 715.0], [87.8, 720.0], [87.9, 722.0], [88.0, 722.0], [88.1, 724.0], [88.2, 727.0], [88.3, 730.0], [88.4, 732.0], [88.5, 735.0], [88.6, 739.0], [88.7, 742.0], [88.8, 746.0], [88.9, 750.0], [89.0, 754.0], [89.1, 757.0], [89.2, 759.0], [89.3, 765.0], [89.4, 771.0], [89.5, 774.0], [89.6, 778.0], [89.7, 782.0], [89.8, 786.0], [89.9, 787.0], [90.0, 788.0], [90.1, 793.0], [90.2, 797.0], [90.3, 800.0], [90.4, 802.0], [90.5, 805.0], [90.6, 808.0], [90.7, 809.0], [90.8, 813.0], [90.9, 817.0], [91.0, 821.0], [91.1, 826.0], [91.2, 830.0], [91.3, 835.0], [91.4, 837.0], [91.5, 839.0], [91.6, 843.0], [91.7, 851.0], [91.8, 857.0], [91.9, 863.0], [92.0, 867.0], [92.1, 870.0], [92.2, 875.0], [92.3, 880.0], [92.4, 884.0], [92.5, 887.0], [92.6, 892.0], [92.7, 894.0], [92.8, 900.0], [92.9, 904.0], [93.0, 909.0], [93.1, 913.0], [93.2, 920.0], [93.3, 924.0], [93.4, 930.0], [93.5, 934.0], [93.6, 943.0], [93.7, 954.0], [93.8, 960.0], [93.9, 968.0], [94.0, 971.0], [94.1, 976.0], [94.2, 979.0], [94.3, 989.0], [94.4, 992.0], [94.5, 1005.0], [94.6, 1011.0], [94.7, 1015.0], [94.8, 1021.0], [94.9, 1028.0], [95.0, 1038.0], [95.1, 1047.0], [95.2, 1053.0], [95.3, 1058.0], [95.4, 1064.0], [95.5, 1070.0], [95.6, 1085.0], [95.7, 1088.0], [95.8, 1096.0], [95.9, 1105.0], [96.0, 1113.0], [96.1, 1124.0], [96.2, 1132.0], [96.3, 1142.0], [96.4, 1150.0], [96.5, 1165.0], [96.6, 1177.0], [96.7, 1184.0], [96.8, 1195.0], [96.9, 1205.0], [97.0, 1221.0], [97.1, 1230.0], [97.2, 1247.0], [97.3, 1260.0], [97.4, 1284.0], [97.5, 1292.0], [97.6, 1305.0], [97.7, 1316.0], [97.8, 1343.0], [97.9, 1367.0], [98.0, 1386.0], [98.1, 1419.0], [98.2, 1433.0], [98.3, 1441.0], [98.4, 1467.0], [98.5, 1478.0], [98.6, 1515.0], [98.7, 1550.0], [98.8, 1571.0], [98.9, 1594.0], [99.0, 1632.0], [99.1, 1691.0], [99.2, 1721.0], [99.3, 1821.0], [99.4, 1861.0], [99.5, 1944.0], [99.6, 2009.0], [99.7, 2062.0], [99.8, 2340.0], [99.9, 2609.0], [100.0, 3488.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2042.0, "series": [{"data": [[0.0, 2042.0], [600.0, 253.0], [700.0, 170.0], [800.0, 132.0], [900.0, 87.0], [1000.0, 74.0], [1100.0, 53.0], [1200.0, 36.0], [1300.0, 24.0], [1400.0, 28.0], [1500.0, 21.0], [100.0, 679.0], [1600.0, 10.0], [1700.0, 8.0], [1800.0, 8.0], [1900.0, 8.0], [2000.0, 8.0], [2100.0, 2.0], [2200.0, 1.0], [2300.0, 1.0], [2500.0, 3.0], [2600.0, 3.0], [200.0, 590.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [300.0, 388.0], [400.0, 371.0], [500.0, 258.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 77.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4074.0, "series": [{"data": [[0.0, 4074.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1111.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 77.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.869565217391306, "minX": 1.60422696E12, "maxY": 10.0, "series": [{"data": [[1.60422708E12, 10.0], [1.60422696E12, 9.9765306122449], [1.60422714E12, 9.869565217391306], [1.60422702E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422714E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 320.63788831713526, "minX": 1.0, "maxY": 3360.0, "series": [{"data": [[8.0, 1154.5], [4.0, 1982.0], [2.0, 3311.0], [1.0, 3360.0], [9.0, 639.5], [5.0, 744.0], [10.0, 320.63788831713526], [3.0, 1810.5], [6.0, 1150.0], [7.0, 619.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.98707715697455, 323.6163055872296]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3105.266666666667, "minX": 1.60422696E12, "maxY": 1603904.6833333333, "series": [{"data": [[1.60422708E12, 1603904.6833333333], [1.60422696E12, 1007252.6833333333], [1.60422714E12, 218685.1], [1.60422702E12, 1421223.7333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422708E12, 17014.85], [1.60422696E12, 8476.95], [1.60422714E12, 3105.266666666667], [1.60422702E12, 16893.883333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422714E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 299.57721139430265, "minX": 1.60422696E12, "maxY": 386.20204081632664, "series": [{"data": [[1.60422708E12, 307.6539256198341], [1.60422696E12, 386.20204081632664], [1.60422714E12, 374.8376811594204], [1.60422702E12, 299.57721139430265]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422714E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 299.2063968015985, "minX": 1.60422696E12, "maxY": 385.61530612244957, "series": [{"data": [[1.60422708E12, 307.2469008264462], [1.60422696E12, 385.61530612244957], [1.60422714E12, 374.5217391304348], [1.60422702E12, 299.2063968015985]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422714E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.002898550724637679, "minX": 1.60422696E12, "maxY": 0.09183673469387749, "series": [{"data": [[1.60422708E12, 0.00981404958677687], [1.60422696E12, 0.09183673469387749], [1.60422714E12, 0.002898550724637679], [1.60422702E12, 0.012993503248375813]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422714E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.60422696E12, "maxY": 3488.0, "series": [{"data": [[1.60422708E12, 2099.0], [1.60422696E12, 2009.0], [1.60422714E12, 3488.0], [1.60422702E12, 2658.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422708E12, 35.0], [1.60422696E12, 36.0], [1.60422714E12, 38.0], [1.60422702E12, 37.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422708E12, 35.0], [1.60422696E12, 36.0], [1.60422714E12, 38.0], [1.60422702E12, 37.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422708E12, 35.0], [1.60422696E12, 36.0], [1.60422714E12, 38.0], [1.60422702E12, 37.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422708E12, 30.0], [1.60422696E12, 32.0], [1.60422714E12, 33.0], [1.60422702E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422708E12, 192.5], [1.60422696E12, 276.0], [1.60422714E12, 119.0], [1.60422702E12, 176.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422714E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 3335.5, "series": [{"data": [[3.0, 115.0], [4.0, 2022.0], [5.0, 1410.0], [6.0, 1196.0], [7.0, 1101.0], [8.0, 828.5], [9.0, 755.0], [10.0, 757.0], [11.0, 761.0], [12.0, 458.5], [13.0, 629.0], [14.0, 604.5], [15.0, 733.0], [16.0, 635.0], [17.0, 479.0], [18.0, 476.0], [19.0, 520.5], [20.0, 438.5], [21.0, 440.5], [22.0, 354.0], [23.0, 397.5], [24.0, 370.5], [25.0, 248.0], [26.0, 388.5], [27.0, 286.0], [28.0, 256.0], [29.0, 203.0], [30.0, 303.0], [31.0, 276.0], [32.0, 82.5], [33.0, 246.0], [34.0, 260.5], [35.0, 203.0], [37.0, 100.0], [36.0, 209.0], [38.0, 183.5], [39.0, 195.0], [40.0, 81.5], [41.0, 96.0], [43.0, 154.0], [42.0, 76.5], [45.0, 232.0], [44.0, 189.5], [46.0, 133.5], [47.0, 86.5], [48.0, 87.5], [49.0, 124.0], [50.0, 82.0], [52.0, 138.0], [55.0, 94.5], [57.0, 62.0], [59.0, 136.0], [58.0, 115.0], [60.0, 78.0], [61.0, 122.5], [66.0, 147.0], [65.0, 156.0], [67.0, 47.0], [70.0, 147.0], [69.0, 80.0], [71.0, 114.0], [68.0, 79.0], [78.0, 83.0], [81.0, 78.0], [82.0, 84.0], [87.0, 74.0], [97.0, 83.0], [1.0, 3335.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 3335.5, "series": [{"data": [[3.0, 115.0], [4.0, 2021.5], [5.0, 1409.0], [6.0, 1195.5], [7.0, 1101.0], [8.0, 828.5], [9.0, 754.5], [10.0, 755.0], [11.0, 759.0], [12.0, 458.0], [13.0, 627.0], [14.0, 604.0], [15.0, 733.0], [16.0, 632.5], [17.0, 477.5], [18.0, 475.0], [19.0, 519.5], [20.0, 438.0], [21.0, 440.5], [22.0, 354.0], [23.0, 397.0], [24.0, 368.0], [25.0, 247.0], [26.0, 388.5], [27.0, 285.5], [28.0, 255.5], [29.0, 202.0], [30.0, 302.5], [31.0, 275.0], [32.0, 82.0], [33.0, 246.0], [34.0, 260.5], [35.0, 203.0], [37.0, 99.5], [36.0, 208.5], [38.0, 183.0], [39.0, 195.0], [40.0, 81.5], [41.0, 96.0], [43.0, 154.0], [42.0, 76.0], [45.0, 232.0], [44.0, 189.0], [46.0, 133.5], [47.0, 86.5], [48.0, 87.5], [49.0, 124.0], [50.0, 82.0], [52.0, 138.0], [55.0, 94.5], [57.0, 62.0], [59.0, 136.0], [58.0, 115.0], [60.0, 78.0], [61.0, 122.5], [66.0, 146.5], [65.0, 156.0], [67.0, 47.0], [70.0, 147.0], [69.0, 80.0], [71.0, 114.0], [68.0, 79.0], [78.0, 83.0], [81.0, 78.0], [82.0, 84.0], [87.0, 74.0], [97.0, 83.0], [1.0, 3335.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.583333333333333, "minX": 1.60422696E12, "maxY": 33.35, "series": [{"data": [[1.60422708E12, 32.266666666666666], [1.60422696E12, 16.5], [1.60422714E12, 5.583333333333333], [1.60422702E12, 33.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422714E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60422696E12, "maxY": 33.35, "series": [{"data": [[1.60422708E12, 32.266666666666666], [1.60422696E12, 16.333333333333332], [1.60422714E12, 5.75], [1.60422702E12, 33.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422714E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60422696E12, "maxY": 33.35, "series": [{"data": [[1.60422708E12, 32.266666666666666], [1.60422696E12, 16.333333333333332], [1.60422714E12, 5.75], [1.60422702E12, 33.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422714E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.75, "minX": 1.60422696E12, "maxY": 33.35, "series": [{"data": [[1.60422708E12, 32.266666666666666], [1.60422696E12, 16.333333333333332], [1.60422714E12, 5.75], [1.60422702E12, 33.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422714E12, "title": "Total Transactions Per Second"}},
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

