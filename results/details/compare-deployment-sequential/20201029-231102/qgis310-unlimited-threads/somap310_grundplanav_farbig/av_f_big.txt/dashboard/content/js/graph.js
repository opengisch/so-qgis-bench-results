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
        data: {"result": {"minY": 170.0, "minX": 0.0, "maxY": 2847.0, "series": [{"data": [[0.0, 170.0], [0.1, 170.0], [0.2, 177.0], [0.3, 185.0], [0.4, 185.0], [0.5, 189.0], [0.6, 189.0], [0.7, 189.0], [0.8, 189.0], [0.9, 191.0], [1.0, 191.0], [1.1, 192.0], [1.2, 192.0], [1.3, 194.0], [1.4, 195.0], [1.5, 195.0], [1.6, 195.0], [1.7, 195.0], [1.8, 195.0], [1.9, 195.0], [2.0, 195.0], [2.1, 196.0], [2.2, 196.0], [2.3, 196.0], [2.4, 198.0], [2.5, 199.0], [2.6, 199.0], [2.7, 199.0], [2.8, 200.0], [2.9, 201.0], [3.0, 203.0], [3.1, 203.0], [3.2, 203.0], [3.3, 204.0], [3.4, 204.0], [3.5, 204.0], [3.6, 204.0], [3.7, 205.0], [3.8, 205.0], [3.9, 205.0], [4.0, 205.0], [4.1, 206.0], [4.2, 206.0], [4.3, 208.0], [4.4, 209.0], [4.5, 211.0], [4.6, 211.0], [4.7, 211.0], [4.8, 211.0], [4.9, 211.0], [5.0, 211.0], [5.1, 211.0], [5.2, 211.0], [5.3, 211.0], [5.4, 213.0], [5.5, 213.0], [5.6, 216.0], [5.7, 216.0], [5.8, 217.0], [5.9, 217.0], [6.0, 217.0], [6.1, 217.0], [6.2, 219.0], [6.3, 219.0], [6.4, 219.0], [6.5, 219.0], [6.6, 221.0], [6.7, 221.0], [6.8, 221.0], [6.9, 221.0], [7.0, 222.0], [7.1, 225.0], [7.2, 225.0], [7.3, 230.0], [7.4, 230.0], [7.5, 234.0], [7.6, 234.0], [7.7, 234.0], [7.8, 235.0], [7.9, 235.0], [8.0, 235.0], [8.1, 239.0], [8.2, 240.0], [8.3, 241.0], [8.4, 241.0], [8.5, 242.0], [8.6, 243.0], [8.7, 243.0], [8.8, 244.0], [8.9, 247.0], [9.0, 248.0], [9.1, 248.0], [9.2, 248.0], [9.3, 250.0], [9.4, 250.0], [9.5, 250.0], [9.6, 250.0], [9.7, 250.0], [9.8, 251.0], [9.9, 251.0], [10.0, 251.0], [10.1, 252.0], [10.2, 252.0], [10.3, 252.0], [10.4, 252.0], [10.5, 253.0], [10.6, 253.0], [10.7, 253.0], [10.8, 253.0], [10.9, 253.0], [11.0, 253.0], [11.1, 254.0], [11.2, 254.0], [11.3, 254.0], [11.4, 254.0], [11.5, 254.0], [11.6, 255.0], [11.7, 255.0], [11.8, 255.0], [11.9, 255.0], [12.0, 255.0], [12.1, 255.0], [12.2, 255.0], [12.3, 256.0], [12.4, 256.0], [12.5, 256.0], [12.6, 256.0], [12.7, 257.0], [12.8, 258.0], [12.9, 258.0], [13.0, 258.0], [13.1, 259.0], [13.2, 259.0], [13.3, 259.0], [13.4, 260.0], [13.5, 260.0], [13.6, 260.0], [13.7, 260.0], [13.8, 260.0], [13.9, 261.0], [14.0, 261.0], [14.1, 261.0], [14.2, 262.0], [14.3, 263.0], [14.4, 263.0], [14.5, 263.0], [14.6, 263.0], [14.7, 264.0], [14.8, 264.0], [14.9, 265.0], [15.0, 265.0], [15.1, 265.0], [15.2, 266.0], [15.3, 266.0], [15.4, 266.0], [15.5, 266.0], [15.6, 266.0], [15.7, 266.0], [15.8, 267.0], [15.9, 267.0], [16.0, 267.0], [16.1, 267.0], [16.2, 267.0], [16.3, 267.0], [16.4, 267.0], [16.5, 268.0], [16.6, 268.0], [16.7, 268.0], [16.8, 269.0], [16.9, 269.0], [17.0, 269.0], [17.1, 270.0], [17.2, 270.0], [17.3, 271.0], [17.4, 271.0], [17.5, 271.0], [17.6, 271.0], [17.7, 271.0], [17.8, 271.0], [17.9, 271.0], [18.0, 271.0], [18.1, 272.0], [18.2, 272.0], [18.3, 272.0], [18.4, 273.0], [18.5, 273.0], [18.6, 273.0], [18.7, 273.0], [18.8, 273.0], [18.9, 273.0], [19.0, 273.0], [19.1, 273.0], [19.2, 274.0], [19.3, 274.0], [19.4, 274.0], [19.5, 275.0], [19.6, 276.0], [19.7, 276.0], [19.8, 276.0], [19.9, 276.0], [20.0, 276.0], [20.1, 276.0], [20.2, 277.0], [20.3, 277.0], [20.4, 277.0], [20.5, 278.0], [20.6, 278.0], [20.7, 278.0], [20.8, 278.0], [20.9, 278.0], [21.0, 280.0], [21.1, 280.0], [21.2, 280.0], [21.3, 280.0], [21.4, 281.0], [21.5, 281.0], [21.6, 281.0], [21.7, 281.0], [21.8, 282.0], [21.9, 282.0], [22.0, 282.0], [22.1, 282.0], [22.2, 283.0], [22.3, 283.0], [22.4, 283.0], [22.5, 284.0], [22.6, 284.0], [22.7, 284.0], [22.8, 285.0], [22.9, 285.0], [23.0, 286.0], [23.1, 286.0], [23.2, 288.0], [23.3, 289.0], [23.4, 289.0], [23.5, 289.0], [23.6, 289.0], [23.7, 289.0], [23.8, 289.0], [23.9, 290.0], [24.0, 291.0], [24.1, 292.0], [24.2, 292.0], [24.3, 292.0], [24.4, 292.0], [24.5, 293.0], [24.6, 293.0], [24.7, 293.0], [24.8, 293.0], [24.9, 293.0], [25.0, 293.0], [25.1, 294.0], [25.2, 294.0], [25.3, 294.0], [25.4, 294.0], [25.5, 295.0], [25.6, 295.0], [25.7, 295.0], [25.8, 296.0], [25.9, 296.0], [26.0, 296.0], [26.1, 296.0], [26.2, 296.0], [26.3, 296.0], [26.4, 296.0], [26.5, 296.0], [26.6, 297.0], [26.7, 298.0], [26.8, 298.0], [26.9, 298.0], [27.0, 301.0], [27.1, 301.0], [27.2, 301.0], [27.3, 302.0], [27.4, 305.0], [27.5, 306.0], [27.6, 306.0], [27.7, 309.0], [27.8, 310.0], [27.9, 312.0], [28.0, 312.0], [28.1, 314.0], [28.2, 315.0], [28.3, 315.0], [28.4, 315.0], [28.5, 315.0], [28.6, 315.0], [28.7, 315.0], [28.8, 316.0], [28.9, 317.0], [29.0, 319.0], [29.1, 319.0], [29.2, 321.0], [29.3, 321.0], [29.4, 323.0], [29.5, 323.0], [29.6, 324.0], [29.7, 324.0], [29.8, 326.0], [29.9, 326.0], [30.0, 329.0], [30.1, 333.0], [30.2, 333.0], [30.3, 337.0], [30.4, 338.0], [30.5, 339.0], [30.6, 339.0], [30.7, 339.0], [30.8, 340.0], [30.9, 341.0], [31.0, 341.0], [31.1, 342.0], [31.2, 345.0], [31.3, 348.0], [31.4, 348.0], [31.5, 349.0], [31.6, 349.0], [31.7, 349.0], [31.8, 350.0], [31.9, 350.0], [32.0, 350.0], [32.1, 350.0], [32.2, 351.0], [32.3, 354.0], [32.4, 355.0], [32.5, 355.0], [32.6, 355.0], [32.7, 355.0], [32.8, 356.0], [32.9, 356.0], [33.0, 357.0], [33.1, 357.0], [33.2, 358.0], [33.3, 358.0], [33.4, 358.0], [33.5, 358.0], [33.6, 358.0], [33.7, 360.0], [33.8, 361.0], [33.9, 362.0], [34.0, 362.0], [34.1, 362.0], [34.2, 362.0], [34.3, 364.0], [34.4, 364.0], [34.5, 364.0], [34.6, 364.0], [34.7, 364.0], [34.8, 364.0], [34.9, 365.0], [35.0, 365.0], [35.1, 365.0], [35.2, 365.0], [35.3, 366.0], [35.4, 366.0], [35.5, 366.0], [35.6, 367.0], [35.7, 368.0], [35.8, 369.0], [35.9, 369.0], [36.0, 369.0], [36.1, 369.0], [36.2, 369.0], [36.3, 369.0], [36.4, 369.0], [36.5, 370.0], [36.6, 370.0], [36.7, 370.0], [36.8, 370.0], [36.9, 370.0], [37.0, 370.0], [37.1, 371.0], [37.2, 371.0], [37.3, 371.0], [37.4, 371.0], [37.5, 372.0], [37.6, 372.0], [37.7, 372.0], [37.8, 372.0], [37.9, 372.0], [38.0, 372.0], [38.1, 373.0], [38.2, 373.0], [38.3, 373.0], [38.4, 373.0], [38.5, 373.0], [38.6, 374.0], [38.7, 375.0], [38.8, 375.0], [38.9, 375.0], [39.0, 375.0], [39.1, 375.0], [39.2, 375.0], [39.3, 375.0], [39.4, 375.0], [39.5, 376.0], [39.6, 376.0], [39.7, 376.0], [39.8, 376.0], [39.9, 376.0], [40.0, 376.0], [40.1, 376.0], [40.2, 377.0], [40.3, 377.0], [40.4, 377.0], [40.5, 377.0], [40.6, 378.0], [40.7, 378.0], [40.8, 378.0], [40.9, 378.0], [41.0, 379.0], [41.1, 379.0], [41.2, 379.0], [41.3, 379.0], [41.4, 379.0], [41.5, 379.0], [41.6, 379.0], [41.7, 379.0], [41.8, 379.0], [41.9, 379.0], [42.0, 380.0], [42.1, 380.0], [42.2, 380.0], [42.3, 380.0], [42.4, 380.0], [42.5, 380.0], [42.6, 381.0], [42.7, 381.0], [42.8, 381.0], [42.9, 382.0], [43.0, 382.0], [43.1, 382.0], [43.2, 382.0], [43.3, 382.0], [43.4, 382.0], [43.5, 382.0], [43.6, 382.0], [43.7, 382.0], [43.8, 382.0], [43.9, 382.0], [44.0, 382.0], [44.1, 383.0], [44.2, 383.0], [44.3, 383.0], [44.4, 383.0], [44.5, 383.0], [44.6, 383.0], [44.7, 383.0], [44.8, 384.0], [44.9, 384.0], [45.0, 384.0], [45.1, 385.0], [45.2, 385.0], [45.3, 385.0], [45.4, 385.0], [45.5, 385.0], [45.6, 385.0], [45.7, 385.0], [45.8, 385.0], [45.9, 386.0], [46.0, 387.0], [46.1, 387.0], [46.2, 387.0], [46.3, 387.0], [46.4, 388.0], [46.5, 388.0], [46.6, 388.0], [46.7, 388.0], [46.8, 388.0], [46.9, 389.0], [47.0, 389.0], [47.1, 389.0], [47.2, 389.0], [47.3, 390.0], [47.4, 390.0], [47.5, 390.0], [47.6, 390.0], [47.7, 390.0], [47.8, 390.0], [47.9, 391.0], [48.0, 391.0], [48.1, 391.0], [48.2, 392.0], [48.3, 392.0], [48.4, 392.0], [48.5, 392.0], [48.6, 393.0], [48.7, 393.0], [48.8, 393.0], [48.9, 394.0], [49.0, 394.0], [49.1, 394.0], [49.2, 394.0], [49.3, 394.0], [49.4, 394.0], [49.5, 394.0], [49.6, 395.0], [49.7, 396.0], [49.8, 396.0], [49.9, 396.0], [50.0, 396.0], [50.1, 396.0], [50.2, 396.0], [50.3, 398.0], [50.4, 398.0], [50.5, 398.0], [50.6, 398.0], [50.7, 398.0], [50.8, 399.0], [50.9, 400.0], [51.0, 400.0], [51.1, 400.0], [51.2, 401.0], [51.3, 402.0], [51.4, 402.0], [51.5, 403.0], [51.6, 403.0], [51.7, 403.0], [51.8, 404.0], [51.9, 404.0], [52.0, 404.0], [52.1, 404.0], [52.2, 405.0], [52.3, 406.0], [52.4, 407.0], [52.5, 407.0], [52.6, 409.0], [52.7, 410.0], [52.8, 410.0], [52.9, 410.0], [53.0, 410.0], [53.1, 411.0], [53.2, 411.0], [53.3, 411.0], [53.4, 411.0], [53.5, 414.0], [53.6, 414.0], [53.7, 415.0], [53.8, 417.0], [53.9, 420.0], [54.0, 420.0], [54.1, 421.0], [54.2, 422.0], [54.3, 424.0], [54.4, 424.0], [54.5, 424.0], [54.6, 425.0], [54.7, 426.0], [54.8, 426.0], [54.9, 426.0], [55.0, 426.0], [55.1, 426.0], [55.2, 427.0], [55.3, 428.0], [55.4, 431.0], [55.5, 431.0], [55.6, 432.0], [55.7, 432.0], [55.8, 432.0], [55.9, 432.0], [56.0, 432.0], [56.1, 433.0], [56.2, 433.0], [56.3, 433.0], [56.4, 434.0], [56.5, 434.0], [56.6, 434.0], [56.7, 434.0], [56.8, 435.0], [56.9, 436.0], [57.0, 436.0], [57.1, 436.0], [57.2, 437.0], [57.3, 437.0], [57.4, 437.0], [57.5, 438.0], [57.6, 439.0], [57.7, 439.0], [57.8, 439.0], [57.9, 440.0], [58.0, 440.0], [58.1, 440.0], [58.2, 440.0], [58.3, 441.0], [58.4, 441.0], [58.5, 441.0], [58.6, 443.0], [58.7, 444.0], [58.8, 444.0], [58.9, 444.0], [59.0, 445.0], [59.1, 446.0], [59.2, 447.0], [59.3, 447.0], [59.4, 448.0], [59.5, 449.0], [59.6, 449.0], [59.7, 449.0], [59.8, 451.0], [59.9, 453.0], [60.0, 453.0], [60.1, 453.0], [60.2, 454.0], [60.3, 455.0], [60.4, 455.0], [60.5, 455.0], [60.6, 456.0], [60.7, 456.0], [60.8, 456.0], [60.9, 457.0], [61.0, 457.0], [61.1, 458.0], [61.2, 458.0], [61.3, 459.0], [61.4, 459.0], [61.5, 459.0], [61.6, 459.0], [61.7, 460.0], [61.8, 461.0], [61.9, 461.0], [62.0, 461.0], [62.1, 462.0], [62.2, 464.0], [62.3, 464.0], [62.4, 465.0], [62.5, 469.0], [62.6, 472.0], [62.7, 472.0], [62.8, 473.0], [62.9, 474.0], [63.0, 474.0], [63.1, 474.0], [63.2, 476.0], [63.3, 478.0], [63.4, 478.0], [63.5, 479.0], [63.6, 480.0], [63.7, 484.0], [63.8, 484.0], [63.9, 487.0], [64.0, 490.0], [64.1, 494.0], [64.2, 494.0], [64.3, 495.0], [64.4, 496.0], [64.5, 499.0], [64.6, 499.0], [64.7, 499.0], [64.8, 500.0], [64.9, 501.0], [65.0, 501.0], [65.1, 501.0], [65.2, 507.0], [65.3, 507.0], [65.4, 508.0], [65.5, 509.0], [65.6, 509.0], [65.7, 509.0], [65.8, 510.0], [65.9, 512.0], [66.0, 513.0], [66.1, 513.0], [66.2, 513.0], [66.3, 513.0], [66.4, 514.0], [66.5, 514.0], [66.6, 514.0], [66.7, 515.0], [66.8, 515.0], [66.9, 516.0], [67.0, 516.0], [67.1, 516.0], [67.2, 516.0], [67.3, 518.0], [67.4, 519.0], [67.5, 519.0], [67.6, 519.0], [67.7, 520.0], [67.8, 523.0], [67.9, 524.0], [68.0, 524.0], [68.1, 525.0], [68.2, 525.0], [68.3, 526.0], [68.4, 526.0], [68.5, 527.0], [68.6, 527.0], [68.7, 527.0], [68.8, 527.0], [68.9, 528.0], [69.0, 528.0], [69.1, 528.0], [69.2, 528.0], [69.3, 529.0], [69.4, 529.0], [69.5, 529.0], [69.6, 530.0], [69.7, 530.0], [69.8, 531.0], [69.9, 531.0], [70.0, 531.0], [70.1, 531.0], [70.2, 531.0], [70.3, 531.0], [70.4, 532.0], [70.5, 532.0], [70.6, 532.0], [70.7, 532.0], [70.8, 534.0], [70.9, 534.0], [71.0, 534.0], [71.1, 534.0], [71.2, 536.0], [71.3, 536.0], [71.4, 536.0], [71.5, 537.0], [71.6, 537.0], [71.7, 537.0], [71.8, 538.0], [71.9, 539.0], [72.0, 539.0], [72.1, 539.0], [72.2, 540.0], [72.3, 541.0], [72.4, 542.0], [72.5, 542.0], [72.6, 542.0], [72.7, 542.0], [72.8, 543.0], [72.9, 543.0], [73.0, 543.0], [73.1, 543.0], [73.2, 544.0], [73.3, 544.0], [73.4, 544.0], [73.5, 544.0], [73.6, 544.0], [73.7, 545.0], [73.8, 545.0], [73.9, 545.0], [74.0, 545.0], [74.1, 546.0], [74.2, 546.0], [74.3, 546.0], [74.4, 546.0], [74.5, 553.0], [74.6, 554.0], [74.7, 554.0], [74.8, 554.0], [74.9, 556.0], [75.0, 556.0], [75.1, 556.0], [75.2, 557.0], [75.3, 558.0], [75.4, 558.0], [75.5, 558.0], [75.6, 558.0], [75.7, 559.0], [75.8, 560.0], [75.9, 560.0], [76.0, 562.0], [76.1, 564.0], [76.2, 564.0], [76.3, 564.0], [76.4, 565.0], [76.5, 565.0], [76.6, 565.0], [76.7, 565.0], [76.8, 566.0], [76.9, 566.0], [77.0, 566.0], [77.1, 567.0], [77.2, 569.0], [77.3, 569.0], [77.4, 569.0], [77.5, 570.0], [77.6, 574.0], [77.7, 576.0], [77.8, 576.0], [77.9, 577.0], [78.0, 577.0], [78.1, 579.0], [78.2, 579.0], [78.3, 579.0], [78.4, 580.0], [78.5, 580.0], [78.6, 581.0], [78.7, 582.0], [78.8, 582.0], [78.9, 582.0], [79.0, 582.0], [79.1, 584.0], [79.2, 585.0], [79.3, 585.0], [79.4, 585.0], [79.5, 586.0], [79.6, 590.0], [79.7, 590.0], [79.8, 592.0], [79.9, 592.0], [80.0, 595.0], [80.1, 595.0], [80.2, 597.0], [80.3, 598.0], [80.4, 598.0], [80.5, 601.0], [80.6, 603.0], [80.7, 606.0], [80.8, 606.0], [80.9, 606.0], [81.0, 608.0], [81.1, 611.0], [81.2, 611.0], [81.3, 612.0], [81.4, 613.0], [81.5, 615.0], [81.6, 615.0], [81.7, 615.0], [81.8, 615.0], [81.9, 615.0], [82.0, 616.0], [82.1, 616.0], [82.2, 618.0], [82.3, 618.0], [82.4, 618.0], [82.5, 620.0], [82.6, 620.0], [82.7, 620.0], [82.8, 621.0], [82.9, 623.0], [83.0, 624.0], [83.1, 624.0], [83.2, 626.0], [83.3, 626.0], [83.4, 626.0], [83.5, 627.0], [83.6, 628.0], [83.7, 628.0], [83.8, 628.0], [83.9, 631.0], [84.0, 632.0], [84.1, 632.0], [84.2, 632.0], [84.3, 632.0], [84.4, 633.0], [84.5, 634.0], [84.6, 634.0], [84.7, 636.0], [84.8, 636.0], [84.9, 637.0], [85.0, 637.0], [85.1, 638.0], [85.2, 638.0], [85.3, 638.0], [85.4, 642.0], [85.5, 643.0], [85.6, 645.0], [85.7, 645.0], [85.8, 646.0], [85.9, 647.0], [86.0, 647.0], [86.1, 647.0], [86.2, 649.0], [86.3, 649.0], [86.4, 650.0], [86.5, 650.0], [86.6, 650.0], [86.7, 651.0], [86.8, 651.0], [86.9, 653.0], [87.0, 655.0], [87.1, 658.0], [87.2, 658.0], [87.3, 663.0], [87.4, 663.0], [87.5, 664.0], [87.6, 664.0], [87.7, 665.0], [87.8, 667.0], [87.9, 668.0], [88.0, 668.0], [88.1, 668.0], [88.2, 670.0], [88.3, 671.0], [88.4, 671.0], [88.5, 674.0], [88.6, 683.0], [88.7, 683.0], [88.8, 683.0], [88.9, 686.0], [89.0, 692.0], [89.1, 692.0], [89.2, 694.0], [89.3, 695.0], [89.4, 701.0], [89.5, 701.0], [89.6, 702.0], [89.7, 706.0], [89.8, 706.0], [89.9, 706.0], [90.0, 707.0], [90.1, 707.0], [90.2, 707.0], [90.3, 708.0], [90.4, 711.0], [90.5, 713.0], [90.6, 713.0], [90.7, 716.0], [90.8, 716.0], [90.9, 716.0], [91.0, 716.0], [91.1, 717.0], [91.2, 717.0], [91.3, 719.0], [91.4, 719.0], [91.5, 719.0], [91.6, 719.0], [91.7, 719.0], [91.8, 720.0], [91.9, 721.0], [92.0, 725.0], [92.1, 725.0], [92.2, 727.0], [92.3, 727.0], [92.4, 727.0], [92.5, 727.0], [92.6, 728.0], [92.7, 737.0], [92.8, 739.0], [92.9, 739.0], [93.0, 744.0], [93.1, 744.0], [93.2, 745.0], [93.3, 745.0], [93.4, 751.0], [93.5, 764.0], [93.6, 764.0], [93.7, 780.0], [93.8, 798.0], [93.9, 803.0], [94.0, 803.0], [94.1, 810.0], [94.2, 812.0], [94.3, 814.0], [94.4, 814.0], [94.5, 818.0], [94.6, 823.0], [94.7, 827.0], [94.8, 827.0], [94.9, 829.0], [95.0, 841.0], [95.1, 841.0], [95.2, 842.0], [95.3, 853.0], [95.4, 882.0], [95.5, 882.0], [95.6, 884.0], [95.7, 891.0], [95.8, 914.0], [95.9, 914.0], [96.0, 916.0], [96.1, 926.0], [96.2, 938.0], [96.3, 938.0], [96.4, 942.0], [96.5, 952.0], [96.6, 955.0], [96.7, 955.0], [96.8, 960.0], [96.9, 964.0], [97.0, 964.0], [97.1, 972.0], [97.2, 1032.0], [97.3, 1038.0], [97.4, 1038.0], [97.5, 1050.0], [97.6, 1069.0], [97.7, 1071.0], [97.8, 1071.0], [97.9, 1072.0], [98.0, 1081.0], [98.1, 1140.0], [98.2, 1140.0], [98.3, 1162.0], [98.4, 1162.0], [98.5, 1162.0], [98.6, 1202.0], [98.7, 1247.0], [98.8, 1382.0], [98.9, 1382.0], [99.0, 1555.0], [99.1, 1637.0], [99.2, 1667.0], [99.3, 1667.0], [99.4, 2350.0], [99.5, 2709.0], [99.6, 2722.0], [99.7, 2722.0], [99.8, 2794.0], [99.9, 2847.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 178.0, "series": [{"data": [[2300.0, 1.0], [600.0, 66.0], [2700.0, 3.0], [700.0, 33.0], [2800.0, 1.0], [200.0, 178.0], [800.0, 14.0], [900.0, 10.0], [1000.0, 7.0], [1100.0, 3.0], [300.0, 176.0], [1200.0, 2.0], [1300.0, 1.0], [1500.0, 1.0], [400.0, 102.0], [100.0, 20.0], [1600.0, 2.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 477.0, "series": [{"data": [[0.0, 477.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 250.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6040145E12, "maxY": 1.0, "series": [{"data": [[1.60401468E12, 1.0], [1.60401486E12, 1.0], [1.6040148E12, 1.0], [1.6040145E12, 1.0], [1.60401462E12, 1.0], [1.60401456E12, 1.0], [1.60401474E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401486E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 466.0666666666667, "minX": 1.0, "maxY": 466.0666666666667, "series": [{"data": [[1.0, 466.0666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 466.0666666666667]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 105.93333333333334, "minX": 1.6040145E12, "maxY": 393228.5833333333, "series": [{"data": [[1.60401468E12, 339565.01666666666], [1.60401486E12, 199010.18333333332], [1.6040148E12, 264014.95], [1.6040145E12, 61193.333333333336], [1.60401462E12, 268186.86666666664], [1.60401456E12, 393228.5833333333], [1.60401474E12, 310565.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401468E12, 1170.5833333333333], [1.60401486E12, 582.7], [1.6040148E12, 1005.3166666666667], [1.6040145E12, 105.93333333333334], [1.60401462E12, 861.5333333333333], [1.60401456E12, 893.7166666666667], [1.60401474E12, 903.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401486E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 378.5696202531647, "minX": 1.6040145E12, "maxY": 548.6428571428571, "series": [{"data": [[1.60401468E12, 378.5696202531647], [1.60401486E12, 421.9240506329114], [1.6040148E12, 450.9398496240601], [1.6040145E12, 548.6428571428571], [1.60401462E12, 526.421052631579], [1.60401456E12, 527.5338983050846], [1.60401474E12, 499.9663865546219]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401486E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 377.6075949367089, "minX": 1.6040145E12, "maxY": 547.2142857142858, "series": [{"data": [[1.60401468E12, 377.6075949367089], [1.60401486E12, 420.7468354430379], [1.6040148E12, 450.0827067669174], [1.6040145E12, 547.2142857142858], [1.60401462E12, 524.9385964912278], [1.60401456E12, 526.4067796610171], [1.60401474E12, 498.7899159663864]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401486E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015037593984962409, "minX": 1.6040145E12, "maxY": 2.4285714285714284, "series": [{"data": [[1.60401468E12, 0.02531645569620253], [1.60401486E12, 0.025316455696202535], [1.6040148E12, 0.015037593984962409], [1.6040145E12, 2.4285714285714284], [1.60401462E12, 0.01754385964912281], [1.60401456E12, 0.01694915254237288], [1.60401474E12, 0.016806722689075626]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401486E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 170.0, "minX": 1.6040145E12, "maxY": 2847.0, "series": [{"data": [[1.60401468E12, 2722.0], [1.60401486E12, 1637.0], [1.6040148E12, 884.0], [1.6040145E12, 2709.0], [1.60401462E12, 2350.0], [1.60401456E12, 2847.0], [1.60401474E12, 1162.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401468E12, 173.0169997346401], [1.60401486E12, 194.0], [1.6040148E12, 265.2059999680519], [1.6040145E12, 203.0], [1.60401462E12, 362.24499980807303], [1.60401456E12, 189.0], [1.60401474E12, 196.5599997997284]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401468E12, 174.01870010614394], [1.60401486E12, 194.0], [1.6040148E12, 265.32660001277924], [1.6040145E12, 203.0], [1.60401462E12, 362.96950007677077], [1.60401456E12, 189.0], [1.60401474E12, 197.31600008010864]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401468E12, 173.57349986732007], [1.60401486E12, 194.0], [1.6040148E12, 265.27299998402594], [1.6040145E12, 203.0], [1.60401462E12, 362.6474999040365], [1.60401456E12, 189.0], [1.60401474E12, 196.9799998998642]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401468E12, 170.0], [1.60401486E12, 194.0], [1.6040148E12, 265.0], [1.6040145E12, 203.0], [1.60401462E12, 362.0], [1.60401456E12, 189.0], [1.60401474E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401468E12, 293.0], [1.60401486E12, 280.0], [1.6040148E12, 398.0], [1.6040145E12, 462.0], [1.60401462E12, 519.0], [1.60401456E12, 396.0], [1.60401474E12, 441.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 195.0, "minX": 1.0, "maxY": 632.0, "series": [{"data": [[2.0, 496.5], [1.0, 632.0], [4.0, 276.5], [5.0, 195.0], [3.0, 349.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 195.0, "minX": 1.0, "maxY": 631.0, "series": [{"data": [[2.0, 495.5], [1.0, 631.0], [4.0, 276.5], [5.0, 195.0], [3.0, 348.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.6040145E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.60401468E12, 2.6333333333333333], [1.60401486E12, 1.3], [1.6040148E12, 2.216666666666667], [1.6040145E12, 0.25], [1.60401462E12, 1.9], [1.60401456E12, 1.9666666666666666], [1.60401474E12, 1.9833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401486E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6040145E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.60401468E12, 2.6333333333333333], [1.60401486E12, 1.3166666666666667], [1.6040148E12, 2.216666666666667], [1.6040145E12, 0.23333333333333334], [1.60401462E12, 1.9], [1.60401456E12, 1.9666666666666666], [1.60401474E12, 1.9833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401486E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6040145E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.60401468E12, 2.6333333333333333], [1.60401486E12, 1.3166666666666667], [1.6040148E12, 2.216666666666667], [1.6040145E12, 0.23333333333333334], [1.60401462E12, 1.9], [1.60401456E12, 1.9666666666666666], [1.60401474E12, 1.9833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401486E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.6040145E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.60401468E12, 2.6333333333333333], [1.60401486E12, 1.3166666666666667], [1.6040148E12, 2.216666666666667], [1.6040145E12, 0.23333333333333334], [1.60401462E12, 1.9], [1.60401456E12, 1.9666666666666666], [1.60401474E12, 1.9833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401486E12, "title": "Total Transactions Per Second"}},
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

