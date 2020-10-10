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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 3093.0, "series": [{"data": [[0.0, 27.0], [0.1, 29.0], [0.2, 29.0], [0.3, 30.0], [0.4, 30.0], [0.5, 31.0], [0.6, 31.0], [0.7, 31.0], [0.8, 31.0], [0.9, 32.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 33.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 34.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 35.0], [3.7, 35.0], [3.8, 35.0], [3.9, 35.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 37.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 38.0], [8.5, 38.0], [8.6, 38.0], [8.7, 38.0], [8.8, 38.0], [8.9, 38.0], [9.0, 38.0], [9.1, 38.0], [9.2, 38.0], [9.3, 38.0], [9.4, 38.0], [9.5, 38.0], [9.6, 38.0], [9.7, 38.0], [9.8, 38.0], [9.9, 38.0], [10.0, 39.0], [10.1, 39.0], [10.2, 39.0], [10.3, 39.0], [10.4, 39.0], [10.5, 39.0], [10.6, 39.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 39.0], [11.1, 39.0], [11.2, 39.0], [11.3, 39.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 40.0], [12.3, 40.0], [12.4, 40.0], [12.5, 40.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 41.0], [13.0, 41.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 42.0], [13.6, 42.0], [13.7, 42.0], [13.8, 42.0], [13.9, 42.0], [14.0, 42.0], [14.1, 42.0], [14.2, 43.0], [14.3, 43.0], [14.4, 43.0], [14.5, 43.0], [14.6, 43.0], [14.7, 43.0], [14.8, 43.0], [14.9, 44.0], [15.0, 44.0], [15.1, 44.0], [15.2, 44.0], [15.3, 44.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 46.0], [15.9, 46.0], [16.0, 46.0], [16.1, 46.0], [16.2, 47.0], [16.3, 47.0], [16.4, 47.0], [16.5, 48.0], [16.6, 48.0], [16.7, 49.0], [16.8, 50.0], [16.9, 50.0], [17.0, 51.0], [17.1, 51.0], [17.2, 52.0], [17.3, 53.0], [17.4, 53.0], [17.5, 53.0], [17.6, 54.0], [17.7, 54.0], [17.8, 55.0], [17.9, 56.0], [18.0, 56.0], [18.1, 56.0], [18.2, 57.0], [18.3, 57.0], [18.4, 58.0], [18.5, 58.0], [18.6, 58.0], [18.7, 59.0], [18.8, 60.0], [18.9, 61.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 63.0], [19.4, 63.0], [19.5, 63.0], [19.6, 64.0], [19.7, 64.0], [19.8, 64.0], [19.9, 64.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 65.0], [20.4, 65.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 66.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 68.0], [21.7, 68.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 68.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 69.0], [22.6, 69.0], [22.7, 69.0], [22.8, 69.0], [22.9, 69.0], [23.0, 69.0], [23.1, 69.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 70.0], [23.6, 70.0], [23.7, 70.0], [23.8, 70.0], [23.9, 70.0], [24.0, 70.0], [24.1, 70.0], [24.2, 70.0], [24.3, 70.0], [24.4, 71.0], [24.5, 71.0], [24.6, 71.0], [24.7, 71.0], [24.8, 71.0], [24.9, 71.0], [25.0, 71.0], [25.1, 71.0], [25.2, 71.0], [25.3, 71.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 73.0], [26.7, 73.0], [26.8, 73.0], [26.9, 73.0], [27.0, 73.0], [27.1, 73.0], [27.2, 73.0], [27.3, 73.0], [27.4, 73.0], [27.5, 73.0], [27.6, 73.0], [27.7, 74.0], [27.8, 74.0], [27.9, 74.0], [28.0, 74.0], [28.1, 74.0], [28.2, 74.0], [28.3, 74.0], [28.4, 74.0], [28.5, 74.0], [28.6, 74.0], [28.7, 74.0], [28.8, 74.0], [28.9, 74.0], [29.0, 75.0], [29.1, 75.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 75.0], [29.6, 75.0], [29.7, 75.0], [29.8, 75.0], [29.9, 75.0], [30.0, 75.0], [30.1, 76.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 77.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 77.0], [32.1, 78.0], [32.2, 78.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 79.0], [33.1, 79.0], [33.2, 79.0], [33.3, 79.0], [33.4, 79.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 80.0], [33.9, 80.0], [34.0, 80.0], [34.1, 80.0], [34.2, 80.0], [34.3, 80.0], [34.4, 80.0], [34.5, 81.0], [34.6, 81.0], [34.7, 81.0], [34.8, 81.0], [34.9, 81.0], [35.0, 82.0], [35.1, 82.0], [35.2, 82.0], [35.3, 82.0], [35.4, 82.0], [35.5, 83.0], [35.6, 83.0], [35.7, 83.0], [35.8, 83.0], [35.9, 84.0], [36.0, 84.0], [36.1, 84.0], [36.2, 84.0], [36.3, 85.0], [36.4, 85.0], [36.5, 85.0], [36.6, 86.0], [36.7, 86.0], [36.8, 87.0], [36.9, 87.0], [37.0, 88.0], [37.1, 88.0], [37.2, 88.0], [37.3, 89.0], [37.4, 89.0], [37.5, 90.0], [37.6, 90.0], [37.7, 91.0], [37.8, 91.0], [37.9, 92.0], [38.0, 92.0], [38.1, 93.0], [38.2, 94.0], [38.3, 95.0], [38.4, 96.0], [38.5, 96.0], [38.6, 97.0], [38.7, 98.0], [38.8, 98.0], [38.9, 99.0], [39.0, 100.0], [39.1, 100.0], [39.2, 101.0], [39.3, 102.0], [39.4, 103.0], [39.5, 104.0], [39.6, 104.0], [39.7, 105.0], [39.8, 105.0], [39.9, 106.0], [40.0, 107.0], [40.1, 108.0], [40.2, 108.0], [40.3, 109.0], [40.4, 109.0], [40.5, 110.0], [40.6, 111.0], [40.7, 112.0], [40.8, 113.0], [40.9, 113.0], [41.0, 114.0], [41.1, 114.0], [41.2, 115.0], [41.3, 116.0], [41.4, 117.0], [41.5, 118.0], [41.6, 118.0], [41.7, 119.0], [41.8, 121.0], [41.9, 122.0], [42.0, 126.0], [42.1, 127.0], [42.2, 129.0], [42.3, 130.0], [42.4, 131.0], [42.5, 132.0], [42.6, 133.0], [42.7, 134.0], [42.8, 134.0], [42.9, 135.0], [43.0, 136.0], [43.1, 137.0], [43.2, 138.0], [43.3, 138.0], [43.4, 139.0], [43.5, 140.0], [43.6, 141.0], [43.7, 141.0], [43.8, 142.0], [43.9, 142.0], [44.0, 143.0], [44.1, 144.0], [44.2, 146.0], [44.3, 146.0], [44.4, 147.0], [44.5, 147.0], [44.6, 148.0], [44.7, 148.0], [44.8, 149.0], [44.9, 150.0], [45.0, 150.0], [45.1, 150.0], [45.2, 151.0], [45.3, 152.0], [45.4, 152.0], [45.5, 152.0], [45.6, 153.0], [45.7, 154.0], [45.8, 154.0], [45.9, 155.0], [46.0, 156.0], [46.1, 156.0], [46.2, 157.0], [46.3, 158.0], [46.4, 158.0], [46.5, 159.0], [46.6, 160.0], [46.7, 161.0], [46.8, 162.0], [46.9, 163.0], [47.0, 164.0], [47.1, 164.0], [47.2, 165.0], [47.3, 165.0], [47.4, 166.0], [47.5, 168.0], [47.6, 168.0], [47.7, 169.0], [47.8, 170.0], [47.9, 171.0], [48.0, 172.0], [48.1, 173.0], [48.2, 174.0], [48.3, 174.0], [48.4, 175.0], [48.5, 176.0], [48.6, 178.0], [48.7, 179.0], [48.8, 181.0], [48.9, 182.0], [49.0, 183.0], [49.1, 184.0], [49.2, 185.0], [49.3, 187.0], [49.4, 187.0], [49.5, 189.0], [49.6, 190.0], [49.7, 191.0], [49.8, 191.0], [49.9, 192.0], [50.0, 193.0], [50.1, 194.0], [50.2, 194.0], [50.3, 196.0], [50.4, 197.0], [50.5, 198.0], [50.6, 199.0], [50.7, 201.0], [50.8, 203.0], [50.9, 204.0], [51.0, 206.0], [51.1, 206.0], [51.2, 208.0], [51.3, 209.0], [51.4, 209.0], [51.5, 211.0], [51.6, 212.0], [51.7, 213.0], [51.8, 214.0], [51.9, 215.0], [52.0, 215.0], [52.1, 217.0], [52.2, 218.0], [52.3, 219.0], [52.4, 219.0], [52.5, 221.0], [52.6, 222.0], [52.7, 223.0], [52.8, 223.0], [52.9, 224.0], [53.0, 225.0], [53.1, 225.0], [53.2, 226.0], [53.3, 228.0], [53.4, 229.0], [53.5, 229.0], [53.6, 230.0], [53.7, 230.0], [53.8, 231.0], [53.9, 231.0], [54.0, 231.0], [54.1, 232.0], [54.2, 233.0], [54.3, 235.0], [54.4, 236.0], [54.5, 236.0], [54.6, 237.0], [54.7, 238.0], [54.8, 239.0], [54.9, 241.0], [55.0, 241.0], [55.1, 242.0], [55.2, 242.0], [55.3, 243.0], [55.4, 244.0], [55.5, 245.0], [55.6, 246.0], [55.7, 247.0], [55.8, 247.0], [55.9, 249.0], [56.0, 250.0], [56.1, 251.0], [56.2, 251.0], [56.3, 252.0], [56.4, 254.0], [56.5, 254.0], [56.6, 256.0], [56.7, 257.0], [56.8, 258.0], [56.9, 258.0], [57.0, 260.0], [57.1, 262.0], [57.2, 263.0], [57.3, 264.0], [57.4, 265.0], [57.5, 265.0], [57.6, 266.0], [57.7, 267.0], [57.8, 268.0], [57.9, 269.0], [58.0, 271.0], [58.1, 272.0], [58.2, 272.0], [58.3, 274.0], [58.4, 274.0], [58.5, 276.0], [58.6, 277.0], [58.7, 278.0], [58.8, 280.0], [58.9, 281.0], [59.0, 282.0], [59.1, 286.0], [59.2, 287.0], [59.3, 289.0], [59.4, 290.0], [59.5, 291.0], [59.6, 292.0], [59.7, 293.0], [59.8, 295.0], [59.9, 295.0], [60.0, 297.0], [60.1, 299.0], [60.2, 302.0], [60.3, 302.0], [60.4, 303.0], [60.5, 304.0], [60.6, 307.0], [60.7, 309.0], [60.8, 310.0], [60.9, 311.0], [61.0, 312.0], [61.1, 315.0], [61.2, 317.0], [61.3, 317.0], [61.4, 319.0], [61.5, 321.0], [61.6, 322.0], [61.7, 323.0], [61.8, 325.0], [61.9, 326.0], [62.0, 327.0], [62.1, 329.0], [62.2, 330.0], [62.3, 331.0], [62.4, 333.0], [62.5, 334.0], [62.6, 335.0], [62.7, 337.0], [62.8, 339.0], [62.9, 340.0], [63.0, 342.0], [63.1, 344.0], [63.2, 346.0], [63.3, 348.0], [63.4, 349.0], [63.5, 350.0], [63.6, 351.0], [63.7, 352.0], [63.8, 354.0], [63.9, 355.0], [64.0, 357.0], [64.1, 358.0], [64.2, 361.0], [64.3, 362.0], [64.4, 364.0], [64.5, 365.0], [64.6, 366.0], [64.7, 369.0], [64.8, 370.0], [64.9, 373.0], [65.0, 375.0], [65.1, 376.0], [65.2, 378.0], [65.3, 379.0], [65.4, 380.0], [65.5, 382.0], [65.6, 384.0], [65.7, 385.0], [65.8, 386.0], [65.9, 388.0], [66.0, 389.0], [66.1, 390.0], [66.2, 391.0], [66.3, 393.0], [66.4, 394.0], [66.5, 394.0], [66.6, 396.0], [66.7, 397.0], [66.8, 398.0], [66.9, 399.0], [67.0, 400.0], [67.1, 400.0], [67.2, 402.0], [67.3, 404.0], [67.4, 405.0], [67.5, 407.0], [67.6, 407.0], [67.7, 410.0], [67.8, 411.0], [67.9, 414.0], [68.0, 415.0], [68.1, 416.0], [68.2, 417.0], [68.3, 418.0], [68.4, 420.0], [68.5, 421.0], [68.6, 423.0], [68.7, 424.0], [68.8, 426.0], [68.9, 426.0], [69.0, 427.0], [69.1, 428.0], [69.2, 430.0], [69.3, 430.0], [69.4, 432.0], [69.5, 433.0], [69.6, 434.0], [69.7, 436.0], [69.8, 437.0], [69.9, 438.0], [70.0, 439.0], [70.1, 440.0], [70.2, 441.0], [70.3, 443.0], [70.4, 444.0], [70.5, 445.0], [70.6, 446.0], [70.7, 447.0], [70.8, 450.0], [70.9, 451.0], [71.0, 452.0], [71.1, 454.0], [71.2, 456.0], [71.3, 457.0], [71.4, 458.0], [71.5, 459.0], [71.6, 460.0], [71.7, 462.0], [71.8, 463.0], [71.9, 464.0], [72.0, 465.0], [72.1, 466.0], [72.2, 467.0], [72.3, 467.0], [72.4, 470.0], [72.5, 471.0], [72.6, 473.0], [72.7, 475.0], [72.8, 477.0], [72.9, 477.0], [73.0, 478.0], [73.1, 479.0], [73.2, 481.0], [73.3, 483.0], [73.4, 484.0], [73.5, 485.0], [73.6, 487.0], [73.7, 489.0], [73.8, 490.0], [73.9, 492.0], [74.0, 493.0], [74.1, 496.0], [74.2, 499.0], [74.3, 501.0], [74.4, 503.0], [74.5, 503.0], [74.6, 505.0], [74.7, 506.0], [74.8, 507.0], [74.9, 510.0], [75.0, 511.0], [75.1, 515.0], [75.2, 518.0], [75.3, 520.0], [75.4, 521.0], [75.5, 525.0], [75.6, 526.0], [75.7, 527.0], [75.8, 529.0], [75.9, 531.0], [76.0, 534.0], [76.1, 536.0], [76.2, 538.0], [76.3, 540.0], [76.4, 542.0], [76.5, 544.0], [76.6, 546.0], [76.7, 548.0], [76.8, 550.0], [76.9, 551.0], [77.0, 553.0], [77.1, 555.0], [77.2, 557.0], [77.3, 558.0], [77.4, 562.0], [77.5, 564.0], [77.6, 567.0], [77.7, 568.0], [77.8, 570.0], [77.9, 571.0], [78.0, 572.0], [78.1, 574.0], [78.2, 574.0], [78.3, 575.0], [78.4, 576.0], [78.5, 578.0], [78.6, 579.0], [78.7, 584.0], [78.8, 585.0], [78.9, 588.0], [79.0, 589.0], [79.1, 591.0], [79.2, 592.0], [79.3, 594.0], [79.4, 600.0], [79.5, 601.0], [79.6, 604.0], [79.7, 605.0], [79.8, 608.0], [79.9, 609.0], [80.0, 613.0], [80.1, 616.0], [80.2, 617.0], [80.3, 620.0], [80.4, 624.0], [80.5, 627.0], [80.6, 630.0], [80.7, 632.0], [80.8, 635.0], [80.9, 636.0], [81.0, 639.0], [81.1, 643.0], [81.2, 646.0], [81.3, 648.0], [81.4, 653.0], [81.5, 657.0], [81.6, 659.0], [81.7, 661.0], [81.8, 663.0], [81.9, 667.0], [82.0, 671.0], [82.1, 675.0], [82.2, 676.0], [82.3, 678.0], [82.4, 681.0], [82.5, 684.0], [82.6, 686.0], [82.7, 689.0], [82.8, 692.0], [82.9, 694.0], [83.0, 696.0], [83.1, 701.0], [83.2, 703.0], [83.3, 706.0], [83.4, 708.0], [83.5, 711.0], [83.6, 713.0], [83.7, 716.0], [83.8, 718.0], [83.9, 723.0], [84.0, 728.0], [84.1, 731.0], [84.2, 734.0], [84.3, 735.0], [84.4, 736.0], [84.5, 737.0], [84.6, 739.0], [84.7, 742.0], [84.8, 747.0], [84.9, 750.0], [85.0, 753.0], [85.1, 754.0], [85.2, 756.0], [85.3, 758.0], [85.4, 759.0], [85.5, 760.0], [85.6, 762.0], [85.7, 766.0], [85.8, 766.0], [85.9, 767.0], [86.0, 770.0], [86.1, 772.0], [86.2, 773.0], [86.3, 777.0], [86.4, 780.0], [86.5, 780.0], [86.6, 782.0], [86.7, 783.0], [86.8, 787.0], [86.9, 788.0], [87.0, 789.0], [87.1, 791.0], [87.2, 794.0], [87.3, 796.0], [87.4, 798.0], [87.5, 800.0], [87.6, 804.0], [87.7, 807.0], [87.8, 809.0], [87.9, 811.0], [88.0, 811.0], [88.1, 813.0], [88.2, 814.0], [88.3, 817.0], [88.4, 821.0], [88.5, 824.0], [88.6, 826.0], [88.7, 827.0], [88.8, 829.0], [88.9, 832.0], [89.0, 835.0], [89.1, 836.0], [89.2, 841.0], [89.3, 846.0], [89.4, 848.0], [89.5, 850.0], [89.6, 855.0], [89.7, 865.0], [89.8, 869.0], [89.9, 875.0], [90.0, 877.0], [90.1, 882.0], [90.2, 885.0], [90.3, 890.0], [90.4, 891.0], [90.5, 895.0], [90.6, 899.0], [90.7, 903.0], [90.8, 909.0], [90.9, 917.0], [91.0, 922.0], [91.1, 926.0], [91.2, 930.0], [91.3, 932.0], [91.4, 938.0], [91.5, 946.0], [91.6, 954.0], [91.7, 957.0], [91.8, 959.0], [91.9, 961.0], [92.0, 966.0], [92.1, 973.0], [92.2, 981.0], [92.3, 995.0], [92.4, 1004.0], [92.5, 1009.0], [92.6, 1017.0], [92.7, 1024.0], [92.8, 1030.0], [92.9, 1039.0], [93.0, 1046.0], [93.1, 1052.0], [93.2, 1057.0], [93.3, 1061.0], [93.4, 1068.0], [93.5, 1075.0], [93.6, 1079.0], [93.7, 1084.0], [93.8, 1093.0], [93.9, 1100.0], [94.0, 1104.0], [94.1, 1108.0], [94.2, 1112.0], [94.3, 1115.0], [94.4, 1118.0], [94.5, 1127.0], [94.6, 1132.0], [94.7, 1135.0], [94.8, 1140.0], [94.9, 1150.0], [95.0, 1155.0], [95.1, 1157.0], [95.2, 1166.0], [95.3, 1173.0], [95.4, 1183.0], [95.5, 1190.0], [95.6, 1197.0], [95.7, 1208.0], [95.8, 1217.0], [95.9, 1225.0], [96.0, 1238.0], [96.1, 1242.0], [96.2, 1248.0], [96.3, 1267.0], [96.4, 1282.0], [96.5, 1288.0], [96.6, 1295.0], [96.7, 1299.0], [96.8, 1304.0], [96.9, 1311.0], [97.0, 1328.0], [97.1, 1354.0], [97.2, 1364.0], [97.3, 1376.0], [97.4, 1382.0], [97.5, 1408.0], [97.6, 1421.0], [97.7, 1450.0], [97.8, 1465.0], [97.9, 1487.0], [98.0, 1509.0], [98.1, 1534.0], [98.2, 1564.0], [98.3, 1582.0], [98.4, 1616.0], [98.5, 1642.0], [98.6, 1673.0], [98.7, 1701.0], [98.8, 1719.0], [98.9, 1757.0], [99.0, 1825.0], [99.1, 1866.0], [99.2, 1927.0], [99.3, 2076.0], [99.4, 2111.0], [99.5, 2242.0], [99.6, 2296.0], [99.7, 2348.0], [99.8, 2530.0], [99.9, 2679.0], [100.0, 3093.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2055.0, "series": [{"data": [[0.0, 2055.0], [600.0, 193.0], [700.0, 232.0], [800.0, 167.0], [900.0, 92.0], [1000.0, 81.0], [1100.0, 91.0], [1200.0, 59.0], [1300.0, 38.0], [1400.0, 27.0], [1500.0, 20.0], [100.0, 613.0], [1600.0, 18.0], [1700.0, 14.0], [1800.0, 12.0], [1900.0, 4.0], [2000.0, 3.0], [2100.0, 8.0], [2200.0, 7.0], [2300.0, 6.0], [2400.0, 3.0], [2500.0, 4.0], [2600.0, 3.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [200.0, 502.0], [300.0, 361.0], [400.0, 383.0], [500.0, 271.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 107.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3915.0, "series": [{"data": [[0.0, 3915.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1250.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 107.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.904051172707891, "minX": 1.60232598E12, "maxY": 10.0, "series": [{"data": [[1.60232598E12, 9.979573712255771], [1.6023261E12, 10.0], [1.60232604E12, 10.0], [1.60232616E12, 9.904051172707891]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232616E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 351.6046423135459, "minX": 1.0, "maxY": 3065.0, "series": [{"data": [[4.0, 1489.5], [8.0, 674.5], [2.0, 2296.0], [1.0, 2909.0], [9.0, 485.0], [5.0, 837.0], [10.0, 351.6046423135459], [6.0, 3065.0], [3.0, 2306.0], [7.0, 1374.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.987101669195768, 354.6382776934748]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4129.25, "minX": 1.60232598E12, "maxY": 1390340.0833333333, "series": [{"data": [[1.60232598E12, 1090547.5333333334], [1.6023261E12, 1390340.0833333333], [1.60232604E12, 1336513.6333333333], [1.60232616E12, 474451.4666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232598E12, 9736.916666666666], [1.6023261E12, 16341.466666666667], [1.60232604E12, 15371.916666666666], [1.60232616E12, 4129.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232616E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 321.0442286947153, "minX": 1.60232598E12, "maxY": 470.4669509594883, "series": [{"data": [[1.60232598E12, 404.40053285967934], [1.6023261E12, 321.0442286947153], [1.60232604E12, 328.2682391662096], [1.60232616E12, 470.4669509594883]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232616E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 320.7432578209277, "minX": 1.60232598E12, "maxY": 470.085287846482, "series": [{"data": [[1.60232598E12, 403.99467140319695], [1.6023261E12, 320.7432578209277], [1.60232604E12, 327.9851892484909], [1.60232616E12, 470.085287846482]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232616E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006396588486140718, "minX": 1.60232598E12, "maxY": 0.09857904085257548, "series": [{"data": [[1.60232598E12, 0.09857904085257548], [1.6023261E12, 0.008090614886731379], [1.60232604E12, 0.00932528798683491], [1.60232616E12, 0.006396588486140718]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232616E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.60232598E12, "maxY": 3093.0, "series": [{"data": [[1.60232598E12, 2477.0], [1.6023261E12, 2155.0], [1.60232604E12, 2679.0], [1.60232616E12, 3093.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232598E12, 30.0], [1.6023261E12, 31.0], [1.60232604E12, 33.0], [1.60232616E12, 34.229999887943265]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232598E12, 30.0], [1.6023261E12, 31.0], [1.60232604E12, 33.0], [1.60232616E12, 34.65300004482269]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232598E12, 30.0], [1.6023261E12, 31.0], [1.60232604E12, 33.0], [1.60232616E12, 34.464999943971634]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232598E12, 28.0], [1.6023261E12, 27.0], [1.60232604E12, 30.0], [1.60232616E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232598E12, 274.0], [1.6023261E12, 197.5], [1.60232604E12, 154.0], [1.60232616E12, 252.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232616E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 58.0, "minX": 1.0, "maxY": 2327.0, "series": [{"data": [[3.0, 1729.0], [4.0, 2327.0], [5.0, 1431.0], [6.0, 1652.5], [7.0, 877.0], [8.0, 1110.0], [9.0, 746.0], [10.0, 738.0], [11.0, 792.0], [12.0, 709.5], [13.0, 766.5], [14.0, 651.5], [15.0, 500.5], [16.0, 661.5], [17.0, 563.0], [18.0, 470.5], [19.0, 487.0], [20.0, 465.0], [21.0, 440.0], [22.0, 403.0], [23.0, 468.0], [24.0, 436.0], [25.0, 316.0], [26.0, 258.5], [27.0, 209.0], [28.0, 271.5], [29.0, 251.5], [30.0, 84.0], [31.0, 70.0], [33.0, 257.0], [32.0, 248.5], [35.0, 154.0], [34.0, 74.5], [37.0, 114.0], [36.0, 91.5], [39.0, 106.0], [38.0, 79.0], [41.0, 184.5], [43.0, 230.0], [44.0, 92.0], [45.0, 214.0], [48.0, 58.0], [49.0, 165.0], [51.0, 99.5], [52.0, 79.5], [53.0, 127.0], [54.0, 79.0], [57.0, 142.0], [56.0, 152.0], [58.0, 69.5], [59.0, 76.0], [61.0, 116.5], [60.0, 154.0], [63.0, 78.0], [64.0, 147.5], [66.0, 131.5], [67.0, 100.0], [70.0, 77.5], [75.0, 76.0], [74.0, 78.0], [79.0, 73.0], [85.0, 71.0], [90.0, 73.5], [1.0, 1521.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 58.0, "minX": 1.0, "maxY": 2326.0, "series": [{"data": [[3.0, 1729.0], [4.0, 2326.0], [5.0, 1430.0], [6.0, 1651.5], [7.0, 877.0], [8.0, 1109.5], [9.0, 745.5], [10.0, 738.0], [11.0, 791.0], [12.0, 708.5], [13.0, 766.5], [14.0, 651.0], [15.0, 500.5], [16.0, 661.5], [17.0, 562.0], [18.0, 470.5], [19.0, 487.0], [20.0, 465.0], [21.0, 440.0], [22.0, 402.0], [23.0, 468.0], [24.0, 436.0], [25.0, 315.5], [26.0, 258.0], [27.0, 209.0], [28.0, 271.5], [29.0, 251.5], [30.0, 84.0], [31.0, 70.0], [33.0, 257.0], [32.0, 248.5], [35.0, 154.0], [34.0, 74.0], [37.0, 114.0], [36.0, 91.5], [39.0, 106.0], [38.0, 79.0], [41.0, 184.5], [43.0, 230.0], [44.0, 92.0], [45.0, 214.0], [48.0, 58.0], [49.0, 165.0], [51.0, 99.5], [52.0, 79.0], [53.0, 127.0], [54.0, 79.0], [57.0, 142.0], [56.0, 152.0], [58.0, 69.5], [59.0, 76.0], [61.0, 116.5], [60.0, 154.0], [63.0, 78.0], [64.0, 147.0], [66.0, 131.5], [67.0, 100.0], [70.0, 77.5], [75.0, 75.0], [74.0, 78.0], [79.0, 73.0], [85.0, 71.0], [90.0, 73.5], [1.0, 1518.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.65, "minX": 1.60232598E12, "maxY": 30.9, "series": [{"data": [[1.60232598E12, 18.933333333333334], [1.6023261E12, 30.9], [1.60232604E12, 30.383333333333333], [1.60232616E12, 7.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232616E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.60232598E12, "maxY": 30.9, "series": [{"data": [[1.60232598E12, 18.766666666666666], [1.6023261E12, 30.9], [1.60232604E12, 30.383333333333333], [1.60232616E12, 7.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60232616E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.60232598E12, "maxY": 30.9, "series": [{"data": [[1.60232598E12, 18.766666666666666], [1.6023261E12, 30.9], [1.60232604E12, 30.383333333333333], [1.60232616E12, 7.816666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232616E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.60232598E12, "maxY": 30.9, "series": [{"data": [[1.60232598E12, 18.766666666666666], [1.6023261E12, 30.9], [1.60232604E12, 30.383333333333333], [1.60232616E12, 7.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60232616E12, "title": "Total Transactions Per Second"}},
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

