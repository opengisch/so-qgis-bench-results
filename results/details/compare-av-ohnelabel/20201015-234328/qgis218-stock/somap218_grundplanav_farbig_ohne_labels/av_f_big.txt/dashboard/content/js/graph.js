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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 3378.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 179.0], [0.3, 181.0], [0.4, 181.0], [0.5, 182.0], [0.6, 183.0], [0.7, 183.0], [0.8, 183.0], [0.9, 184.0], [1.0, 185.0], [1.1, 185.0], [1.2, 185.0], [1.3, 187.0], [1.4, 189.0], [1.5, 190.0], [1.6, 190.0], [1.7, 192.0], [1.8, 195.0], [1.9, 195.0], [2.0, 199.0], [2.1, 203.0], [2.2, 206.0], [2.3, 206.0], [2.4, 207.0], [2.5, 208.0], [2.6, 208.0], [2.7, 208.0], [2.8, 209.0], [2.9, 209.0], [3.0, 210.0], [3.1, 210.0], [3.2, 211.0], [3.3, 212.0], [3.4, 212.0], [3.5, 213.0], [3.6, 216.0], [3.7, 216.0], [3.8, 216.0], [3.9, 222.0], [4.0, 225.0], [4.1, 232.0], [4.2, 232.0], [4.3, 236.0], [4.4, 238.0], [4.5, 244.0], [4.6, 244.0], [4.7, 246.0], [4.8, 253.0], [4.9, 253.0], [5.0, 253.0], [5.1, 255.0], [5.2, 256.0], [5.3, 256.0], [5.4, 257.0], [5.5, 258.0], [5.6, 259.0], [5.7, 259.0], [5.8, 262.0], [5.9, 267.0], [6.0, 268.0], [6.1, 268.0], [6.2, 269.0], [6.3, 269.0], [6.4, 272.0], [6.5, 272.0], [6.6, 273.0], [6.7, 274.0], [6.8, 274.0], [6.9, 275.0], [7.0, 275.0], [7.1, 277.0], [7.2, 277.0], [7.3, 280.0], [7.4, 281.0], [7.5, 283.0], [7.6, 283.0], [7.7, 283.0], [7.8, 283.0], [7.9, 284.0], [8.0, 284.0], [8.1, 284.0], [8.2, 284.0], [8.3, 285.0], [8.4, 285.0], [8.5, 286.0], [8.6, 287.0], [8.7, 287.0], [8.8, 288.0], [8.9, 296.0], [9.0, 297.0], [9.1, 297.0], [9.2, 298.0], [9.3, 299.0], [9.4, 299.0], [9.5, 299.0], [9.6, 302.0], [9.7, 303.0], [9.8, 305.0], [9.9, 305.0], [10.0, 307.0], [10.1, 310.0], [10.2, 310.0], [10.3, 310.0], [10.4, 313.0], [10.5, 313.0], [10.6, 313.0], [10.7, 314.0], [10.8, 314.0], [10.9, 315.0], [11.0, 315.0], [11.1, 316.0], [11.2, 318.0], [11.3, 319.0], [11.4, 319.0], [11.5, 320.0], [11.6, 320.0], [11.7, 320.0], [11.8, 321.0], [11.9, 321.0], [12.0, 322.0], [12.1, 322.0], [12.2, 326.0], [12.3, 327.0], [12.4, 328.0], [12.5, 328.0], [12.6, 328.0], [12.7, 328.0], [12.8, 329.0], [12.9, 329.0], [13.0, 329.0], [13.1, 331.0], [13.2, 331.0], [13.3, 331.0], [13.4, 331.0], [13.5, 332.0], [13.6, 332.0], [13.7, 332.0], [13.8, 332.0], [13.9, 332.0], [14.0, 332.0], [14.1, 332.0], [14.2, 333.0], [14.3, 334.0], [14.4, 334.0], [14.5, 334.0], [14.6, 334.0], [14.7, 334.0], [14.8, 334.0], [14.9, 335.0], [15.0, 335.0], [15.1, 335.0], [15.2, 335.0], [15.3, 336.0], [15.4, 336.0], [15.5, 336.0], [15.6, 336.0], [15.7, 337.0], [15.8, 338.0], [15.9, 338.0], [16.0, 338.0], [16.1, 338.0], [16.2, 338.0], [16.3, 338.0], [16.4, 339.0], [16.5, 339.0], [16.6, 340.0], [16.7, 340.0], [16.8, 340.0], [16.9, 340.0], [17.0, 340.0], [17.1, 341.0], [17.2, 341.0], [17.3, 341.0], [17.4, 341.0], [17.5, 343.0], [17.6, 343.0], [17.7, 344.0], [17.8, 344.0], [17.9, 344.0], [18.0, 344.0], [18.1, 345.0], [18.2, 345.0], [18.3, 346.0], [18.4, 347.0], [18.5, 347.0], [18.6, 348.0], [18.7, 350.0], [18.8, 350.0], [18.9, 350.0], [19.0, 350.0], [19.1, 350.0], [19.2, 351.0], [19.3, 351.0], [19.4, 351.0], [19.5, 351.0], [19.6, 351.0], [19.7, 351.0], [19.8, 352.0], [19.9, 352.0], [20.0, 353.0], [20.1, 353.0], [20.2, 355.0], [20.3, 356.0], [20.4, 356.0], [20.5, 356.0], [20.6, 356.0], [20.7, 358.0], [20.8, 358.0], [20.9, 358.0], [21.0, 358.0], [21.1, 358.0], [21.2, 358.0], [21.3, 358.0], [21.4, 358.0], [21.5, 359.0], [21.6, 359.0], [21.7, 359.0], [21.8, 359.0], [21.9, 359.0], [22.0, 361.0], [22.1, 361.0], [22.2, 362.0], [22.3, 362.0], [22.4, 362.0], [22.5, 362.0], [22.6, 363.0], [22.7, 363.0], [22.8, 364.0], [22.9, 365.0], [23.0, 365.0], [23.1, 365.0], [23.2, 366.0], [23.3, 366.0], [23.4, 366.0], [23.5, 367.0], [23.6, 367.0], [23.7, 368.0], [23.8, 368.0], [23.9, 368.0], [24.0, 368.0], [24.1, 368.0], [24.2, 368.0], [24.3, 370.0], [24.4, 370.0], [24.5, 370.0], [24.6, 370.0], [24.7, 371.0], [24.8, 372.0], [24.9, 372.0], [25.0, 372.0], [25.1, 372.0], [25.2, 373.0], [25.3, 373.0], [25.4, 373.0], [25.5, 373.0], [25.6, 373.0], [25.7, 373.0], [25.8, 373.0], [25.9, 373.0], [26.0, 374.0], [26.1, 374.0], [26.2, 374.0], [26.3, 375.0], [26.4, 376.0], [26.5, 376.0], [26.6, 376.0], [26.7, 376.0], [26.8, 376.0], [26.9, 377.0], [27.0, 377.0], [27.1, 377.0], [27.2, 377.0], [27.3, 377.0], [27.4, 378.0], [27.5, 378.0], [27.6, 378.0], [27.7, 378.0], [27.8, 378.0], [27.9, 379.0], [28.0, 379.0], [28.1, 379.0], [28.2, 380.0], [28.3, 381.0], [28.4, 381.0], [28.5, 382.0], [28.6, 382.0], [28.7, 382.0], [28.8, 382.0], [28.9, 383.0], [29.0, 383.0], [29.1, 383.0], [29.2, 383.0], [29.3, 384.0], [29.4, 384.0], [29.5, 384.0], [29.6, 384.0], [29.7, 384.0], [29.8, 387.0], [29.9, 387.0], [30.0, 388.0], [30.1, 389.0], [30.2, 389.0], [30.3, 390.0], [30.4, 391.0], [30.5, 391.0], [30.6, 391.0], [30.7, 391.0], [30.8, 391.0], [30.9, 391.0], [31.0, 391.0], [31.1, 392.0], [31.2, 393.0], [31.3, 393.0], [31.4, 393.0], [31.5, 394.0], [31.6, 394.0], [31.7, 394.0], [31.8, 394.0], [31.9, 395.0], [32.0, 395.0], [32.1, 395.0], [32.2, 395.0], [32.3, 395.0], [32.4, 395.0], [32.5, 395.0], [32.6, 396.0], [32.7, 397.0], [32.8, 397.0], [32.9, 397.0], [33.0, 397.0], [33.1, 398.0], [33.2, 398.0], [33.3, 398.0], [33.4, 399.0], [33.5, 400.0], [33.6, 400.0], [33.7, 401.0], [33.8, 401.0], [33.9, 402.0], [34.0, 402.0], [34.1, 403.0], [34.2, 403.0], [34.3, 403.0], [34.4, 403.0], [34.5, 404.0], [34.6, 404.0], [34.7, 405.0], [34.8, 405.0], [34.9, 405.0], [35.0, 406.0], [35.1, 406.0], [35.2, 406.0], [35.3, 406.0], [35.4, 407.0], [35.5, 407.0], [35.6, 407.0], [35.7, 408.0], [35.8, 408.0], [35.9, 408.0], [36.0, 408.0], [36.1, 408.0], [36.2, 409.0], [36.3, 409.0], [36.4, 409.0], [36.5, 410.0], [36.6, 411.0], [36.7, 411.0], [36.8, 411.0], [36.9, 413.0], [37.0, 413.0], [37.1, 414.0], [37.2, 414.0], [37.3, 414.0], [37.4, 414.0], [37.5, 414.0], [37.6, 415.0], [37.7, 415.0], [37.8, 415.0], [37.9, 415.0], [38.0, 415.0], [38.1, 416.0], [38.2, 416.0], [38.3, 416.0], [38.4, 418.0], [38.5, 418.0], [38.6, 418.0], [38.7, 418.0], [38.8, 418.0], [38.9, 418.0], [39.0, 418.0], [39.1, 418.0], [39.2, 419.0], [39.3, 419.0], [39.4, 419.0], [39.5, 420.0], [39.6, 421.0], [39.7, 421.0], [39.8, 422.0], [39.9, 422.0], [40.0, 422.0], [40.1, 422.0], [40.2, 423.0], [40.3, 423.0], [40.4, 423.0], [40.5, 424.0], [40.6, 424.0], [40.7, 426.0], [40.8, 426.0], [40.9, 427.0], [41.0, 427.0], [41.1, 428.0], [41.2, 428.0], [41.3, 429.0], [41.4, 430.0], [41.5, 430.0], [41.6, 430.0], [41.7, 430.0], [41.8, 432.0], [41.9, 432.0], [42.0, 432.0], [42.1, 432.0], [42.2, 433.0], [42.3, 433.0], [42.4, 434.0], [42.5, 434.0], [42.6, 435.0], [42.7, 435.0], [42.8, 435.0], [42.9, 435.0], [43.0, 436.0], [43.1, 436.0], [43.2, 436.0], [43.3, 437.0], [43.4, 437.0], [43.5, 437.0], [43.6, 439.0], [43.7, 439.0], [43.8, 439.0], [43.9, 440.0], [44.0, 441.0], [44.1, 441.0], [44.2, 441.0], [44.3, 441.0], [44.4, 441.0], [44.5, 441.0], [44.6, 441.0], [44.7, 441.0], [44.8, 441.0], [44.9, 442.0], [45.0, 442.0], [45.1, 443.0], [45.2, 443.0], [45.3, 443.0], [45.4, 443.0], [45.5, 444.0], [45.6, 444.0], [45.7, 444.0], [45.8, 444.0], [45.9, 445.0], [46.0, 446.0], [46.1, 446.0], [46.2, 446.0], [46.3, 447.0], [46.4, 447.0], [46.5, 447.0], [46.6, 451.0], [46.7, 451.0], [46.8, 451.0], [46.9, 451.0], [47.0, 452.0], [47.1, 452.0], [47.2, 452.0], [47.3, 453.0], [47.4, 453.0], [47.5, 453.0], [47.6, 453.0], [47.7, 453.0], [47.8, 453.0], [47.9, 454.0], [48.0, 454.0], [48.1, 454.0], [48.2, 455.0], [48.3, 455.0], [48.4, 455.0], [48.5, 456.0], [48.6, 456.0], [48.7, 456.0], [48.8, 458.0], [48.9, 458.0], [49.0, 458.0], [49.1, 458.0], [49.2, 458.0], [49.3, 459.0], [49.4, 459.0], [49.5, 459.0], [49.6, 459.0], [49.7, 460.0], [49.8, 461.0], [49.9, 461.0], [50.0, 462.0], [50.1, 463.0], [50.2, 463.0], [50.3, 463.0], [50.4, 465.0], [50.5, 465.0], [50.6, 465.0], [50.7, 465.0], [50.8, 467.0], [50.9, 467.0], [51.0, 467.0], [51.1, 467.0], [51.2, 467.0], [51.3, 468.0], [51.4, 468.0], [51.5, 468.0], [51.6, 468.0], [51.7, 468.0], [51.8, 469.0], [51.9, 470.0], [52.0, 470.0], [52.1, 470.0], [52.2, 471.0], [52.3, 471.0], [52.4, 472.0], [52.5, 472.0], [52.6, 473.0], [52.7, 473.0], [52.8, 474.0], [52.9, 474.0], [53.0, 474.0], [53.1, 475.0], [53.2, 475.0], [53.3, 475.0], [53.4, 476.0], [53.5, 477.0], [53.6, 477.0], [53.7, 477.0], [53.8, 478.0], [53.9, 478.0], [54.0, 478.0], [54.1, 480.0], [54.2, 480.0], [54.3, 480.0], [54.4, 480.0], [54.5, 481.0], [54.6, 481.0], [54.7, 481.0], [54.8, 481.0], [54.9, 482.0], [55.0, 482.0], [55.1, 482.0], [55.2, 483.0], [55.3, 483.0], [55.4, 483.0], [55.5, 483.0], [55.6, 485.0], [55.7, 486.0], [55.8, 486.0], [55.9, 486.0], [56.0, 487.0], [56.1, 487.0], [56.2, 487.0], [56.3, 487.0], [56.4, 488.0], [56.5, 488.0], [56.6, 488.0], [56.7, 488.0], [56.8, 489.0], [56.9, 489.0], [57.0, 489.0], [57.1, 489.0], [57.2, 489.0], [57.3, 490.0], [57.4, 490.0], [57.5, 490.0], [57.6, 491.0], [57.7, 491.0], [57.8, 491.0], [57.9, 492.0], [58.0, 493.0], [58.1, 494.0], [58.2, 494.0], [58.3, 494.0], [58.4, 495.0], [58.5, 495.0], [58.6, 495.0], [58.7, 495.0], [58.8, 495.0], [58.9, 495.0], [59.0, 497.0], [59.1, 497.0], [59.2, 497.0], [59.3, 497.0], [59.4, 497.0], [59.5, 498.0], [59.6, 499.0], [59.7, 499.0], [59.8, 499.0], [59.9, 500.0], [60.0, 501.0], [60.1, 501.0], [60.2, 501.0], [60.3, 501.0], [60.4, 501.0], [60.5, 502.0], [60.6, 503.0], [60.7, 503.0], [60.8, 503.0], [60.9, 504.0], [61.0, 504.0], [61.1, 506.0], [61.2, 506.0], [61.3, 506.0], [61.4, 507.0], [61.5, 507.0], [61.6, 507.0], [61.7, 508.0], [61.8, 511.0], [61.9, 511.0], [62.0, 511.0], [62.1, 512.0], [62.2, 514.0], [62.3, 514.0], [62.4, 514.0], [62.5, 514.0], [62.6, 515.0], [62.7, 515.0], [62.8, 516.0], [62.9, 517.0], [63.0, 518.0], [63.1, 518.0], [63.2, 518.0], [63.3, 519.0], [63.4, 519.0], [63.5, 521.0], [63.6, 522.0], [63.7, 523.0], [63.8, 523.0], [63.9, 524.0], [64.0, 524.0], [64.1, 524.0], [64.2, 524.0], [64.3, 525.0], [64.4, 526.0], [64.5, 526.0], [64.6, 526.0], [64.7, 527.0], [64.8, 528.0], [64.9, 529.0], [65.0, 529.0], [65.1, 529.0], [65.2, 530.0], [65.3, 530.0], [65.4, 530.0], [65.5, 532.0], [65.6, 532.0], [65.7, 532.0], [65.8, 532.0], [65.9, 532.0], [66.0, 533.0], [66.1, 533.0], [66.2, 533.0], [66.3, 535.0], [66.4, 537.0], [66.5, 537.0], [66.6, 537.0], [66.7, 537.0], [66.8, 537.0], [66.9, 538.0], [67.0, 539.0], [67.1, 540.0], [67.2, 540.0], [67.3, 541.0], [67.4, 543.0], [67.5, 543.0], [67.6, 543.0], [67.7, 544.0], [67.8, 544.0], [67.9, 545.0], [68.0, 545.0], [68.1, 545.0], [68.2, 545.0], [68.3, 546.0], [68.4, 546.0], [68.5, 547.0], [68.6, 547.0], [68.7, 547.0], [68.8, 547.0], [68.9, 547.0], [69.0, 547.0], [69.1, 547.0], [69.2, 547.0], [69.3, 548.0], [69.4, 550.0], [69.5, 550.0], [69.6, 550.0], [69.7, 551.0], [69.8, 551.0], [69.9, 551.0], [70.0, 551.0], [70.1, 552.0], [70.2, 552.0], [70.3, 552.0], [70.4, 554.0], [70.5, 554.0], [70.6, 554.0], [70.7, 554.0], [70.8, 555.0], [70.9, 556.0], [71.0, 556.0], [71.1, 557.0], [71.2, 557.0], [71.3, 557.0], [71.4, 557.0], [71.5, 558.0], [71.6, 558.0], [71.7, 558.0], [71.8, 559.0], [71.9, 560.0], [72.0, 560.0], [72.1, 560.0], [72.2, 560.0], [72.3, 560.0], [72.4, 561.0], [72.5, 561.0], [72.6, 561.0], [72.7, 562.0], [72.8, 563.0], [72.9, 563.0], [73.0, 564.0], [73.1, 564.0], [73.2, 570.0], [73.3, 570.0], [73.4, 570.0], [73.5, 570.0], [73.6, 570.0], [73.7, 570.0], [73.8, 570.0], [73.9, 571.0], [74.0, 571.0], [74.1, 572.0], [74.2, 572.0], [74.3, 574.0], [74.4, 574.0], [74.5, 576.0], [74.6, 577.0], [74.7, 578.0], [74.8, 578.0], [74.9, 580.0], [75.0, 581.0], [75.1, 581.0], [75.2, 581.0], [75.3, 582.0], [75.4, 582.0], [75.5, 582.0], [75.6, 582.0], [75.7, 582.0], [75.8, 584.0], [75.9, 584.0], [76.0, 584.0], [76.1, 585.0], [76.2, 586.0], [76.3, 586.0], [76.4, 587.0], [76.5, 588.0], [76.6, 588.0], [76.7, 588.0], [76.8, 589.0], [76.9, 590.0], [77.0, 590.0], [77.1, 591.0], [77.2, 591.0], [77.3, 594.0], [77.4, 594.0], [77.5, 596.0], [77.6, 596.0], [77.7, 597.0], [77.8, 597.0], [77.9, 597.0], [78.0, 600.0], [78.1, 600.0], [78.2, 600.0], [78.3, 601.0], [78.4, 603.0], [78.5, 603.0], [78.6, 604.0], [78.7, 605.0], [78.8, 605.0], [78.9, 605.0], [79.0, 607.0], [79.1, 607.0], [79.2, 607.0], [79.3, 607.0], [79.4, 609.0], [79.5, 610.0], [79.6, 610.0], [79.7, 610.0], [79.8, 613.0], [79.9, 614.0], [80.0, 614.0], [80.1, 614.0], [80.2, 614.0], [80.3, 615.0], [80.4, 615.0], [80.5, 616.0], [80.6, 617.0], [80.7, 617.0], [80.8, 617.0], [80.9, 617.0], [81.0, 619.0], [81.1, 619.0], [81.2, 619.0], [81.3, 620.0], [81.4, 621.0], [81.5, 622.0], [81.6, 622.0], [81.7, 623.0], [81.8, 624.0], [81.9, 624.0], [82.0, 625.0], [82.1, 627.0], [82.2, 628.0], [82.3, 628.0], [82.4, 628.0], [82.5, 630.0], [82.6, 632.0], [82.7, 632.0], [82.8, 632.0], [82.9, 633.0], [83.0, 636.0], [83.1, 636.0], [83.2, 637.0], [83.3, 637.0], [83.4, 637.0], [83.5, 639.0], [83.6, 639.0], [83.7, 640.0], [83.8, 640.0], [83.9, 641.0], [84.0, 641.0], [84.1, 642.0], [84.2, 642.0], [84.3, 643.0], [84.4, 645.0], [84.5, 647.0], [84.6, 647.0], [84.7, 651.0], [84.8, 654.0], [84.9, 654.0], [85.0, 654.0], [85.1, 656.0], [85.2, 657.0], [85.3, 657.0], [85.4, 661.0], [85.5, 661.0], [85.6, 662.0], [85.7, 662.0], [85.8, 663.0], [85.9, 664.0], [86.0, 665.0], [86.1, 665.0], [86.2, 666.0], [86.3, 667.0], [86.4, 669.0], [86.5, 669.0], [86.6, 671.0], [86.7, 671.0], [86.8, 671.0], [86.9, 671.0], [87.0, 675.0], [87.1, 681.0], [87.2, 681.0], [87.3, 681.0], [87.4, 682.0], [87.5, 684.0], [87.6, 684.0], [87.7, 685.0], [87.8, 687.0], [87.9, 693.0], [88.0, 693.0], [88.1, 694.0], [88.2, 697.0], [88.3, 697.0], [88.4, 697.0], [88.5, 705.0], [88.6, 708.0], [88.7, 708.0], [88.8, 708.0], [88.9, 709.0], [89.0, 710.0], [89.1, 710.0], [89.2, 718.0], [89.3, 720.0], [89.4, 727.0], [89.5, 727.0], [89.6, 730.0], [89.7, 733.0], [89.8, 741.0], [89.9, 741.0], [90.0, 741.0], [90.1, 746.0], [90.2, 746.0], [90.3, 750.0], [90.4, 751.0], [90.5, 751.0], [90.6, 751.0], [90.7, 762.0], [90.8, 768.0], [90.9, 771.0], [91.0, 771.0], [91.1, 771.0], [91.2, 773.0], [91.3, 775.0], [91.4, 775.0], [91.5, 782.0], [91.6, 786.0], [91.7, 786.0], [91.8, 790.0], [91.9, 793.0], [92.0, 793.0], [92.1, 793.0], [92.2, 794.0], [92.3, 801.0], [92.4, 802.0], [92.5, 802.0], [92.6, 803.0], [92.7, 807.0], [92.8, 816.0], [92.9, 816.0], [93.0, 817.0], [93.1, 828.0], [93.2, 832.0], [93.3, 832.0], [93.4, 833.0], [93.5, 845.0], [93.6, 845.0], [93.7, 848.0], [93.8, 859.0], [93.9, 867.0], [94.0, 867.0], [94.1, 868.0], [94.2, 875.0], [94.3, 879.0], [94.4, 879.0], [94.5, 882.0], [94.6, 890.0], [94.7, 896.0], [94.8, 896.0], [94.9, 919.0], [95.0, 957.0], [95.1, 957.0], [95.2, 979.0], [95.3, 989.0], [95.4, 1010.0], [95.5, 1010.0], [95.6, 1012.0], [95.7, 1036.0], [95.8, 1039.0], [95.9, 1039.0], [96.0, 1046.0], [96.1, 1054.0], [96.2, 1059.0], [96.3, 1059.0], [96.4, 1076.0], [96.5, 1089.0], [96.6, 1098.0], [96.7, 1098.0], [96.8, 1099.0], [96.9, 1108.0], [97.0, 1108.0], [97.1, 1153.0], [97.2, 1154.0], [97.3, 1189.0], [97.4, 1189.0], [97.5, 1214.0], [97.6, 1227.0], [97.7, 1236.0], [97.8, 1236.0], [97.9, 1248.0], [98.0, 1251.0], [98.1, 1282.0], [98.2, 1282.0], [98.3, 1322.0], [98.4, 1323.0], [98.5, 1323.0], [98.6, 1348.0], [98.7, 1407.0], [98.8, 1486.0], [98.9, 1486.0], [99.0, 1528.0], [99.1, 1600.0], [99.2, 1620.0], [99.3, 1620.0], [99.4, 1967.0], [99.5, 2120.0], [99.6, 2499.0], [99.7, 2499.0], [99.8, 2607.0], [99.9, 3378.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 194.0, "series": [{"data": [[2100.0, 1.0], [600.0, 77.0], [2400.0, 1.0], [2600.0, 1.0], [700.0, 28.0], [200.0, 55.0], [800.0, 19.0], [3300.0, 1.0], [900.0, 4.0], [1000.0, 11.0], [1100.0, 4.0], [1200.0, 6.0], [300.0, 176.0], [1300.0, 3.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 2.0], [400.0, 194.0], [100.0, 15.0], [1900.0, 1.0], [500.0, 133.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 441.0, "series": [{"data": [[0.0, 441.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 286.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.928909952606633, "minX": 1.60280538E12, "maxY": 9.980392156862752, "series": [{"data": [[1.60280538E12, 9.980392156862752], [1.60280544E12, 9.928909952606633]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280544E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 314.0, "minX": 1.0, "maxY": 733.0, "series": [{"data": [[8.0, 475.0], [4.0, 340.0], [2.0, 316.0], [1.0, 733.0], [9.0, 314.0], [10.0, 515.5282758620684], [5.0, 335.0], [6.0, 372.0], [3.0, 337.0], [7.0, 321.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.936054421768707, 513.9809523809523]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 792.4666666666667, "minX": 1.60280538E12, "maxY": 1608594.5333333334, "series": [{"data": [[1.60280538E12, 425451.7833333333], [1.60280544E12, 1608594.5333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280538E12, 792.4666666666667], [1.60280544E12, 4877.566666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280544E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 492.73459715639757, "minX": 1.60280538E12, "maxY": 645.8333333333334, "series": [{"data": [[1.60280538E12, 645.8333333333334], [1.60280544E12, 492.73459715639757]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280544E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 491.5876777251183, "minX": 1.60280538E12, "maxY": 643.9901960784314, "series": [{"data": [[1.60280538E12, 643.9901960784314], [1.60280544E12, 491.5876777251183]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280544E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60280538E12, "maxY": 0.8627450980392154, "series": [{"data": [[1.60280538E12, 0.8627450980392154], [1.60280544E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280544E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.60280538E12, "maxY": 3378.0, "series": [{"data": [[1.60280538E12, 3378.0], [1.60280544E12, 1528.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280538E12, 177.0], [1.60280544E12, 185.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280538E12, 177.11820005893708], [1.60280544E12, 186.10640024185182]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280538E12, 177.0], [1.60280544E12, 185.09199969768525]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280538E12, 177.0], [1.60280544E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280538E12, 466.5], [1.60280544E12, 461.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280544E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 338.5, "minX": 1.0, "maxY": 879.5, "series": [{"data": [[10.0, 879.5], [14.0, 431.0], [15.0, 558.0], [1.0, 600.0], [16.0, 569.0], [17.0, 507.0], [18.0, 520.5], [19.0, 454.0], [20.0, 488.5], [21.0, 442.0], [22.0, 412.0], [23.0, 404.5], [6.0, 338.5], [25.0, 397.0], [27.0, 373.0], [28.0, 369.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 338.5, "minX": 1.0, "maxY": 878.5, "series": [{"data": [[10.0, 878.5], [14.0, 431.0], [15.0, 557.0], [1.0, 595.0], [16.0, 568.5], [17.0, 506.5], [18.0, 519.5], [19.0, 454.0], [20.0, 487.0], [21.0, 442.0], [22.0, 411.0], [23.0, 404.0], [6.0, 338.5], [25.0, 396.0], [27.0, 373.0], [28.0, 368.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.60280538E12, "maxY": 10.383333333333333, "series": [{"data": [[1.60280538E12, 1.8666666666666667], [1.60280544E12, 10.383333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280544E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60280538E12, "maxY": 10.55, "series": [{"data": [[1.60280538E12, 1.7], [1.60280544E12, 10.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280544E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60280538E12, "maxY": 10.55, "series": [{"data": [[1.60280538E12, 1.7], [1.60280544E12, 10.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280544E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60280538E12, "maxY": 10.55, "series": [{"data": [[1.60280538E12, 1.7], [1.60280544E12, 10.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280544E12, "title": "Total Transactions Per Second"}},
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

