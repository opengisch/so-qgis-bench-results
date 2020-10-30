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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 2033.0, "series": [{"data": [[0.0, 32.0], [0.1, 33.0], [0.2, 34.0], [0.3, 35.0], [0.4, 36.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 39.0], [1.3, 39.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 40.0], [1.8, 40.0], [1.9, 41.0], [2.0, 41.0], [2.1, 41.0], [2.2, 41.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 43.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 44.0], [3.2, 44.0], [3.3, 45.0], [3.4, 45.0], [3.5, 45.0], [3.6, 45.0], [3.7, 46.0], [3.8, 46.0], [3.9, 46.0], [4.0, 46.0], [4.1, 46.0], [4.2, 46.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 48.0], [5.1, 49.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 50.0], [5.7, 50.0], [5.8, 50.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 52.0], [6.3, 52.0], [6.4, 52.0], [6.5, 53.0], [6.6, 53.0], [6.7, 53.0], [6.8, 54.0], [6.9, 54.0], [7.0, 54.0], [7.1, 55.0], [7.2, 55.0], [7.3, 55.0], [7.4, 56.0], [7.5, 56.0], [7.6, 56.0], [7.7, 56.0], [7.8, 57.0], [7.9, 57.0], [8.0, 57.0], [8.1, 58.0], [8.2, 58.0], [8.3, 58.0], [8.4, 58.0], [8.5, 59.0], [8.6, 59.0], [8.7, 60.0], [8.8, 60.0], [8.9, 60.0], [9.0, 61.0], [9.1, 61.0], [9.2, 62.0], [9.3, 62.0], [9.4, 62.0], [9.5, 63.0], [9.6, 63.0], [9.7, 63.0], [9.8, 63.0], [9.9, 64.0], [10.0, 64.0], [10.1, 65.0], [10.2, 65.0], [10.3, 65.0], [10.4, 66.0], [10.5, 66.0], [10.6, 66.0], [10.7, 66.0], [10.8, 67.0], [10.9, 67.0], [11.0, 67.0], [11.1, 68.0], [11.2, 68.0], [11.3, 68.0], [11.4, 69.0], [11.5, 69.0], [11.6, 69.0], [11.7, 69.0], [11.8, 70.0], [11.9, 70.0], [12.0, 70.0], [12.1, 71.0], [12.2, 71.0], [12.3, 71.0], [12.4, 71.0], [12.5, 71.0], [12.6, 72.0], [12.7, 73.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 74.0], [13.2, 74.0], [13.3, 75.0], [13.4, 75.0], [13.5, 75.0], [13.6, 75.0], [13.7, 76.0], [13.8, 76.0], [13.9, 77.0], [14.0, 77.0], [14.1, 77.0], [14.2, 78.0], [14.3, 78.0], [14.4, 78.0], [14.5, 79.0], [14.6, 79.0], [14.7, 79.0], [14.8, 80.0], [14.9, 80.0], [15.0, 81.0], [15.1, 81.0], [15.2, 81.0], [15.3, 82.0], [15.4, 82.0], [15.5, 82.0], [15.6, 82.0], [15.7, 83.0], [15.8, 83.0], [15.9, 84.0], [16.0, 84.0], [16.1, 84.0], [16.2, 85.0], [16.3, 85.0], [16.4, 86.0], [16.5, 86.0], [16.6, 86.0], [16.7, 87.0], [16.8, 87.0], [16.9, 87.0], [17.0, 87.0], [17.1, 88.0], [17.2, 88.0], [17.3, 88.0], [17.4, 89.0], [17.5, 89.0], [17.6, 89.0], [17.7, 90.0], [17.8, 90.0], [17.9, 90.0], [18.0, 90.0], [18.1, 91.0], [18.2, 91.0], [18.3, 91.0], [18.4, 92.0], [18.5, 92.0], [18.6, 92.0], [18.7, 92.0], [18.8, 93.0], [18.9, 93.0], [19.0, 94.0], [19.1, 94.0], [19.2, 94.0], [19.3, 94.0], [19.4, 95.0], [19.5, 95.0], [19.6, 96.0], [19.7, 96.0], [19.8, 96.0], [19.9, 97.0], [20.0, 97.0], [20.1, 97.0], [20.2, 98.0], [20.3, 98.0], [20.4, 99.0], [20.5, 99.0], [20.6, 99.0], [20.7, 99.0], [20.8, 99.0], [20.9, 100.0], [21.0, 100.0], [21.1, 100.0], [21.2, 101.0], [21.3, 101.0], [21.4, 102.0], [21.5, 102.0], [21.6, 102.0], [21.7, 103.0], [21.8, 103.0], [21.9, 104.0], [22.0, 104.0], [22.1, 105.0], [22.2, 106.0], [22.3, 106.0], [22.4, 106.0], [22.5, 107.0], [22.6, 107.0], [22.7, 107.0], [22.8, 108.0], [22.9, 108.0], [23.0, 109.0], [23.1, 109.0], [23.2, 110.0], [23.3, 110.0], [23.4, 111.0], [23.5, 111.0], [23.6, 112.0], [23.7, 112.0], [23.8, 113.0], [23.9, 113.0], [24.0, 114.0], [24.1, 114.0], [24.2, 115.0], [24.3, 115.0], [24.4, 116.0], [24.5, 116.0], [24.6, 116.0], [24.7, 117.0], [24.8, 117.0], [24.9, 117.0], [25.0, 118.0], [25.1, 119.0], [25.2, 119.0], [25.3, 120.0], [25.4, 120.0], [25.5, 121.0], [25.6, 121.0], [25.7, 122.0], [25.8, 123.0], [25.9, 123.0], [26.0, 123.0], [26.1, 124.0], [26.2, 124.0], [26.3, 125.0], [26.4, 126.0], [26.5, 126.0], [26.6, 127.0], [26.7, 127.0], [26.8, 128.0], [26.9, 129.0], [27.0, 129.0], [27.1, 129.0], [27.2, 130.0], [27.3, 131.0], [27.4, 132.0], [27.5, 132.0], [27.6, 132.0], [27.7, 133.0], [27.8, 133.0], [27.9, 134.0], [28.0, 135.0], [28.1, 135.0], [28.2, 135.0], [28.3, 135.0], [28.4, 136.0], [28.5, 136.0], [28.6, 136.0], [28.7, 137.0], [28.8, 137.0], [28.9, 137.0], [29.0, 138.0], [29.1, 138.0], [29.2, 138.0], [29.3, 139.0], [29.4, 139.0], [29.5, 139.0], [29.6, 139.0], [29.7, 140.0], [29.8, 140.0], [29.9, 140.0], [30.0, 140.0], [30.1, 141.0], [30.2, 141.0], [30.3, 141.0], [30.4, 142.0], [30.5, 142.0], [30.6, 142.0], [30.7, 142.0], [30.8, 143.0], [30.9, 143.0], [31.0, 143.0], [31.1, 143.0], [31.2, 144.0], [31.3, 144.0], [31.4, 144.0], [31.5, 145.0], [31.6, 145.0], [31.7, 145.0], [31.8, 145.0], [31.9, 145.0], [32.0, 146.0], [32.1, 146.0], [32.2, 147.0], [32.3, 147.0], [32.4, 147.0], [32.5, 148.0], [32.6, 148.0], [32.7, 148.0], [32.8, 149.0], [32.9, 149.0], [33.0, 149.0], [33.1, 150.0], [33.2, 150.0], [33.3, 150.0], [33.4, 150.0], [33.5, 150.0], [33.6, 151.0], [33.7, 151.0], [33.8, 151.0], [33.9, 151.0], [34.0, 152.0], [34.1, 152.0], [34.2, 152.0], [34.3, 153.0], [34.4, 153.0], [34.5, 154.0], [34.6, 154.0], [34.7, 154.0], [34.8, 155.0], [34.9, 155.0], [35.0, 155.0], [35.1, 156.0], [35.2, 156.0], [35.3, 157.0], [35.4, 157.0], [35.5, 157.0], [35.6, 158.0], [35.7, 159.0], [35.8, 159.0], [35.9, 160.0], [36.0, 160.0], [36.1, 161.0], [36.2, 161.0], [36.3, 162.0], [36.4, 162.0], [36.5, 163.0], [36.6, 163.0], [36.7, 164.0], [36.8, 164.0], [36.9, 165.0], [37.0, 166.0], [37.1, 167.0], [37.2, 167.0], [37.3, 168.0], [37.4, 169.0], [37.5, 169.0], [37.6, 170.0], [37.7, 170.0], [37.8, 172.0], [37.9, 172.0], [38.0, 173.0], [38.1, 173.0], [38.2, 174.0], [38.3, 174.0], [38.4, 175.0], [38.5, 176.0], [38.6, 177.0], [38.7, 177.0], [38.8, 178.0], [38.9, 179.0], [39.0, 179.0], [39.1, 180.0], [39.2, 180.0], [39.3, 181.0], [39.4, 182.0], [39.5, 183.0], [39.6, 184.0], [39.7, 185.0], [39.8, 186.0], [39.9, 187.0], [40.0, 187.0], [40.1, 188.0], [40.2, 188.0], [40.3, 189.0], [40.4, 190.0], [40.5, 190.0], [40.6, 191.0], [40.7, 192.0], [40.8, 193.0], [40.9, 193.0], [41.0, 194.0], [41.1, 195.0], [41.2, 195.0], [41.3, 196.0], [41.4, 197.0], [41.5, 198.0], [41.6, 199.0], [41.7, 200.0], [41.8, 201.0], [41.9, 201.0], [42.0, 202.0], [42.1, 203.0], [42.2, 203.0], [42.3, 203.0], [42.4, 204.0], [42.5, 205.0], [42.6, 205.0], [42.7, 206.0], [42.8, 207.0], [42.9, 207.0], [43.0, 208.0], [43.1, 208.0], [43.2, 209.0], [43.3, 209.0], [43.4, 210.0], [43.5, 211.0], [43.6, 211.0], [43.7, 212.0], [43.8, 213.0], [43.9, 214.0], [44.0, 214.0], [44.1, 215.0], [44.2, 216.0], [44.3, 216.0], [44.4, 217.0], [44.5, 217.0], [44.6, 218.0], [44.7, 218.0], [44.8, 219.0], [44.9, 219.0], [45.0, 220.0], [45.1, 221.0], [45.2, 221.0], [45.3, 222.0], [45.4, 222.0], [45.5, 223.0], [45.6, 223.0], [45.7, 224.0], [45.8, 225.0], [45.9, 225.0], [46.0, 226.0], [46.1, 226.0], [46.2, 227.0], [46.3, 229.0], [46.4, 230.0], [46.5, 230.0], [46.6, 231.0], [46.7, 232.0], [46.8, 232.0], [46.9, 233.0], [47.0, 234.0], [47.1, 235.0], [47.2, 235.0], [47.3, 236.0], [47.4, 237.0], [47.5, 238.0], [47.6, 238.0], [47.7, 239.0], [47.8, 241.0], [47.9, 241.0], [48.0, 241.0], [48.1, 242.0], [48.2, 243.0], [48.3, 243.0], [48.4, 244.0], [48.5, 245.0], [48.6, 246.0], [48.7, 247.0], [48.8, 248.0], [48.9, 249.0], [49.0, 249.0], [49.1, 250.0], [49.2, 251.0], [49.3, 252.0], [49.4, 253.0], [49.5, 254.0], [49.6, 254.0], [49.7, 255.0], [49.8, 256.0], [49.9, 256.0], [50.0, 257.0], [50.1, 258.0], [50.2, 260.0], [50.3, 260.0], [50.4, 261.0], [50.5, 262.0], [50.6, 263.0], [50.7, 264.0], [50.8, 265.0], [50.9, 266.0], [51.0, 267.0], [51.1, 269.0], [51.2, 270.0], [51.3, 270.0], [51.4, 271.0], [51.5, 272.0], [51.6, 272.0], [51.7, 273.0], [51.8, 274.0], [51.9, 274.0], [52.0, 275.0], [52.1, 276.0], [52.2, 277.0], [52.3, 277.0], [52.4, 278.0], [52.5, 278.0], [52.6, 279.0], [52.7, 281.0], [52.8, 281.0], [52.9, 282.0], [53.0, 283.0], [53.1, 283.0], [53.2, 284.0], [53.3, 285.0], [53.4, 285.0], [53.5, 286.0], [53.6, 286.0], [53.7, 287.0], [53.8, 288.0], [53.9, 289.0], [54.0, 290.0], [54.1, 291.0], [54.2, 292.0], [54.3, 292.0], [54.4, 293.0], [54.5, 294.0], [54.6, 295.0], [54.7, 295.0], [54.8, 296.0], [54.9, 297.0], [55.0, 298.0], [55.1, 299.0], [55.2, 299.0], [55.3, 300.0], [55.4, 301.0], [55.5, 302.0], [55.6, 303.0], [55.7, 304.0], [55.8, 305.0], [55.9, 306.0], [56.0, 306.0], [56.1, 307.0], [56.2, 307.0], [56.3, 308.0], [56.4, 310.0], [56.5, 310.0], [56.6, 311.0], [56.7, 312.0], [56.8, 313.0], [56.9, 313.0], [57.0, 314.0], [57.1, 315.0], [57.2, 316.0], [57.3, 317.0], [57.4, 319.0], [57.5, 320.0], [57.6, 321.0], [57.7, 322.0], [57.8, 323.0], [57.9, 325.0], [58.0, 326.0], [58.1, 327.0], [58.2, 328.0], [58.3, 330.0], [58.4, 331.0], [58.5, 331.0], [58.6, 332.0], [58.7, 333.0], [58.8, 333.0], [58.9, 335.0], [59.0, 337.0], [59.1, 338.0], [59.2, 339.0], [59.3, 341.0], [59.4, 342.0], [59.5, 343.0], [59.6, 344.0], [59.7, 345.0], [59.8, 346.0], [59.9, 347.0], [60.0, 347.0], [60.1, 349.0], [60.2, 350.0], [60.3, 352.0], [60.4, 352.0], [60.5, 354.0], [60.6, 355.0], [60.7, 356.0], [60.8, 357.0], [60.9, 360.0], [61.0, 361.0], [61.1, 362.0], [61.2, 363.0], [61.3, 365.0], [61.4, 366.0], [61.5, 368.0], [61.6, 369.0], [61.7, 370.0], [61.8, 371.0], [61.9, 372.0], [62.0, 374.0], [62.1, 375.0], [62.2, 375.0], [62.3, 376.0], [62.4, 377.0], [62.5, 379.0], [62.6, 379.0], [62.7, 381.0], [62.8, 384.0], [62.9, 385.0], [63.0, 386.0], [63.1, 387.0], [63.2, 388.0], [63.3, 390.0], [63.4, 392.0], [63.5, 393.0], [63.6, 394.0], [63.7, 396.0], [63.8, 397.0], [63.9, 399.0], [64.0, 400.0], [64.1, 403.0], [64.2, 404.0], [64.3, 405.0], [64.4, 407.0], [64.5, 408.0], [64.6, 408.0], [64.7, 409.0], [64.8, 410.0], [64.9, 412.0], [65.0, 414.0], [65.1, 415.0], [65.2, 415.0], [65.3, 417.0], [65.4, 418.0], [65.5, 419.0], [65.6, 420.0], [65.7, 420.0], [65.8, 424.0], [65.9, 426.0], [66.0, 427.0], [66.1, 428.0], [66.2, 429.0], [66.3, 430.0], [66.4, 431.0], [66.5, 432.0], [66.6, 434.0], [66.7, 435.0], [66.8, 436.0], [66.9, 437.0], [67.0, 438.0], [67.1, 439.0], [67.2, 441.0], [67.3, 443.0], [67.4, 443.0], [67.5, 444.0], [67.6, 446.0], [67.7, 447.0], [67.8, 448.0], [67.9, 449.0], [68.0, 451.0], [68.1, 454.0], [68.2, 456.0], [68.3, 458.0], [68.4, 458.0], [68.5, 459.0], [68.6, 460.0], [68.7, 461.0], [68.8, 462.0], [68.9, 464.0], [69.0, 466.0], [69.1, 466.0], [69.2, 467.0], [69.3, 469.0], [69.4, 471.0], [69.5, 472.0], [69.6, 474.0], [69.7, 475.0], [69.8, 476.0], [69.9, 477.0], [70.0, 479.0], [70.1, 481.0], [70.2, 482.0], [70.3, 483.0], [70.4, 484.0], [70.5, 485.0], [70.6, 486.0], [70.7, 487.0], [70.8, 488.0], [70.9, 490.0], [71.0, 491.0], [71.1, 492.0], [71.2, 493.0], [71.3, 493.0], [71.4, 495.0], [71.5, 497.0], [71.6, 499.0], [71.7, 500.0], [71.8, 501.0], [71.9, 502.0], [72.0, 502.0], [72.1, 504.0], [72.2, 505.0], [72.3, 506.0], [72.4, 507.0], [72.5, 508.0], [72.6, 509.0], [72.7, 511.0], [72.8, 513.0], [72.9, 514.0], [73.0, 514.0], [73.1, 515.0], [73.2, 516.0], [73.3, 517.0], [73.4, 518.0], [73.5, 518.0], [73.6, 518.0], [73.7, 521.0], [73.8, 521.0], [73.9, 523.0], [74.0, 523.0], [74.1, 524.0], [74.2, 525.0], [74.3, 526.0], [74.4, 527.0], [74.5, 528.0], [74.6, 529.0], [74.7, 529.0], [74.8, 531.0], [74.9, 531.0], [75.0, 532.0], [75.1, 533.0], [75.2, 534.0], [75.3, 535.0], [75.4, 535.0], [75.5, 535.0], [75.6, 536.0], [75.7, 538.0], [75.8, 539.0], [75.9, 539.0], [76.0, 541.0], [76.1, 541.0], [76.2, 542.0], [76.3, 543.0], [76.4, 545.0], [76.5, 546.0], [76.6, 547.0], [76.7, 548.0], [76.8, 548.0], [76.9, 550.0], [77.0, 550.0], [77.1, 552.0], [77.2, 552.0], [77.3, 553.0], [77.4, 554.0], [77.5, 554.0], [77.6, 555.0], [77.7, 557.0], [77.8, 558.0], [77.9, 561.0], [78.0, 562.0], [78.1, 563.0], [78.2, 564.0], [78.3, 565.0], [78.4, 566.0], [78.5, 567.0], [78.6, 567.0], [78.7, 569.0], [78.8, 570.0], [78.9, 573.0], [79.0, 574.0], [79.1, 577.0], [79.2, 579.0], [79.3, 579.0], [79.4, 580.0], [79.5, 581.0], [79.6, 582.0], [79.7, 584.0], [79.8, 584.0], [79.9, 585.0], [80.0, 586.0], [80.1, 587.0], [80.2, 587.0], [80.3, 588.0], [80.4, 589.0], [80.5, 590.0], [80.6, 591.0], [80.7, 593.0], [80.8, 593.0], [80.9, 594.0], [81.0, 595.0], [81.1, 596.0], [81.2, 598.0], [81.3, 599.0], [81.4, 600.0], [81.5, 601.0], [81.6, 601.0], [81.7, 602.0], [81.8, 603.0], [81.9, 605.0], [82.0, 605.0], [82.1, 606.0], [82.2, 608.0], [82.3, 610.0], [82.4, 610.0], [82.5, 611.0], [82.6, 612.0], [82.7, 615.0], [82.8, 616.0], [82.9, 617.0], [83.0, 618.0], [83.1, 620.0], [83.2, 620.0], [83.3, 621.0], [83.4, 623.0], [83.5, 623.0], [83.6, 624.0], [83.7, 626.0], [83.8, 627.0], [83.9, 628.0], [84.0, 629.0], [84.1, 631.0], [84.2, 632.0], [84.3, 634.0], [84.4, 636.0], [84.5, 640.0], [84.6, 642.0], [84.7, 644.0], [84.8, 646.0], [84.9, 647.0], [85.0, 648.0], [85.1, 649.0], [85.2, 650.0], [85.3, 653.0], [85.4, 655.0], [85.5, 656.0], [85.6, 657.0], [85.7, 658.0], [85.8, 660.0], [85.9, 661.0], [86.0, 662.0], [86.1, 665.0], [86.2, 666.0], [86.3, 668.0], [86.4, 671.0], [86.5, 675.0], [86.6, 677.0], [86.7, 679.0], [86.8, 680.0], [86.9, 682.0], [87.0, 685.0], [87.1, 686.0], [87.2, 688.0], [87.3, 689.0], [87.4, 691.0], [87.5, 692.0], [87.6, 696.0], [87.7, 698.0], [87.8, 701.0], [87.9, 703.0], [88.0, 707.0], [88.1, 708.0], [88.2, 710.0], [88.3, 712.0], [88.4, 715.0], [88.5, 719.0], [88.6, 720.0], [88.7, 722.0], [88.8, 725.0], [88.9, 729.0], [89.0, 731.0], [89.1, 737.0], [89.2, 739.0], [89.3, 741.0], [89.4, 745.0], [89.5, 748.0], [89.6, 751.0], [89.7, 753.0], [89.8, 755.0], [89.9, 758.0], [90.0, 760.0], [90.1, 762.0], [90.2, 765.0], [90.3, 768.0], [90.4, 770.0], [90.5, 771.0], [90.6, 776.0], [90.7, 779.0], [90.8, 781.0], [90.9, 785.0], [91.0, 787.0], [91.1, 790.0], [91.2, 793.0], [91.3, 798.0], [91.4, 801.0], [91.5, 802.0], [91.6, 805.0], [91.7, 808.0], [91.8, 810.0], [91.9, 813.0], [92.0, 816.0], [92.1, 819.0], [92.2, 824.0], [92.3, 827.0], [92.4, 835.0], [92.5, 837.0], [92.6, 841.0], [92.7, 845.0], [92.8, 849.0], [92.9, 854.0], [93.0, 857.0], [93.1, 863.0], [93.2, 868.0], [93.3, 873.0], [93.4, 877.0], [93.5, 886.0], [93.6, 890.0], [93.7, 900.0], [93.8, 908.0], [93.9, 913.0], [94.0, 916.0], [94.1, 922.0], [94.2, 926.0], [94.3, 934.0], [94.4, 937.0], [94.5, 943.0], [94.6, 946.0], [94.7, 951.0], [94.8, 954.0], [94.9, 958.0], [95.0, 962.0], [95.1, 969.0], [95.2, 976.0], [95.3, 980.0], [95.4, 984.0], [95.5, 987.0], [95.6, 992.0], [95.7, 1001.0], [95.8, 1005.0], [95.9, 1015.0], [96.0, 1019.0], [96.1, 1034.0], [96.2, 1038.0], [96.3, 1045.0], [96.4, 1063.0], [96.5, 1071.0], [96.6, 1077.0], [96.7, 1080.0], [96.8, 1087.0], [96.9, 1090.0], [97.0, 1103.0], [97.1, 1110.0], [97.2, 1131.0], [97.3, 1139.0], [97.4, 1163.0], [97.5, 1176.0], [97.6, 1182.0], [97.7, 1188.0], [97.8, 1207.0], [97.9, 1212.0], [98.0, 1222.0], [98.1, 1233.0], [98.2, 1248.0], [98.3, 1254.0], [98.4, 1267.0], [98.5, 1279.0], [98.6, 1297.0], [98.7, 1317.0], [98.8, 1325.0], [98.9, 1337.0], [99.0, 1406.0], [99.1, 1461.0], [99.2, 1505.0], [99.3, 1543.0], [99.4, 1559.0], [99.5, 1624.0], [99.6, 1662.0], [99.7, 1713.0], [99.8, 1751.0], [99.9, 1798.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1082.0, "series": [{"data": [[0.0, 1080.0], [600.0, 332.0], [700.0, 186.0], [200.0, 703.0], [800.0, 121.0], [900.0, 103.0], [1000.0, 68.0], [1100.0, 40.0], [1200.0, 45.0], [300.0, 456.0], [1300.0, 20.0], [1400.0, 10.0], [1500.0, 13.0], [400.0, 400.0], [100.0, 1082.0], [1600.0, 13.0], [1700.0, 11.0], [1800.0, 4.0], [500.0, 502.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3725.0, "series": [{"data": [[0.0, 3725.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1423.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 42.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.859375, "minX": 1.60405008E12, "maxY": 10.0, "series": [{"data": [[1.6040502E12, 10.0], [1.60405026E12, 9.859375], [1.60405008E12, 9.999342969776595], [1.60405014E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135.0, "minX": 1.0, "maxY": 1160.0, "series": [{"data": [[8.0, 745.0], [4.0, 525.0], [2.0, 1158.0], [1.0, 1160.0], [9.0, 495.0], [10.0, 356.0988416988416], [5.0, 204.0], [6.0, 293.0], [3.0, 620.0], [7.0, 135.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 356.5360308285167]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2495.8333333333335, "minX": 1.60405008E12, "maxY": 5775605.766666667, "series": [{"data": [[1.6040502E12, 5321281.55], [1.60405026E12, 1079280.1666666667], [1.60405008E12, 4735674.366666666], [1.60405014E12, 5775605.766666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040502E12, 13459.4], [1.60405026E12, 2495.8333333333335], [1.60405008E12, 11488.45], [1.60405014E12, 12324.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 334.0031249999998, "minX": 1.60405008E12, "maxY": 374.60913070669113, "series": [{"data": [[1.6040502E12, 340.9491137793024], [1.60405026E12, 334.0031249999998], [1.60405008E12, 360.1977660972409], [1.60405014E12, 374.60913070669113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 332.86562500000025, "minX": 1.60405008E12, "maxY": 372.9612257661038, "series": [{"data": [[1.6040502E12, 339.87478559176736], [1.60405026E12, 332.86562500000025], [1.60405008E12, 358.7181340341654], [1.60405014E12, 372.9612257661038]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003124999999999999, "minX": 1.60405008E12, "maxY": 0.06767411300919829, "series": [{"data": [[1.6040502E12, 0.008576329331046306], [1.60405026E12, 0.003124999999999999], [1.60405008E12, 0.06767411300919829], [1.60405014E12, 0.008755472170106315]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.60405008E12, "maxY": 2033.0, "series": [{"data": [[1.6040502E12, 1869.0], [1.60405026E12, 1721.0], [1.60405008E12, 1788.0], [1.60405014E12, 2033.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040502E12, 36.0], [1.60405026E12, 37.88899992346764], [1.60405008E12, 43.0], [1.60405014E12, 38.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040502E12, 37.0], [1.60405026E12, 38.0], [1.60405008E12, 43.0], [1.60405014E12, 38.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040502E12, 36.62499979138374], [1.60405026E12, 38.0], [1.60405008E12, 43.0], [1.60405014E12, 38.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040502E12, 32.0], [1.60405026E12, 36.0], [1.60405008E12, 34.0], [1.60405014E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040502E12, 223.0], [1.60405026E12, 240.0], [1.60405008E12, 270.0], [1.60405014E12, 285.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 2.0, "maxY": 1159.0, "series": [{"data": [[2.0, 1159.0], [10.0, 319.5], [13.0, 710.0], [14.0, 574.0], [15.0, 457.0], [16.0, 504.0], [17.0, 520.0], [18.0, 494.0], [19.0, 471.0], [20.0, 441.0], [21.0, 376.0], [22.0, 382.0], [23.0, 389.5], [24.0, 393.0], [25.0, 292.0], [26.0, 315.5], [27.0, 302.0], [28.0, 300.0], [29.0, 254.0], [30.0, 215.5], [31.0, 304.5], [32.0, 284.0], [33.0, 222.5], [35.0, 241.5], [34.0, 240.5], [36.0, 287.0], [37.0, 159.0], [38.0, 171.5], [41.0, 105.0], [40.0, 126.0], [42.0, 180.0], [43.0, 171.0], [45.0, 241.0], [44.0, 184.0], [47.0, 145.0], [46.0, 108.5], [48.0, 132.0], [49.0, 107.0], [51.0, 165.0], [53.0, 148.0], [55.0, 90.0], [54.0, 87.5], [56.0, 153.0], [58.0, 89.0], [63.0, 137.0], [62.0, 93.0], [72.0, 56.0], [74.0, 90.5], [84.0, 83.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.5, "minX": 2.0, "maxY": 1155.5, "series": [{"data": [[2.0, 1155.5], [10.0, 319.5], [13.0, 710.0], [14.0, 571.5], [15.0, 455.0], [16.0, 500.0], [17.0, 513.0], [18.0, 490.0], [19.0, 469.0], [20.0, 440.0], [21.0, 373.0], [22.0, 381.5], [23.0, 387.5], [24.0, 391.5], [25.0, 292.0], [26.0, 314.5], [27.0, 302.0], [28.0, 300.0], [29.0, 253.0], [30.0, 215.0], [31.0, 303.0], [32.0, 283.0], [33.0, 222.0], [35.0, 241.0], [34.0, 240.0], [36.0, 286.0], [37.0, 159.0], [38.0, 171.0], [41.0, 104.0], [40.0, 125.5], [42.0, 178.5], [43.0, 171.0], [45.0, 241.0], [44.0, 182.0], [47.0, 145.0], [46.0, 108.0], [48.0, 132.0], [49.0, 107.0], [51.0, 163.0], [53.0, 145.0], [55.0, 90.0], [54.0, 87.0], [56.0, 152.5], [58.0, 88.5], [63.0, 136.0], [62.0, 93.0], [72.0, 55.5], [74.0, 90.0], [84.0, 83.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.166666666666667, "minX": 1.60405008E12, "maxY": 29.15, "series": [{"data": [[1.6040502E12, 29.15], [1.60405026E12, 5.166666666666667], [1.60405008E12, 25.533333333333335], [1.60405014E12, 26.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.60405008E12, "maxY": 29.15, "series": [{"data": [[1.6040502E12, 29.15], [1.60405026E12, 5.333333333333333], [1.60405008E12, 25.366666666666667], [1.60405014E12, 26.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.60405008E12, "maxY": 29.15, "series": [{"data": [[1.6040502E12, 29.15], [1.60405026E12, 5.333333333333333], [1.60405008E12, 25.366666666666667], [1.60405014E12, 26.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.60405008E12, "maxY": 29.15, "series": [{"data": [[1.6040502E12, 29.15], [1.60405026E12, 5.333333333333333], [1.60405008E12, 25.366666666666667], [1.60405014E12, 26.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405026E12, "title": "Total Transactions Per Second"}},
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

