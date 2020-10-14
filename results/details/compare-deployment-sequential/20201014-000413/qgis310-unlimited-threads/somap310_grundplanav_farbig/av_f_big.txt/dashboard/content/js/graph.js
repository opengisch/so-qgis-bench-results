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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 2851.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 177.0], [0.3, 179.0], [0.4, 179.0], [0.5, 186.0], [0.6, 187.0], [0.7, 188.0], [0.8, 188.0], [0.9, 190.0], [1.0, 191.0], [1.1, 193.0], [1.2, 193.0], [1.3, 194.0], [1.4, 195.0], [1.5, 196.0], [1.6, 196.0], [1.7, 197.0], [1.8, 198.0], [1.9, 198.0], [2.0, 198.0], [2.1, 199.0], [2.2, 199.0], [2.3, 199.0], [2.4, 199.0], [2.5, 200.0], [2.6, 202.0], [2.7, 202.0], [2.8, 202.0], [2.9, 202.0], [3.0, 204.0], [3.1, 204.0], [3.2, 204.0], [3.3, 205.0], [3.4, 205.0], [3.5, 205.0], [3.6, 206.0], [3.7, 206.0], [3.8, 206.0], [3.9, 206.0], [4.0, 206.0], [4.1, 208.0], [4.2, 208.0], [4.3, 209.0], [4.4, 211.0], [4.5, 211.0], [4.6, 211.0], [4.7, 211.0], [4.8, 212.0], [4.9, 214.0], [5.0, 214.0], [5.1, 214.0], [5.2, 215.0], [5.3, 215.0], [5.4, 216.0], [5.5, 218.0], [5.6, 219.0], [5.7, 219.0], [5.8, 221.0], [5.9, 222.0], [6.0, 224.0], [6.1, 224.0], [6.2, 228.0], [6.3, 228.0], [6.4, 229.0], [6.5, 229.0], [6.6, 229.0], [6.7, 230.0], [6.8, 230.0], [6.9, 230.0], [7.0, 231.0], [7.1, 232.0], [7.2, 232.0], [7.3, 232.0], [7.4, 232.0], [7.5, 234.0], [7.6, 234.0], [7.7, 236.0], [7.8, 236.0], [7.9, 237.0], [8.0, 237.0], [8.1, 237.0], [8.2, 238.0], [8.3, 239.0], [8.4, 239.0], [8.5, 239.0], [8.6, 240.0], [8.7, 240.0], [8.8, 241.0], [8.9, 242.0], [9.0, 244.0], [9.1, 244.0], [9.2, 244.0], [9.3, 245.0], [9.4, 245.0], [9.5, 245.0], [9.6, 246.0], [9.7, 246.0], [9.8, 246.0], [9.9, 246.0], [10.0, 247.0], [10.1, 248.0], [10.2, 248.0], [10.3, 249.0], [10.4, 250.0], [10.5, 250.0], [10.6, 250.0], [10.7, 252.0], [10.8, 253.0], [10.9, 255.0], [11.0, 255.0], [11.1, 255.0], [11.2, 255.0], [11.3, 256.0], [11.4, 256.0], [11.5, 256.0], [11.6, 257.0], [11.7, 257.0], [11.8, 258.0], [11.9, 259.0], [12.0, 259.0], [12.1, 259.0], [12.2, 259.0], [12.3, 259.0], [12.4, 260.0], [12.5, 260.0], [12.6, 260.0], [12.7, 260.0], [12.8, 260.0], [12.9, 260.0], [13.0, 260.0], [13.1, 260.0], [13.2, 260.0], [13.3, 260.0], [13.4, 260.0], [13.5, 261.0], [13.6, 261.0], [13.7, 261.0], [13.8, 261.0], [13.9, 261.0], [14.0, 261.0], [14.1, 262.0], [14.2, 262.0], [14.3, 262.0], [14.4, 262.0], [14.5, 264.0], [14.6, 264.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 265.0], [15.1, 265.0], [15.2, 265.0], [15.3, 266.0], [15.4, 266.0], [15.5, 266.0], [15.6, 266.0], [15.7, 267.0], [15.8, 267.0], [15.9, 267.0], [16.0, 267.0], [16.1, 267.0], [16.2, 267.0], [16.3, 267.0], [16.4, 267.0], [16.5, 268.0], [16.6, 268.0], [16.7, 268.0], [16.8, 269.0], [16.9, 269.0], [17.0, 269.0], [17.1, 269.0], [17.2, 269.0], [17.3, 270.0], [17.4, 270.0], [17.5, 270.0], [17.6, 270.0], [17.7, 270.0], [17.8, 270.0], [17.9, 270.0], [18.0, 271.0], [18.1, 271.0], [18.2, 271.0], [18.3, 271.0], [18.4, 271.0], [18.5, 271.0], [18.6, 271.0], [18.7, 272.0], [18.8, 272.0], [18.9, 272.0], [19.0, 273.0], [19.1, 273.0], [19.2, 273.0], [19.3, 273.0], [19.4, 273.0], [19.5, 273.0], [19.6, 274.0], [19.7, 274.0], [19.8, 275.0], [19.9, 275.0], [20.0, 275.0], [20.1, 275.0], [20.2, 276.0], [20.3, 276.0], [20.4, 276.0], [20.5, 276.0], [20.6, 276.0], [20.7, 276.0], [20.8, 276.0], [20.9, 277.0], [21.0, 277.0], [21.1, 278.0], [21.2, 278.0], [21.3, 278.0], [21.4, 278.0], [21.5, 279.0], [21.6, 279.0], [21.7, 279.0], [21.8, 280.0], [21.9, 280.0], [22.0, 280.0], [22.1, 280.0], [22.2, 280.0], [22.3, 280.0], [22.4, 280.0], [22.5, 280.0], [22.6, 280.0], [22.7, 280.0], [22.8, 281.0], [22.9, 282.0], [23.0, 282.0], [23.1, 282.0], [23.2, 282.0], [23.3, 283.0], [23.4, 283.0], [23.5, 283.0], [23.6, 283.0], [23.7, 283.0], [23.8, 283.0], [23.9, 283.0], [24.0, 284.0], [24.1, 284.0], [24.2, 284.0], [24.3, 285.0], [24.4, 285.0], [24.5, 286.0], [24.6, 286.0], [24.7, 287.0], [24.8, 287.0], [24.9, 287.0], [25.0, 287.0], [25.1, 287.0], [25.2, 287.0], [25.3, 287.0], [25.4, 287.0], [25.5, 287.0], [25.6, 289.0], [25.7, 289.0], [25.8, 290.0], [25.9, 291.0], [26.0, 291.0], [26.1, 291.0], [26.2, 294.0], [26.3, 294.0], [26.4, 295.0], [26.5, 295.0], [26.6, 295.0], [26.7, 296.0], [26.8, 296.0], [26.9, 296.0], [27.0, 298.0], [27.1, 298.0], [27.2, 298.0], [27.3, 299.0], [27.4, 300.0], [27.5, 303.0], [27.6, 303.0], [27.7, 305.0], [27.8, 305.0], [27.9, 305.0], [28.0, 305.0], [28.1, 306.0], [28.2, 307.0], [28.3, 307.0], [28.4, 307.0], [28.5, 307.0], [28.6, 308.0], [28.7, 308.0], [28.8, 309.0], [28.9, 313.0], [29.0, 313.0], [29.1, 313.0], [29.2, 319.0], [29.3, 321.0], [29.4, 322.0], [29.5, 322.0], [29.6, 325.0], [29.7, 325.0], [29.8, 326.0], [29.9, 326.0], [30.0, 326.0], [30.1, 329.0], [30.2, 329.0], [30.3, 332.0], [30.4, 333.0], [30.5, 333.0], [30.6, 333.0], [30.7, 334.0], [30.8, 335.0], [30.9, 336.0], [31.0, 336.0], [31.1, 339.0], [31.2, 340.0], [31.3, 341.0], [31.4, 341.0], [31.5, 342.0], [31.6, 345.0], [31.7, 345.0], [31.8, 346.0], [31.9, 347.0], [32.0, 347.0], [32.1, 347.0], [32.2, 349.0], [32.3, 350.0], [32.4, 350.0], [32.5, 350.0], [32.6, 350.0], [32.7, 351.0], [32.8, 351.0], [32.9, 351.0], [33.0, 352.0], [33.1, 352.0], [33.2, 353.0], [33.3, 353.0], [33.4, 353.0], [33.5, 353.0], [33.6, 353.0], [33.7, 353.0], [33.8, 353.0], [33.9, 354.0], [34.0, 354.0], [34.1, 354.0], [34.2, 355.0], [34.3, 355.0], [34.4, 355.0], [34.5, 355.0], [34.6, 355.0], [34.7, 355.0], [34.8, 355.0], [34.9, 355.0], [35.0, 356.0], [35.1, 356.0], [35.2, 356.0], [35.3, 357.0], [35.4, 357.0], [35.5, 357.0], [35.6, 357.0], [35.7, 357.0], [35.8, 359.0], [35.9, 359.0], [36.0, 359.0], [36.1, 359.0], [36.2, 359.0], [36.3, 359.0], [36.4, 359.0], [36.5, 359.0], [36.6, 359.0], [36.7, 359.0], [36.8, 360.0], [36.9, 360.0], [37.0, 360.0], [37.1, 360.0], [37.2, 361.0], [37.3, 361.0], [37.4, 361.0], [37.5, 361.0], [37.6, 361.0], [37.7, 361.0], [37.8, 361.0], [37.9, 361.0], [38.0, 362.0], [38.1, 362.0], [38.2, 362.0], [38.3, 362.0], [38.4, 362.0], [38.5, 362.0], [38.6, 363.0], [38.7, 363.0], [38.8, 363.0], [38.9, 363.0], [39.0, 363.0], [39.1, 363.0], [39.2, 363.0], [39.3, 363.0], [39.4, 364.0], [39.5, 364.0], [39.6, 364.0], [39.7, 364.0], [39.8, 364.0], [39.9, 364.0], [40.0, 364.0], [40.1, 364.0], [40.2, 364.0], [40.3, 364.0], [40.4, 364.0], [40.5, 365.0], [40.6, 365.0], [40.7, 365.0], [40.8, 365.0], [40.9, 365.0], [41.0, 366.0], [41.1, 366.0], [41.2, 366.0], [41.3, 366.0], [41.4, 366.0], [41.5, 366.0], [41.6, 366.0], [41.7, 367.0], [41.8, 367.0], [41.9, 367.0], [42.0, 367.0], [42.1, 367.0], [42.2, 367.0], [42.3, 367.0], [42.4, 367.0], [42.5, 367.0], [42.6, 368.0], [42.7, 368.0], [42.8, 368.0], [42.9, 368.0], [43.0, 368.0], [43.1, 368.0], [43.2, 369.0], [43.3, 369.0], [43.4, 369.0], [43.5, 369.0], [43.6, 369.0], [43.7, 369.0], [43.8, 369.0], [43.9, 369.0], [44.0, 370.0], [44.1, 370.0], [44.2, 370.0], [44.3, 370.0], [44.4, 370.0], [44.5, 370.0], [44.6, 370.0], [44.7, 370.0], [44.8, 370.0], [44.9, 371.0], [45.0, 371.0], [45.1, 371.0], [45.2, 371.0], [45.3, 371.0], [45.4, 371.0], [45.5, 371.0], [45.6, 371.0], [45.7, 371.0], [45.8, 371.0], [45.9, 372.0], [46.0, 372.0], [46.1, 372.0], [46.2, 372.0], [46.3, 372.0], [46.4, 372.0], [46.5, 372.0], [46.6, 373.0], [46.7, 373.0], [46.8, 373.0], [46.9, 373.0], [47.0, 373.0], [47.1, 373.0], [47.2, 373.0], [47.3, 374.0], [47.4, 374.0], [47.5, 375.0], [47.6, 375.0], [47.7, 375.0], [47.8, 375.0], [47.9, 375.0], [48.0, 375.0], [48.1, 376.0], [48.2, 376.0], [48.3, 377.0], [48.4, 377.0], [48.5, 377.0], [48.6, 377.0], [48.7, 377.0], [48.8, 378.0], [48.9, 378.0], [49.0, 378.0], [49.1, 378.0], [49.2, 379.0], [49.3, 379.0], [49.4, 379.0], [49.5, 379.0], [49.6, 379.0], [49.7, 380.0], [49.8, 380.0], [49.9, 380.0], [50.0, 380.0], [50.1, 380.0], [50.2, 380.0], [50.3, 380.0], [50.4, 380.0], [50.5, 382.0], [50.6, 382.0], [50.7, 382.0], [50.8, 382.0], [50.9, 382.0], [51.0, 382.0], [51.1, 382.0], [51.2, 383.0], [51.3, 383.0], [51.4, 383.0], [51.5, 384.0], [51.6, 384.0], [51.7, 384.0], [51.8, 384.0], [51.9, 385.0], [52.0, 385.0], [52.1, 385.0], [52.2, 385.0], [52.3, 385.0], [52.4, 386.0], [52.5, 386.0], [52.6, 386.0], [52.7, 387.0], [52.8, 388.0], [52.9, 388.0], [53.0, 389.0], [53.1, 391.0], [53.2, 392.0], [53.3, 392.0], [53.4, 393.0], [53.5, 393.0], [53.6, 393.0], [53.7, 395.0], [53.8, 395.0], [53.9, 395.0], [54.0, 395.0], [54.1, 397.0], [54.2, 399.0], [54.3, 399.0], [54.4, 399.0], [54.5, 399.0], [54.6, 404.0], [54.7, 404.0], [54.8, 404.0], [54.9, 405.0], [55.0, 405.0], [55.1, 405.0], [55.2, 408.0], [55.3, 417.0], [55.4, 420.0], [55.5, 420.0], [55.6, 421.0], [55.7, 421.0], [55.8, 422.0], [55.9, 422.0], [56.0, 422.0], [56.1, 424.0], [56.2, 424.0], [56.3, 424.0], [56.4, 424.0], [56.5, 424.0], [56.6, 425.0], [56.7, 425.0], [56.8, 425.0], [56.9, 425.0], [57.0, 425.0], [57.1, 426.0], [57.2, 428.0], [57.3, 429.0], [57.4, 429.0], [57.5, 430.0], [57.6, 430.0], [57.7, 430.0], [57.8, 430.0], [57.9, 430.0], [58.0, 433.0], [58.1, 433.0], [58.2, 433.0], [58.3, 433.0], [58.4, 433.0], [58.5, 433.0], [58.6, 433.0], [58.7, 434.0], [58.8, 434.0], [58.9, 434.0], [59.0, 435.0], [59.1, 436.0], [59.2, 436.0], [59.3, 436.0], [59.4, 436.0], [59.5, 436.0], [59.6, 437.0], [59.7, 437.0], [59.8, 437.0], [59.9, 438.0], [60.0, 441.0], [60.1, 441.0], [60.2, 441.0], [60.3, 441.0], [60.4, 441.0], [60.5, 441.0], [60.6, 442.0], [60.7, 442.0], [60.8, 442.0], [60.9, 445.0], [61.0, 445.0], [61.1, 446.0], [61.2, 446.0], [61.3, 447.0], [61.4, 449.0], [61.5, 449.0], [61.6, 449.0], [61.7, 450.0], [61.8, 450.0], [61.9, 450.0], [62.0, 451.0], [62.1, 452.0], [62.2, 455.0], [62.3, 455.0], [62.4, 458.0], [62.5, 458.0], [62.6, 461.0], [62.7, 461.0], [62.8, 463.0], [62.9, 463.0], [63.0, 465.0], [63.1, 465.0], [63.2, 465.0], [63.3, 468.0], [63.4, 468.0], [63.5, 469.0], [63.6, 471.0], [63.7, 473.0], [63.8, 473.0], [63.9, 474.0], [64.0, 476.0], [64.1, 476.0], [64.2, 476.0], [64.3, 477.0], [64.4, 477.0], [64.5, 479.0], [64.6, 479.0], [64.7, 479.0], [64.8, 480.0], [64.9, 483.0], [65.0, 483.0], [65.1, 484.0], [65.2, 489.0], [65.3, 489.0], [65.4, 489.0], [65.5, 491.0], [65.6, 493.0], [65.7, 493.0], [65.8, 493.0], [65.9, 494.0], [66.0, 497.0], [66.1, 497.0], [66.2, 498.0], [66.3, 499.0], [66.4, 499.0], [66.5, 499.0], [66.6, 503.0], [66.7, 505.0], [66.8, 505.0], [66.9, 505.0], [67.0, 506.0], [67.1, 508.0], [67.2, 508.0], [67.3, 509.0], [67.4, 510.0], [67.5, 511.0], [67.6, 511.0], [67.7, 512.0], [67.8, 512.0], [67.9, 512.0], [68.0, 512.0], [68.1, 513.0], [68.2, 514.0], [68.3, 515.0], [68.4, 515.0], [68.5, 516.0], [68.6, 516.0], [68.7, 516.0], [68.8, 517.0], [68.9, 517.0], [69.0, 517.0], [69.1, 517.0], [69.2, 518.0], [69.3, 519.0], [69.4, 520.0], [69.5, 520.0], [69.6, 521.0], [69.7, 521.0], [69.8, 521.0], [69.9, 521.0], [70.0, 521.0], [70.1, 521.0], [70.2, 521.0], [70.3, 522.0], [70.4, 522.0], [70.5, 523.0], [70.6, 523.0], [70.7, 523.0], [70.8, 524.0], [70.9, 525.0], [71.0, 525.0], [71.1, 525.0], [71.2, 526.0], [71.3, 526.0], [71.4, 526.0], [71.5, 526.0], [71.6, 527.0], [71.7, 527.0], [71.8, 527.0], [71.9, 529.0], [72.0, 529.0], [72.1, 529.0], [72.2, 530.0], [72.3, 530.0], [72.4, 530.0], [72.5, 530.0], [72.6, 531.0], [72.7, 532.0], [72.8, 532.0], [72.9, 532.0], [73.0, 534.0], [73.1, 534.0], [73.2, 535.0], [73.3, 535.0], [73.4, 535.0], [73.5, 537.0], [73.6, 537.0], [73.7, 538.0], [73.8, 538.0], [73.9, 539.0], [74.0, 539.0], [74.1, 541.0], [74.2, 542.0], [74.3, 543.0], [74.4, 543.0], [74.5, 543.0], [74.6, 544.0], [74.7, 544.0], [74.8, 544.0], [74.9, 544.0], [75.0, 546.0], [75.1, 546.0], [75.2, 547.0], [75.3, 547.0], [75.4, 547.0], [75.5, 547.0], [75.6, 547.0], [75.7, 548.0], [75.8, 548.0], [75.9, 548.0], [76.0, 550.0], [76.1, 551.0], [76.2, 552.0], [76.3, 552.0], [76.4, 553.0], [76.5, 554.0], [76.6, 554.0], [76.7, 554.0], [76.8, 555.0], [76.9, 555.0], [77.0, 555.0], [77.1, 556.0], [77.2, 558.0], [77.3, 558.0], [77.4, 558.0], [77.5, 558.0], [77.6, 563.0], [77.7, 565.0], [77.8, 565.0], [77.9, 566.0], [78.0, 566.0], [78.1, 567.0], [78.2, 567.0], [78.3, 570.0], [78.4, 571.0], [78.5, 571.0], [78.6, 572.0], [78.7, 572.0], [78.8, 575.0], [78.9, 575.0], [79.0, 575.0], [79.1, 577.0], [79.2, 577.0], [79.3, 577.0], [79.4, 577.0], [79.5, 579.0], [79.6, 581.0], [79.7, 581.0], [79.8, 583.0], [79.9, 583.0], [80.0, 585.0], [80.1, 585.0], [80.2, 585.0], [80.3, 586.0], [80.4, 586.0], [80.5, 586.0], [80.6, 587.0], [80.7, 592.0], [80.8, 592.0], [80.9, 593.0], [81.0, 597.0], [81.1, 597.0], [81.2, 597.0], [81.3, 600.0], [81.4, 601.0], [81.5, 601.0], [81.6, 601.0], [81.7, 602.0], [81.8, 603.0], [81.9, 603.0], [82.0, 604.0], [82.1, 607.0], [82.2, 608.0], [82.3, 608.0], [82.4, 609.0], [82.5, 611.0], [82.6, 611.0], [82.7, 611.0], [82.8, 613.0], [82.9, 613.0], [83.0, 618.0], [83.1, 618.0], [83.2, 620.0], [83.3, 621.0], [83.4, 621.0], [83.5, 621.0], [83.6, 621.0], [83.7, 622.0], [83.8, 622.0], [83.9, 623.0], [84.0, 625.0], [84.1, 630.0], [84.2, 630.0], [84.3, 631.0], [84.4, 632.0], [84.5, 632.0], [84.6, 632.0], [84.7, 632.0], [84.8, 633.0], [84.9, 635.0], [85.0, 635.0], [85.1, 635.0], [85.2, 635.0], [85.3, 635.0], [85.4, 635.0], [85.5, 638.0], [85.6, 638.0], [85.7, 638.0], [85.8, 638.0], [85.9, 641.0], [86.0, 641.0], [86.1, 641.0], [86.2, 642.0], [86.3, 643.0], [86.4, 644.0], [86.5, 644.0], [86.6, 644.0], [86.7, 645.0], [86.8, 645.0], [86.9, 647.0], [87.0, 647.0], [87.1, 647.0], [87.2, 647.0], [87.3, 648.0], [87.4, 648.0], [87.5, 649.0], [87.6, 649.0], [87.7, 651.0], [87.8, 652.0], [87.9, 655.0], [88.0, 655.0], [88.1, 656.0], [88.2, 657.0], [88.3, 660.0], [88.4, 660.0], [88.5, 663.0], [88.6, 671.0], [88.7, 671.0], [88.8, 671.0], [88.9, 672.0], [89.0, 675.0], [89.1, 675.0], [89.2, 676.0], [89.3, 678.0], [89.4, 679.0], [89.5, 679.0], [89.6, 685.0], [89.7, 685.0], [89.8, 685.0], [89.9, 685.0], [90.0, 687.0], [90.1, 692.0], [90.2, 692.0], [90.3, 692.0], [90.4, 694.0], [90.5, 694.0], [90.6, 694.0], [90.7, 694.0], [90.8, 694.0], [90.9, 695.0], [91.0, 695.0], [91.1, 695.0], [91.2, 696.0], [91.3, 696.0], [91.4, 696.0], [91.5, 704.0], [91.6, 704.0], [91.7, 704.0], [91.8, 709.0], [91.9, 711.0], [92.0, 711.0], [92.1, 711.0], [92.2, 712.0], [92.3, 715.0], [92.4, 715.0], [92.5, 715.0], [92.6, 720.0], [92.7, 726.0], [92.8, 731.0], [92.9, 731.0], [93.0, 731.0], [93.1, 740.0], [93.2, 755.0], [93.3, 755.0], [93.4, 763.0], [93.5, 766.0], [93.6, 766.0], [93.7, 780.0], [93.8, 783.0], [93.9, 787.0], [94.0, 787.0], [94.1, 790.0], [94.2, 790.0], [94.3, 798.0], [94.4, 798.0], [94.5, 798.0], [94.6, 806.0], [94.7, 819.0], [94.8, 819.0], [94.9, 823.0], [95.0, 832.0], [95.1, 832.0], [95.2, 832.0], [95.3, 836.0], [95.4, 845.0], [95.5, 845.0], [95.6, 846.0], [95.7, 863.0], [95.8, 863.0], [95.9, 863.0], [96.0, 890.0], [96.1, 897.0], [96.2, 912.0], [96.3, 912.0], [96.4, 916.0], [96.5, 917.0], [96.6, 926.0], [96.7, 926.0], [96.8, 930.0], [96.9, 944.0], [97.0, 944.0], [97.1, 957.0], [97.2, 960.0], [97.3, 968.0], [97.4, 968.0], [97.5, 972.0], [97.6, 1041.0], [97.7, 1048.0], [97.8, 1048.0], [97.9, 1115.0], [98.0, 1125.0], [98.1, 1141.0], [98.2, 1141.0], [98.3, 1190.0], [98.4, 1203.0], [98.5, 1203.0], [98.6, 1222.0], [98.7, 1245.0], [98.8, 1279.0], [98.9, 1279.0], [99.0, 1578.0], [99.1, 1636.0], [99.2, 1730.0], [99.3, 1730.0], [99.4, 2451.0], [99.5, 2666.0], [99.6, 2742.0], [99.7, 2742.0], [99.8, 2823.0], [99.9, 2851.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 200.0, "series": [{"data": [[600.0, 75.0], [2400.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [700.0, 23.0], [2700.0, 1.0], [200.0, 183.0], [800.0, 12.0], [900.0, 10.0], [1000.0, 2.0], [1100.0, 4.0], [1200.0, 4.0], [300.0, 200.0], [1500.0, 1.0], [100.0, 18.0], [400.0, 88.0], [1600.0, 1.0], [1700.0, 1.0], [500.0, 108.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 489.0, "series": [{"data": [[0.0, 489.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 238.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60263528E12, "maxY": 1.0, "series": [{"data": [[1.60263534E12, 1.0], [1.60263564E12, 1.0], [1.60263546E12, 1.0], [1.60263528E12, 1.0], [1.60263558E12, 1.0], [1.6026354E12, 1.0], [1.60263552E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263564E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 457.60544217687067, "minX": 1.0, "maxY": 457.60544217687067, "series": [{"data": [[1.0, 457.60544217687067]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 457.60544217687067]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 198.83333333333334, "minX": 1.60263528E12, "maxY": 387265.76666666666, "series": [{"data": [[1.60263534E12, 349878.45], [1.60263564E12, 49081.11666666667], [1.60263546E12, 387265.76666666666], [1.60263528E12, 195209.83333333334], [1.60263558E12, 305966.0833333333], [1.6026354E12, 261868.76666666666], [1.60263552E12, 286514.38333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263534E12, 835.3333333333334], [1.60263564E12, 198.83333333333334], [1.60263546E12, 1047.0666666666666], [1.60263528E12, 451.48333333333335], [1.60263558E12, 1048.2166666666667], [1.6026354E12, 1018.0833333333334], [1.60263552E12, 924.0166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263564E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 363.8928571428571, "minX": 1.60263528E12, "maxY": 540.4545454545453, "series": [{"data": [[1.60263534E12, 540.4545454545453], [1.60263564E12, 363.8928571428571], [1.60263546E12, 424.61702127659566], [1.60263528E12, 464.09999999999997], [1.60263558E12, 426.7410071942447], [1.6026354E12, 444.5333333333334], [1.60263552E12, 488.9754098360657]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263564E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 363.10714285714283, "minX": 1.60263528E12, "maxY": 538.9727272727275, "series": [{"data": [[1.60263534E12, 538.9727272727275], [1.60263564E12, 363.10714285714283], [1.60263546E12, 423.4113475177305], [1.60263528E12, 463.0166666666666], [1.60263558E12, 425.6834532374101], [1.6026354E12, 443.4814814814815], [1.60263552E12, 487.85245901639337]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263564E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263528E12, "maxY": 0.5166666666666664, "series": [{"data": [[1.60263534E12, 0.027272727272727275], [1.60263564E12, 0.0], [1.60263546E12, 0.014184397163120569], [1.60263528E12, 0.5166666666666664], [1.60263558E12, 0.028776978417266195], [1.6026354E12, 0.03703703703703704], [1.60263552E12, 0.016393442622950824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263564E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.60263528E12, "maxY": 2851.0, "series": [{"data": [[1.60263534E12, 2823.0], [1.60263564E12, 1245.0], [1.60263546E12, 2742.0], [1.60263528E12, 2851.0], [1.60263558E12, 1730.0], [1.6026354E12, 2451.0], [1.60263552E12, 957.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263534E12, 270.0], [1.60263564E12, 236.0], [1.60263546E12, 179.50199969530107], [1.60263528E12, 175.0], [1.60263558E12, 196.0799997329712], [1.6026354E12, 211.67199990272522], [1.60263552E12, 253.60499956011773]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263534E12, 270.5934000635147], [1.60263564E12, 236.0], [1.60263546E12, 180.6522001218796], [1.60263528E12, 175.0], [1.60263558E12, 197.08800010681153], [1.6026354E12, 212.0392000389099], [1.60263552E12, 255.26550017595292]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263534E12, 270.3269999206066], [1.60263564E12, 236.0], [1.60263546E12, 180.14099984765053], [1.60263528E12, 175.0], [1.60263558E12, 196.6399998664856], [1.6026354E12, 211.87599995136262], [1.60263552E12, 254.52749978005886]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263534E12, 270.0], [1.60263564E12, 236.0], [1.60263546E12, 177.0], [1.60263528E12, 175.0], [1.60263558E12, 194.0], [1.6026354E12, 211.0], [1.60263552E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263534E12, 459.0], [1.60263564E12, 267.0], [1.60263546E12, 334.0], [1.60263528E12, 349.5], [1.60263558E12, 364.0], [1.6026354E12, 393.0], [1.60263552E12, 449.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263564E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 232.0, "minX": 1.0, "maxY": 636.5, "series": [{"data": [[1.0, 636.5], [2.0, 505.0], [4.0, 269.5], [5.0, 232.0], [3.0, 360.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 232.0, "minX": 1.0, "maxY": 635.0, "series": [{"data": [[1.0, 635.0], [2.0, 504.0], [4.0, 269.0], [5.0, 232.0], [3.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60263528E12, "maxY": 2.35, "series": [{"data": [[1.60263534E12, 1.8333333333333333], [1.60263564E12, 0.45], [1.60263546E12, 2.35], [1.60263528E12, 1.0166666666666666], [1.60263558E12, 2.316666666666667], [1.6026354E12, 2.25], [1.60263552E12, 2.033333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263564E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60263528E12, "maxY": 2.35, "series": [{"data": [[1.60263534E12, 1.8333333333333333], [1.60263564E12, 0.4666666666666667], [1.60263546E12, 2.35], [1.60263528E12, 1.0], [1.60263558E12, 2.316666666666667], [1.6026354E12, 2.25], [1.60263552E12, 2.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263564E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60263528E12, "maxY": 2.35, "series": [{"data": [[1.60263534E12, 1.8333333333333333], [1.60263564E12, 0.4666666666666667], [1.60263546E12, 2.35], [1.60263528E12, 1.0], [1.60263558E12, 2.316666666666667], [1.6026354E12, 2.25], [1.60263552E12, 2.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263564E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60263528E12, "maxY": 2.35, "series": [{"data": [[1.60263534E12, 1.8333333333333333], [1.60263564E12, 0.4666666666666667], [1.60263546E12, 2.35], [1.60263528E12, 1.0], [1.60263558E12, 2.316666666666667], [1.6026354E12, 2.25], [1.60263552E12, 2.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263564E12, "title": "Total Transactions Per Second"}},
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

