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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 4561.0, "series": [{"data": [[0.0, 35.0], [0.1, 37.0], [0.2, 38.0], [0.3, 39.0], [0.4, 40.0], [0.5, 41.0], [0.6, 41.0], [0.7, 41.0], [0.8, 42.0], [0.9, 42.0], [1.0, 42.0], [1.1, 42.0], [1.2, 42.0], [1.3, 42.0], [1.4, 43.0], [1.5, 43.0], [1.6, 43.0], [1.7, 43.0], [1.8, 43.0], [1.9, 43.0], [2.0, 43.0], [2.1, 43.0], [2.2, 44.0], [2.3, 44.0], [2.4, 44.0], [2.5, 44.0], [2.6, 44.0], [2.7, 44.0], [2.8, 44.0], [2.9, 44.0], [3.0, 44.0], [3.1, 44.0], [3.2, 44.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 45.0], [3.7, 45.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 45.0], [4.3, 45.0], [4.4, 45.0], [4.5, 45.0], [4.6, 45.0], [4.7, 45.0], [4.8, 45.0], [4.9, 45.0], [5.0, 46.0], [5.1, 46.0], [5.2, 46.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 46.0], [6.3, 46.0], [6.4, 46.0], [6.5, 46.0], [6.6, 46.0], [6.7, 46.0], [6.8, 47.0], [6.9, 47.0], [7.0, 47.0], [7.1, 47.0], [7.2, 47.0], [7.3, 47.0], [7.4, 47.0], [7.5, 47.0], [7.6, 47.0], [7.7, 47.0], [7.8, 47.0], [7.9, 47.0], [8.0, 47.0], [8.1, 47.0], [8.2, 47.0], [8.3, 47.0], [8.4, 47.0], [8.5, 47.0], [8.6, 48.0], [8.7, 48.0], [8.8, 48.0], [8.9, 48.0], [9.0, 48.0], [9.1, 48.0], [9.2, 48.0], [9.3, 48.0], [9.4, 48.0], [9.5, 48.0], [9.6, 48.0], [9.7, 48.0], [9.8, 48.0], [9.9, 48.0], [10.0, 48.0], [10.1, 48.0], [10.2, 48.0], [10.3, 49.0], [10.4, 49.0], [10.5, 49.0], [10.6, 49.0], [10.7, 49.0], [10.8, 49.0], [10.9, 49.0], [11.0, 49.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 49.0], [11.5, 49.0], [11.6, 49.0], [11.7, 49.0], [11.8, 49.0], [11.9, 49.0], [12.0, 50.0], [12.1, 50.0], [12.2, 50.0], [12.3, 50.0], [12.4, 50.0], [12.5, 50.0], [12.6, 50.0], [12.7, 50.0], [12.8, 50.0], [12.9, 50.0], [13.0, 50.0], [13.1, 50.0], [13.2, 50.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 52.0], [15.7, 52.0], [15.8, 52.0], [15.9, 52.0], [16.0, 52.0], [16.1, 52.0], [16.2, 52.0], [16.3, 53.0], [16.4, 53.0], [16.5, 53.0], [16.6, 53.0], [16.7, 53.0], [16.8, 53.0], [16.9, 53.0], [17.0, 53.0], [17.1, 53.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 55.0], [18.1, 55.0], [18.2, 55.0], [18.3, 55.0], [18.4, 56.0], [18.5, 56.0], [18.6, 56.0], [18.7, 56.0], [18.8, 56.0], [18.9, 56.0], [19.0, 57.0], [19.1, 57.0], [19.2, 57.0], [19.3, 57.0], [19.4, 58.0], [19.5, 58.0], [19.6, 58.0], [19.7, 59.0], [19.8, 59.0], [19.9, 59.0], [20.0, 59.0], [20.1, 60.0], [20.2, 60.0], [20.3, 61.0], [20.4, 61.0], [20.5, 61.0], [20.6, 62.0], [20.7, 62.0], [20.8, 63.0], [20.9, 64.0], [21.0, 64.0], [21.1, 64.0], [21.2, 65.0], [21.3, 65.0], [21.4, 65.0], [21.5, 66.0], [21.6, 66.0], [21.7, 67.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 69.0], [22.2, 69.0], [22.3, 69.0], [22.4, 70.0], [22.5, 70.0], [22.6, 70.0], [22.7, 71.0], [22.8, 71.0], [22.9, 71.0], [23.0, 72.0], [23.1, 72.0], [23.2, 73.0], [23.3, 73.0], [23.4, 73.0], [23.5, 74.0], [23.6, 74.0], [23.7, 75.0], [23.8, 76.0], [23.9, 76.0], [24.0, 77.0], [24.1, 77.0], [24.2, 78.0], [24.3, 78.0], [24.4, 79.0], [24.5, 79.0], [24.6, 79.0], [24.7, 80.0], [24.8, 80.0], [24.9, 81.0], [25.0, 81.0], [25.1, 81.0], [25.2, 81.0], [25.3, 82.0], [25.4, 82.0], [25.5, 82.0], [25.6, 82.0], [25.7, 82.0], [25.8, 82.0], [25.9, 83.0], [26.0, 83.0], [26.1, 83.0], [26.2, 84.0], [26.3, 84.0], [26.4, 84.0], [26.5, 84.0], [26.6, 84.0], [26.7, 84.0], [26.8, 84.0], [26.9, 85.0], [27.0, 85.0], [27.1, 85.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 86.0], [27.8, 86.0], [27.9, 87.0], [28.0, 87.0], [28.1, 87.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 88.0], [28.9, 88.0], [29.0, 88.0], [29.1, 88.0], [29.2, 88.0], [29.3, 88.0], [29.4, 88.0], [29.5, 88.0], [29.6, 89.0], [29.7, 89.0], [29.8, 89.0], [29.9, 89.0], [30.0, 89.0], [30.1, 89.0], [30.2, 89.0], [30.3, 89.0], [30.4, 89.0], [30.5, 90.0], [30.6, 90.0], [30.7, 90.0], [30.8, 90.0], [30.9, 90.0], [31.0, 90.0], [31.1, 90.0], [31.2, 90.0], [31.3, 91.0], [31.4, 91.0], [31.5, 91.0], [31.6, 91.0], [31.7, 91.0], [31.8, 91.0], [31.9, 91.0], [32.0, 91.0], [32.1, 92.0], [32.2, 92.0], [32.3, 92.0], [32.4, 92.0], [32.5, 92.0], [32.6, 92.0], [32.7, 92.0], [32.8, 93.0], [32.9, 93.0], [33.0, 93.0], [33.1, 93.0], [33.2, 93.0], [33.3, 93.0], [33.4, 93.0], [33.5, 93.0], [33.6, 94.0], [33.7, 94.0], [33.8, 94.0], [33.9, 94.0], [34.0, 94.0], [34.1, 94.0], [34.2, 95.0], [34.3, 95.0], [34.4, 95.0], [34.5, 95.0], [34.6, 95.0], [34.7, 95.0], [34.8, 95.0], [34.9, 95.0], [35.0, 96.0], [35.1, 96.0], [35.2, 96.0], [35.3, 96.0], [35.4, 96.0], [35.5, 96.0], [35.6, 96.0], [35.7, 97.0], [35.8, 97.0], [35.9, 97.0], [36.0, 97.0], [36.1, 97.0], [36.2, 97.0], [36.3, 97.0], [36.4, 97.0], [36.5, 98.0], [36.6, 98.0], [36.7, 98.0], [36.8, 98.0], [36.9, 99.0], [37.0, 99.0], [37.1, 99.0], [37.2, 99.0], [37.3, 100.0], [37.4, 100.0], [37.5, 100.0], [37.6, 100.0], [37.7, 100.0], [37.8, 101.0], [37.9, 101.0], [38.0, 101.0], [38.1, 101.0], [38.2, 101.0], [38.3, 101.0], [38.4, 101.0], [38.5, 102.0], [38.6, 102.0], [38.7, 102.0], [38.8, 103.0], [38.9, 103.0], [39.0, 104.0], [39.1, 104.0], [39.2, 104.0], [39.3, 105.0], [39.4, 105.0], [39.5, 106.0], [39.6, 106.0], [39.7, 107.0], [39.8, 107.0], [39.9, 107.0], [40.0, 108.0], [40.1, 108.0], [40.2, 109.0], [40.3, 109.0], [40.4, 110.0], [40.5, 111.0], [40.6, 112.0], [40.7, 112.0], [40.8, 113.0], [40.9, 113.0], [41.0, 114.0], [41.1, 115.0], [41.2, 115.0], [41.3, 117.0], [41.4, 118.0], [41.5, 118.0], [41.6, 120.0], [41.7, 121.0], [41.8, 121.0], [41.9, 122.0], [42.0, 124.0], [42.1, 125.0], [42.2, 126.0], [42.3, 127.0], [42.4, 129.0], [42.5, 129.0], [42.6, 130.0], [42.7, 131.0], [42.8, 132.0], [42.9, 133.0], [43.0, 133.0], [43.1, 134.0], [43.2, 135.0], [43.3, 136.0], [43.4, 136.0], [43.5, 138.0], [43.6, 139.0], [43.7, 140.0], [43.8, 140.0], [43.9, 141.0], [44.0, 142.0], [44.1, 143.0], [44.2, 143.0], [44.3, 145.0], [44.4, 146.0], [44.5, 147.0], [44.6, 148.0], [44.7, 148.0], [44.8, 149.0], [44.9, 150.0], [45.0, 151.0], [45.1, 152.0], [45.2, 152.0], [45.3, 154.0], [45.4, 154.0], [45.5, 156.0], [45.6, 157.0], [45.7, 158.0], [45.8, 159.0], [45.9, 160.0], [46.0, 161.0], [46.1, 162.0], [46.2, 163.0], [46.3, 164.0], [46.4, 165.0], [46.5, 165.0], [46.6, 166.0], [46.7, 167.0], [46.8, 168.0], [46.9, 169.0], [47.0, 170.0], [47.1, 171.0], [47.2, 171.0], [47.3, 173.0], [47.4, 174.0], [47.5, 175.0], [47.6, 176.0], [47.7, 176.0], [47.8, 177.0], [47.9, 178.0], [48.0, 179.0], [48.1, 179.0], [48.2, 180.0], [48.3, 181.0], [48.4, 182.0], [48.5, 184.0], [48.6, 185.0], [48.7, 185.0], [48.8, 186.0], [48.9, 188.0], [49.0, 188.0], [49.1, 189.0], [49.2, 191.0], [49.3, 191.0], [49.4, 192.0], [49.5, 193.0], [49.6, 194.0], [49.7, 195.0], [49.8, 196.0], [49.9, 196.0], [50.0, 197.0], [50.1, 198.0], [50.2, 199.0], [50.3, 200.0], [50.4, 201.0], [50.5, 202.0], [50.6, 203.0], [50.7, 203.0], [50.8, 204.0], [50.9, 205.0], [51.0, 206.0], [51.1, 207.0], [51.2, 208.0], [51.3, 209.0], [51.4, 209.0], [51.5, 211.0], [51.6, 212.0], [51.7, 213.0], [51.8, 214.0], [51.9, 215.0], [52.0, 216.0], [52.1, 217.0], [52.2, 218.0], [52.3, 219.0], [52.4, 219.0], [52.5, 220.0], [52.6, 222.0], [52.7, 223.0], [52.8, 224.0], [52.9, 224.0], [53.0, 225.0], [53.1, 226.0], [53.2, 227.0], [53.3, 228.0], [53.4, 229.0], [53.5, 229.0], [53.6, 230.0], [53.7, 230.0], [53.8, 231.0], [53.9, 232.0], [54.0, 234.0], [54.1, 235.0], [54.2, 235.0], [54.3, 236.0], [54.4, 238.0], [54.5, 238.0], [54.6, 239.0], [54.7, 239.0], [54.8, 240.0], [54.9, 241.0], [55.0, 242.0], [55.1, 242.0], [55.2, 243.0], [55.3, 244.0], [55.4, 244.0], [55.5, 245.0], [55.6, 246.0], [55.7, 247.0], [55.8, 248.0], [55.9, 249.0], [56.0, 250.0], [56.1, 251.0], [56.2, 252.0], [56.3, 252.0], [56.4, 253.0], [56.5, 254.0], [56.6, 255.0], [56.7, 256.0], [56.8, 258.0], [56.9, 258.0], [57.0, 259.0], [57.1, 260.0], [57.2, 261.0], [57.3, 263.0], [57.4, 264.0], [57.5, 265.0], [57.6, 266.0], [57.7, 266.0], [57.8, 269.0], [57.9, 269.0], [58.0, 270.0], [58.1, 272.0], [58.2, 272.0], [58.3, 273.0], [58.4, 275.0], [58.5, 276.0], [58.6, 277.0], [58.7, 277.0], [58.8, 278.0], [58.9, 279.0], [59.0, 280.0], [59.1, 280.0], [59.2, 281.0], [59.3, 283.0], [59.4, 284.0], [59.5, 285.0], [59.6, 286.0], [59.7, 287.0], [59.8, 288.0], [59.9, 288.0], [60.0, 289.0], [60.1, 290.0], [60.2, 291.0], [60.3, 293.0], [60.4, 296.0], [60.5, 297.0], [60.6, 298.0], [60.7, 299.0], [60.8, 300.0], [60.9, 301.0], [61.0, 302.0], [61.1, 305.0], [61.2, 307.0], [61.3, 309.0], [61.4, 310.0], [61.5, 311.0], [61.6, 312.0], [61.7, 313.0], [61.8, 314.0], [61.9, 316.0], [62.0, 317.0], [62.1, 319.0], [62.2, 320.0], [62.3, 321.0], [62.4, 323.0], [62.5, 326.0], [62.6, 329.0], [62.7, 332.0], [62.8, 333.0], [62.9, 334.0], [63.0, 335.0], [63.1, 338.0], [63.2, 339.0], [63.3, 341.0], [63.4, 342.0], [63.5, 343.0], [63.6, 344.0], [63.7, 346.0], [63.8, 348.0], [63.9, 350.0], [64.0, 352.0], [64.1, 353.0], [64.2, 354.0], [64.3, 356.0], [64.4, 358.0], [64.5, 360.0], [64.6, 362.0], [64.7, 364.0], [64.8, 366.0], [64.9, 367.0], [65.0, 367.0], [65.1, 369.0], [65.2, 370.0], [65.3, 372.0], [65.4, 374.0], [65.5, 375.0], [65.6, 378.0], [65.7, 379.0], [65.8, 380.0], [65.9, 382.0], [66.0, 383.0], [66.1, 386.0], [66.2, 388.0], [66.3, 389.0], [66.4, 392.0], [66.5, 393.0], [66.6, 395.0], [66.7, 395.0], [66.8, 397.0], [66.9, 399.0], [67.0, 400.0], [67.1, 402.0], [67.2, 403.0], [67.3, 404.0], [67.4, 406.0], [67.5, 408.0], [67.6, 408.0], [67.7, 410.0], [67.8, 411.0], [67.9, 415.0], [68.0, 417.0], [68.1, 418.0], [68.2, 420.0], [68.3, 422.0], [68.4, 423.0], [68.5, 424.0], [68.6, 426.0], [68.7, 427.0], [68.8, 429.0], [68.9, 431.0], [69.0, 433.0], [69.1, 435.0], [69.2, 436.0], [69.3, 436.0], [69.4, 437.0], [69.5, 440.0], [69.6, 441.0], [69.7, 442.0], [69.8, 443.0], [69.9, 445.0], [70.0, 446.0], [70.1, 448.0], [70.2, 449.0], [70.3, 450.0], [70.4, 451.0], [70.5, 452.0], [70.6, 454.0], [70.7, 456.0], [70.8, 457.0], [70.9, 459.0], [71.0, 460.0], [71.1, 461.0], [71.2, 462.0], [71.3, 464.0], [71.4, 465.0], [71.5, 466.0], [71.6, 467.0], [71.7, 471.0], [71.8, 472.0], [71.9, 473.0], [72.0, 474.0], [72.1, 475.0], [72.2, 478.0], [72.3, 479.0], [72.4, 481.0], [72.5, 482.0], [72.6, 483.0], [72.7, 486.0], [72.8, 488.0], [72.9, 491.0], [73.0, 492.0], [73.1, 494.0], [73.2, 497.0], [73.3, 499.0], [73.4, 503.0], [73.5, 507.0], [73.6, 507.0], [73.7, 509.0], [73.8, 511.0], [73.9, 512.0], [74.0, 514.0], [74.1, 516.0], [74.2, 518.0], [74.3, 519.0], [74.4, 521.0], [74.5, 523.0], [74.6, 528.0], [74.7, 530.0], [74.8, 531.0], [74.9, 534.0], [75.0, 536.0], [75.1, 537.0], [75.2, 539.0], [75.3, 540.0], [75.4, 541.0], [75.5, 544.0], [75.6, 546.0], [75.7, 548.0], [75.8, 550.0], [75.9, 551.0], [76.0, 552.0], [76.1, 554.0], [76.2, 557.0], [76.3, 558.0], [76.4, 561.0], [76.5, 563.0], [76.6, 565.0], [76.7, 568.0], [76.8, 571.0], [76.9, 572.0], [77.0, 572.0], [77.1, 574.0], [77.2, 575.0], [77.3, 579.0], [77.4, 581.0], [77.5, 583.0], [77.6, 585.0], [77.7, 587.0], [77.8, 589.0], [77.9, 590.0], [78.0, 592.0], [78.1, 595.0], [78.2, 597.0], [78.3, 599.0], [78.4, 601.0], [78.5, 605.0], [78.6, 606.0], [78.7, 610.0], [78.8, 611.0], [78.9, 613.0], [79.0, 615.0], [79.1, 617.0], [79.2, 619.0], [79.3, 620.0], [79.4, 622.0], [79.5, 623.0], [79.6, 624.0], [79.7, 626.0], [79.8, 628.0], [79.9, 631.0], [80.0, 632.0], [80.1, 633.0], [80.2, 635.0], [80.3, 638.0], [80.4, 640.0], [80.5, 641.0], [80.6, 643.0], [80.7, 645.0], [80.8, 647.0], [80.9, 647.0], [81.0, 649.0], [81.1, 650.0], [81.2, 651.0], [81.3, 653.0], [81.4, 655.0], [81.5, 658.0], [81.6, 660.0], [81.7, 662.0], [81.8, 663.0], [81.9, 666.0], [82.0, 668.0], [82.1, 671.0], [82.2, 672.0], [82.3, 674.0], [82.4, 675.0], [82.5, 678.0], [82.6, 680.0], [82.7, 682.0], [82.8, 686.0], [82.9, 689.0], [83.0, 692.0], [83.1, 696.0], [83.2, 698.0], [83.3, 700.0], [83.4, 701.0], [83.5, 704.0], [83.6, 708.0], [83.7, 710.0], [83.8, 712.0], [83.9, 715.0], [84.0, 720.0], [84.1, 722.0], [84.2, 726.0], [84.3, 729.0], [84.4, 734.0], [84.5, 738.0], [84.6, 740.0], [84.7, 742.0], [84.8, 743.0], [84.9, 745.0], [85.0, 746.0], [85.1, 749.0], [85.2, 752.0], [85.3, 753.0], [85.4, 756.0], [85.5, 757.0], [85.6, 760.0], [85.7, 761.0], [85.8, 764.0], [85.9, 766.0], [86.0, 769.0], [86.1, 771.0], [86.2, 775.0], [86.3, 779.0], [86.4, 780.0], [86.5, 784.0], [86.6, 787.0], [86.7, 790.0], [86.8, 792.0], [86.9, 796.0], [87.0, 798.0], [87.1, 801.0], [87.2, 805.0], [87.3, 809.0], [87.4, 812.0], [87.5, 814.0], [87.6, 817.0], [87.7, 818.0], [87.8, 822.0], [87.9, 825.0], [88.0, 829.0], [88.1, 831.0], [88.2, 835.0], [88.3, 839.0], [88.4, 841.0], [88.5, 843.0], [88.6, 844.0], [88.7, 848.0], [88.8, 852.0], [88.9, 855.0], [89.0, 860.0], [89.1, 865.0], [89.2, 871.0], [89.3, 874.0], [89.4, 877.0], [89.5, 885.0], [89.6, 889.0], [89.7, 890.0], [89.8, 894.0], [89.9, 899.0], [90.0, 902.0], [90.1, 908.0], [90.2, 913.0], [90.3, 916.0], [90.4, 920.0], [90.5, 928.0], [90.6, 933.0], [90.7, 944.0], [90.8, 952.0], [90.9, 959.0], [91.0, 965.0], [91.1, 968.0], [91.2, 970.0], [91.3, 979.0], [91.4, 985.0], [91.5, 993.0], [91.6, 998.0], [91.7, 1004.0], [91.8, 1009.0], [91.9, 1016.0], [92.0, 1025.0], [92.1, 1030.0], [92.2, 1035.0], [92.3, 1042.0], [92.4, 1051.0], [92.5, 1056.0], [92.6, 1065.0], [92.7, 1071.0], [92.8, 1079.0], [92.9, 1084.0], [93.0, 1091.0], [93.1, 1095.0], [93.2, 1099.0], [93.3, 1105.0], [93.4, 1110.0], [93.5, 1119.0], [93.6, 1128.0], [93.7, 1133.0], [93.8, 1140.0], [93.9, 1151.0], [94.0, 1159.0], [94.1, 1169.0], [94.2, 1178.0], [94.3, 1181.0], [94.4, 1184.0], [94.5, 1190.0], [94.6, 1194.0], [94.7, 1203.0], [94.8, 1208.0], [94.9, 1220.0], [95.0, 1232.0], [95.1, 1239.0], [95.2, 1245.0], [95.3, 1253.0], [95.4, 1259.0], [95.5, 1265.0], [95.6, 1281.0], [95.7, 1289.0], [95.8, 1299.0], [95.9, 1304.0], [96.0, 1307.0], [96.1, 1319.0], [96.2, 1326.0], [96.3, 1339.0], [96.4, 1346.0], [96.5, 1361.0], [96.6, 1374.0], [96.7, 1384.0], [96.8, 1392.0], [96.9, 1402.0], [97.0, 1421.0], [97.1, 1446.0], [97.2, 1463.0], [97.3, 1483.0], [97.4, 1496.0], [97.5, 1532.0], [97.6, 1553.0], [97.7, 1562.0], [97.8, 1595.0], [97.9, 1619.0], [98.0, 1665.0], [98.1, 1682.0], [98.2, 1705.0], [98.3, 1722.0], [98.4, 1748.0], [98.5, 1765.0], [98.6, 1794.0], [98.7, 1841.0], [98.8, 1876.0], [98.9, 1889.0], [99.0, 1920.0], [99.1, 1984.0], [99.2, 2100.0], [99.3, 2194.0], [99.4, 2220.0], [99.5, 2272.0], [99.6, 2345.0], [99.7, 2414.0], [99.8, 2466.0], [99.9, 2668.0], [100.0, 4561.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1959.0, "series": [{"data": [[0.0, 1959.0], [600.0, 259.0], [700.0, 202.0], [800.0, 149.0], [900.0, 92.0], [1000.0, 82.0], [1100.0, 78.0], [1200.0, 59.0], [1300.0, 54.0], [1400.0, 31.0], [1500.0, 21.0], [100.0, 684.0], [1600.0, 17.0], [1700.0, 25.0], [1800.0, 15.0], [1900.0, 12.0], [2000.0, 2.0], [2100.0, 8.0], [2200.0, 13.0], [2300.0, 4.0], [2400.0, 8.0], [2500.0, 3.0], [2600.0, 2.0], [3000.0, 1.0], [200.0, 553.0], [3400.0, 1.0], [4500.0, 3.0], [300.0, 327.0], [400.0, 335.0], [500.0, 263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 135.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3861.0, "series": [{"data": [[0.0, 3861.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1266.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 135.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.938559322033896, "minX": 1.60423908E12, "maxY": 10.0, "series": [{"data": [[1.60423926E12, 9.967153284671532], [1.60423908E12, 9.938559322033896], [1.6042392E12, 10.0], [1.60423914E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423926E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 364.23445249904574, "minX": 1.0, "maxY": 4561.0, "series": [{"data": [[4.0, 1277.5], [8.0, 941.75], [2.0, 4561.0], [1.0, 4559.0], [9.0, 462.8], [5.0, 1565.6666666666667], [10.0, 364.23445249904574], [6.0, 2459.0], [3.0, 2414.0], [7.0, 652.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.985936906119356, 368.2909540098811]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4099.1, "minX": 1.60423908E12, "maxY": 1468514.85, "series": [{"data": [[1.60423926E12, 1464829.2333333334], [1.60423908E12, 280283.05], [1.6042392E12, 1035255.7833333333], [1.60423914E12, 1468514.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423926E12, 12004.65], [1.60423908E12, 4099.1], [1.6042392E12, 17723.383333333335], [1.60423914E12, 11663.816666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423926E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 292.91502640422436, "minX": 1.60423908E12, "maxY": 439.0957367240095, "series": [{"data": [[1.60423926E12, 404.09416058394197], [1.60423908E12, 396.45127118644035], [1.6042392E12, 292.91502640422436], [1.60423914E12, 439.0957367240095]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423926E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 292.64762361977864, "minX": 1.60423908E12, "maxY": 438.4547494390425, "series": [{"data": [[1.60423926E12, 403.6109489051094], [1.60423908E12, 396.0868644067798], [1.6042392E12, 292.64762361977864], [1.60423914E12, 438.4547494390425]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423926E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008759124087591247, "minX": 1.60423908E12, "maxY": 0.19279661016949126, "series": [{"data": [[1.60423926E12, 0.008759124087591247], [1.60423908E12, 0.19279661016949126], [1.6042392E12, 0.012481997119539128], [1.60423914E12, 0.008975317875841434]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423926E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.60423908E12, "maxY": 4561.0, "series": [{"data": [[1.60423926E12, 4561.0], [1.60423908E12, 1707.0], [1.6042392E12, 2554.0], [1.60423914E12, 2643.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423926E12, 42.0], [1.60423908E12, 41.25699988722801], [1.6042392E12, 41.0], [1.60423914E12, 42.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423926E12, 42.0], [1.60423908E12, 41.682700045108795], [1.6042392E12, 41.0], [1.60423914E12, 42.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423926E12, 42.0], [1.60423908E12, 41.493499943614005], [1.6042392E12, 41.0], [1.60423914E12, 42.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423926E12, 36.0], [1.60423908E12, 38.0], [1.6042392E12, 35.0], [1.60423914E12, 39.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423926E12, 235.5], [1.60423908E12, 249.5], [1.6042392E12, 147.0], [1.60423914E12, 280.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423926E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 4560.0, "series": [{"data": [[2.0, 128.0], [3.0, 2406.0], [4.0, 2079.5], [5.0, 1285.0], [6.0, 1366.0], [7.0, 773.0], [8.0, 1216.0], [9.0, 1069.0], [10.0, 957.5], [11.0, 817.0], [12.0, 749.0], [13.0, 673.0], [14.0, 513.5], [15.0, 569.0], [16.0, 557.5], [17.0, 529.0], [18.0, 457.5], [19.0, 492.0], [20.0, 468.5], [21.0, 223.0], [22.0, 372.5], [23.0, 383.0], [24.0, 394.5], [25.0, 256.0], [26.0, 343.5], [27.0, 297.0], [28.0, 277.5], [29.0, 119.0], [30.0, 217.5], [31.0, 206.0], [33.0, 98.0], [32.0, 121.0], [35.0, 106.5], [34.0, 308.5], [37.0, 193.0], [36.0, 103.5], [38.0, 159.0], [41.0, 90.5], [40.0, 208.5], [43.0, 192.0], [42.0, 203.0], [45.0, 67.0], [44.0, 208.0], [46.0, 107.0], [47.0, 122.0], [48.0, 174.5], [49.0, 75.0], [50.0, 133.5], [51.0, 92.0], [53.0, 99.0], [54.0, 92.5], [57.0, 53.0], [56.0, 98.0], [58.0, 146.0], [60.0, 88.0], [61.0, 148.0], [62.0, 89.0], [65.0, 96.0], [75.0, 82.5], [83.0, 87.0], [1.0, 4560.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 4559.5, "series": [{"data": [[2.0, 126.0], [3.0, 2405.0], [4.0, 2079.0], [5.0, 1282.0], [6.0, 1365.5], [7.0, 773.0], [8.0, 1214.5], [9.0, 1056.0], [10.0, 957.0], [11.0, 817.0], [12.0, 747.0], [13.0, 671.0], [14.0, 511.5], [15.0, 569.0], [16.0, 557.5], [17.0, 528.5], [18.0, 457.5], [19.0, 488.0], [20.0, 467.5], [21.0, 223.0], [22.0, 372.0], [23.0, 383.0], [24.0, 394.5], [25.0, 256.0], [26.0, 342.5], [27.0, 297.0], [28.0, 277.5], [29.0, 119.0], [30.0, 217.5], [31.0, 206.0], [33.0, 98.0], [32.0, 121.0], [35.0, 106.5], [34.0, 308.0], [37.0, 193.0], [36.0, 103.5], [38.0, 158.5], [41.0, 90.5], [40.0, 208.0], [43.0, 191.0], [42.0, 203.0], [45.0, 67.0], [44.0, 207.5], [46.0, 107.0], [47.0, 122.0], [48.0, 174.0], [49.0, 75.0], [50.0, 133.5], [51.0, 92.0], [53.0, 99.0], [54.0, 92.5], [57.0, 53.0], [56.0, 98.0], [58.0, 146.0], [60.0, 88.0], [61.0, 148.0], [62.0, 89.0], [65.0, 96.0], [75.0, 82.5], [83.0, 87.0], [1.0, 4559.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.60423908E12, "maxY": 34.71666666666667, "series": [{"data": [[1.60423926E12, 22.666666666666668], [1.60423908E12, 8.033333333333333], [1.6042392E12, 34.71666666666667], [1.60423914E12, 22.283333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423926E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.866666666666666, "minX": 1.60423908E12, "maxY": 34.71666666666667, "series": [{"data": [[1.60423926E12, 22.833333333333332], [1.60423908E12, 7.866666666666666], [1.6042392E12, 34.71666666666667], [1.60423914E12, 22.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423926E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.866666666666666, "minX": 1.60423908E12, "maxY": 34.71666666666667, "series": [{"data": [[1.60423926E12, 22.833333333333332], [1.60423908E12, 7.866666666666666], [1.6042392E12, 34.71666666666667], [1.60423914E12, 22.283333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423926E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.866666666666666, "minX": 1.60423908E12, "maxY": 34.71666666666667, "series": [{"data": [[1.60423926E12, 22.833333333333332], [1.60423908E12, 7.866666666666666], [1.6042392E12, 34.71666666666667], [1.60423914E12, 22.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423926E12, "title": "Total Transactions Per Second"}},
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

