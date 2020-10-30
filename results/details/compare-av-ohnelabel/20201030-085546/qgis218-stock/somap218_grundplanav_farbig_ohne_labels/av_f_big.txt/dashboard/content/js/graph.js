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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 2968.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 174.0], [0.3, 174.0], [0.4, 174.0], [0.5, 180.0], [0.6, 181.0], [0.7, 185.0], [0.8, 185.0], [0.9, 187.0], [1.0, 194.0], [1.1, 199.0], [1.2, 199.0], [1.3, 201.0], [1.4, 201.0], [1.5, 203.0], [1.6, 203.0], [1.7, 207.0], [1.8, 211.0], [1.9, 211.0], [2.0, 212.0], [2.1, 213.0], [2.2, 215.0], [2.3, 215.0], [2.4, 219.0], [2.5, 220.0], [2.6, 221.0], [2.7, 221.0], [2.8, 223.0], [2.9, 223.0], [3.0, 227.0], [3.1, 227.0], [3.2, 227.0], [3.3, 231.0], [3.4, 231.0], [3.5, 233.0], [3.6, 234.0], [3.7, 237.0], [3.8, 237.0], [3.9, 238.0], [4.0, 244.0], [4.1, 244.0], [4.2, 244.0], [4.3, 246.0], [4.4, 247.0], [4.5, 247.0], [4.6, 247.0], [4.7, 248.0], [4.8, 250.0], [4.9, 255.0], [5.0, 255.0], [5.1, 257.0], [5.2, 259.0], [5.3, 259.0], [5.4, 261.0], [5.5, 263.0], [5.6, 266.0], [5.7, 266.0], [5.8, 266.0], [5.9, 267.0], [6.0, 269.0], [6.1, 269.0], [6.2, 269.0], [6.3, 272.0], [6.4, 274.0], [6.5, 274.0], [6.6, 274.0], [6.7, 276.0], [6.8, 276.0], [6.9, 276.0], [7.0, 279.0], [7.1, 284.0], [7.2, 284.0], [7.3, 285.0], [7.4, 286.0], [7.5, 287.0], [7.6, 287.0], [7.7, 289.0], [7.8, 294.0], [7.9, 295.0], [8.0, 295.0], [8.1, 295.0], [8.2, 297.0], [8.3, 298.0], [8.4, 298.0], [8.5, 300.0], [8.6, 303.0], [8.7, 303.0], [8.8, 304.0], [8.9, 305.0], [9.0, 305.0], [9.1, 305.0], [9.2, 306.0], [9.3, 307.0], [9.4, 307.0], [9.5, 307.0], [9.6, 307.0], [9.7, 310.0], [9.8, 311.0], [9.9, 311.0], [10.0, 313.0], [10.1, 314.0], [10.2, 314.0], [10.3, 316.0], [10.4, 317.0], [10.5, 321.0], [10.6, 321.0], [10.7, 322.0], [10.8, 323.0], [10.9, 324.0], [11.0, 324.0], [11.1, 329.0], [11.2, 329.0], [11.3, 330.0], [11.4, 330.0], [11.5, 331.0], [11.6, 331.0], [11.7, 331.0], [11.8, 331.0], [11.9, 335.0], [12.0, 336.0], [12.1, 336.0], [12.2, 337.0], [12.3, 338.0], [12.4, 338.0], [12.5, 338.0], [12.6, 340.0], [12.7, 342.0], [12.8, 344.0], [12.9, 344.0], [13.0, 344.0], [13.1, 345.0], [13.2, 349.0], [13.3, 349.0], [13.4, 350.0], [13.5, 351.0], [13.6, 351.0], [13.7, 353.0], [13.8, 353.0], [13.9, 354.0], [14.0, 354.0], [14.1, 355.0], [14.2, 355.0], [14.3, 357.0], [14.4, 357.0], [14.5, 357.0], [14.6, 357.0], [14.7, 358.0], [14.8, 358.0], [14.9, 359.0], [15.0, 360.0], [15.1, 360.0], [15.2, 361.0], [15.3, 361.0], [15.4, 364.0], [15.5, 364.0], [15.6, 364.0], [15.7, 365.0], [15.8, 366.0], [15.9, 366.0], [16.0, 367.0], [16.1, 369.0], [16.2, 370.0], [16.3, 370.0], [16.4, 370.0], [16.5, 370.0], [16.6, 371.0], [16.7, 371.0], [16.8, 372.0], [16.9, 372.0], [17.0, 372.0], [17.1, 374.0], [17.2, 374.0], [17.3, 374.0], [17.4, 374.0], [17.5, 376.0], [17.6, 377.0], [17.7, 377.0], [17.8, 377.0], [17.9, 378.0], [18.0, 380.0], [18.1, 381.0], [18.2, 381.0], [18.3, 382.0], [18.4, 383.0], [18.5, 383.0], [18.6, 383.0], [18.7, 384.0], [18.8, 385.0], [18.9, 385.0], [19.0, 385.0], [19.1, 385.0], [19.2, 385.0], [19.3, 385.0], [19.4, 386.0], [19.5, 386.0], [19.6, 387.0], [19.7, 387.0], [19.8, 388.0], [19.9, 390.0], [20.0, 391.0], [20.1, 391.0], [20.2, 391.0], [20.3, 393.0], [20.4, 393.0], [20.5, 393.0], [20.6, 394.0], [20.7, 394.0], [20.8, 394.0], [20.9, 394.0], [21.0, 394.0], [21.1, 394.0], [21.2, 394.0], [21.3, 394.0], [21.4, 395.0], [21.5, 395.0], [21.6, 395.0], [21.7, 396.0], [21.8, 397.0], [21.9, 397.0], [22.0, 397.0], [22.1, 398.0], [22.2, 398.0], [22.3, 398.0], [22.4, 398.0], [22.5, 398.0], [22.6, 399.0], [22.7, 399.0], [22.8, 399.0], [22.9, 401.0], [23.0, 401.0], [23.1, 401.0], [23.2, 401.0], [23.3, 404.0], [23.4, 404.0], [23.5, 404.0], [23.6, 405.0], [23.7, 405.0], [23.8, 405.0], [23.9, 406.0], [24.0, 406.0], [24.1, 407.0], [24.2, 407.0], [24.3, 408.0], [24.4, 408.0], [24.5, 408.0], [24.6, 408.0], [24.7, 408.0], [24.8, 408.0], [24.9, 408.0], [25.0, 408.0], [25.1, 409.0], [25.2, 410.0], [25.3, 410.0], [25.4, 410.0], [25.5, 410.0], [25.6, 410.0], [25.7, 410.0], [25.8, 411.0], [25.9, 411.0], [26.0, 411.0], [26.1, 411.0], [26.2, 412.0], [26.3, 412.0], [26.4, 412.0], [26.5, 412.0], [26.6, 415.0], [26.7, 416.0], [26.8, 416.0], [26.9, 416.0], [27.0, 416.0], [27.1, 417.0], [27.2, 417.0], [27.3, 417.0], [27.4, 417.0], [27.5, 417.0], [27.6, 417.0], [27.7, 418.0], [27.8, 418.0], [27.9, 418.0], [28.0, 418.0], [28.1, 420.0], [28.2, 421.0], [28.3, 421.0], [28.4, 421.0], [28.5, 422.0], [28.6, 422.0], [28.7, 422.0], [28.8, 422.0], [28.9, 423.0], [29.0, 424.0], [29.1, 424.0], [29.2, 424.0], [29.3, 424.0], [29.4, 424.0], [29.5, 424.0], [29.6, 425.0], [29.7, 426.0], [29.8, 426.0], [29.9, 426.0], [30.0, 427.0], [30.1, 427.0], [30.2, 427.0], [30.3, 427.0], [30.4, 428.0], [30.5, 428.0], [30.6, 428.0], [30.7, 428.0], [30.8, 428.0], [30.9, 428.0], [31.0, 428.0], [31.1, 429.0], [31.2, 430.0], [31.3, 431.0], [31.4, 431.0], [31.5, 432.0], [31.6, 433.0], [31.7, 433.0], [31.8, 433.0], [31.9, 434.0], [32.0, 435.0], [32.1, 435.0], [32.2, 435.0], [32.3, 435.0], [32.4, 436.0], [32.5, 436.0], [32.6, 437.0], [32.7, 437.0], [32.8, 437.0], [32.9, 437.0], [33.0, 438.0], [33.1, 440.0], [33.2, 441.0], [33.3, 441.0], [33.4, 441.0], [33.5, 442.0], [33.6, 442.0], [33.7, 442.0], [33.8, 443.0], [33.9, 444.0], [34.0, 444.0], [34.1, 444.0], [34.2, 444.0], [34.3, 444.0], [34.4, 444.0], [34.5, 445.0], [34.6, 445.0], [34.7, 445.0], [34.8, 445.0], [34.9, 446.0], [35.0, 446.0], [35.1, 446.0], [35.2, 447.0], [35.3, 447.0], [35.4, 447.0], [35.5, 447.0], [35.6, 448.0], [35.7, 448.0], [35.8, 449.0], [35.9, 449.0], [36.0, 450.0], [36.1, 450.0], [36.2, 451.0], [36.3, 451.0], [36.4, 451.0], [36.5, 451.0], [36.6, 451.0], [36.7, 451.0], [36.8, 451.0], [36.9, 451.0], [37.0, 451.0], [37.1, 451.0], [37.2, 451.0], [37.3, 452.0], [37.4, 452.0], [37.5, 452.0], [37.6, 453.0], [37.7, 453.0], [37.8, 453.0], [37.9, 453.0], [38.0, 454.0], [38.1, 454.0], [38.2, 454.0], [38.3, 454.0], [38.4, 455.0], [38.5, 455.0], [38.6, 455.0], [38.7, 455.0], [38.8, 456.0], [38.9, 456.0], [39.0, 456.0], [39.1, 456.0], [39.2, 457.0], [39.3, 457.0], [39.4, 458.0], [39.5, 458.0], [39.6, 460.0], [39.7, 460.0], [39.8, 461.0], [39.9, 461.0], [40.0, 462.0], [40.1, 462.0], [40.2, 465.0], [40.3, 465.0], [40.4, 465.0], [40.5, 466.0], [40.6, 466.0], [40.7, 466.0], [40.8, 466.0], [40.9, 467.0], [41.0, 467.0], [41.1, 468.0], [41.2, 468.0], [41.3, 468.0], [41.4, 468.0], [41.5, 469.0], [41.6, 469.0], [41.7, 470.0], [41.8, 470.0], [41.9, 470.0], [42.0, 471.0], [42.1, 471.0], [42.2, 471.0], [42.3, 471.0], [42.4, 471.0], [42.5, 472.0], [42.6, 472.0], [42.7, 472.0], [42.8, 472.0], [42.9, 472.0], [43.0, 473.0], [43.1, 473.0], [43.2, 474.0], [43.3, 475.0], [43.4, 475.0], [43.5, 475.0], [43.6, 475.0], [43.7, 475.0], [43.8, 475.0], [43.9, 476.0], [44.0, 476.0], [44.1, 477.0], [44.2, 477.0], [44.3, 478.0], [44.4, 479.0], [44.5, 480.0], [44.6, 480.0], [44.7, 481.0], [44.8, 481.0], [44.9, 481.0], [45.0, 481.0], [45.1, 481.0], [45.2, 481.0], [45.3, 481.0], [45.4, 483.0], [45.5, 483.0], [45.6, 483.0], [45.7, 483.0], [45.8, 484.0], [45.9, 484.0], [46.0, 485.0], [46.1, 485.0], [46.2, 486.0], [46.3, 486.0], [46.4, 487.0], [46.5, 487.0], [46.6, 488.0], [46.7, 488.0], [46.8, 488.0], [46.9, 489.0], [47.0, 490.0], [47.1, 490.0], [47.2, 490.0], [47.3, 491.0], [47.4, 491.0], [47.5, 491.0], [47.6, 491.0], [47.7, 492.0], [47.8, 492.0], [47.9, 492.0], [48.0, 492.0], [48.1, 492.0], [48.2, 493.0], [48.3, 493.0], [48.4, 493.0], [48.5, 493.0], [48.6, 493.0], [48.7, 493.0], [48.8, 494.0], [48.9, 495.0], [49.0, 495.0], [49.1, 495.0], [49.2, 495.0], [49.3, 496.0], [49.4, 496.0], [49.5, 496.0], [49.6, 496.0], [49.7, 496.0], [49.8, 496.0], [49.9, 496.0], [50.0, 497.0], [50.1, 497.0], [50.2, 497.0], [50.3, 497.0], [50.4, 498.0], [50.5, 499.0], [50.6, 499.0], [50.7, 499.0], [50.8, 499.0], [50.9, 500.0], [51.0, 500.0], [51.1, 502.0], [51.2, 502.0], [51.3, 502.0], [51.4, 502.0], [51.5, 503.0], [51.6, 504.0], [51.7, 504.0], [51.8, 504.0], [51.9, 504.0], [52.0, 505.0], [52.1, 505.0], [52.2, 505.0], [52.3, 505.0], [52.4, 506.0], [52.5, 506.0], [52.6, 506.0], [52.7, 507.0], [52.8, 508.0], [52.9, 508.0], [53.0, 509.0], [53.1, 512.0], [53.2, 513.0], [53.3, 513.0], [53.4, 513.0], [53.5, 514.0], [53.6, 514.0], [53.7, 514.0], [53.8, 515.0], [53.9, 515.0], [54.0, 515.0], [54.1, 516.0], [54.2, 516.0], [54.3, 517.0], [54.4, 517.0], [54.5, 518.0], [54.6, 518.0], [54.7, 518.0], [54.8, 518.0], [54.9, 519.0], [55.0, 519.0], [55.1, 519.0], [55.2, 520.0], [55.3, 520.0], [55.4, 521.0], [55.5, 521.0], [55.6, 521.0], [55.7, 523.0], [55.8, 523.0], [55.9, 523.0], [56.0, 525.0], [56.1, 525.0], [56.2, 526.0], [56.3, 526.0], [56.4, 526.0], [56.5, 526.0], [56.6, 527.0], [56.7, 527.0], [56.8, 528.0], [56.9, 529.0], [57.0, 529.0], [57.1, 530.0], [57.2, 531.0], [57.3, 531.0], [57.4, 531.0], [57.5, 531.0], [57.6, 531.0], [57.7, 532.0], [57.8, 532.0], [57.9, 532.0], [58.0, 532.0], [58.1, 532.0], [58.2, 532.0], [58.3, 533.0], [58.4, 534.0], [58.5, 534.0], [58.6, 534.0], [58.7, 535.0], [58.8, 535.0], [58.9, 535.0], [59.0, 536.0], [59.1, 536.0], [59.2, 537.0], [59.3, 537.0], [59.4, 537.0], [59.5, 538.0], [59.6, 538.0], [59.7, 538.0], [59.8, 538.0], [59.9, 539.0], [60.0, 539.0], [60.1, 539.0], [60.2, 540.0], [60.3, 540.0], [60.4, 540.0], [60.5, 543.0], [60.6, 543.0], [60.7, 544.0], [60.8, 544.0], [60.9, 545.0], [61.0, 546.0], [61.1, 546.0], [61.2, 546.0], [61.3, 548.0], [61.4, 549.0], [61.5, 549.0], [61.6, 549.0], [61.7, 549.0], [61.8, 550.0], [61.9, 550.0], [62.0, 550.0], [62.1, 551.0], [62.2, 551.0], [62.3, 551.0], [62.4, 551.0], [62.5, 551.0], [62.6, 551.0], [62.7, 551.0], [62.8, 552.0], [62.9, 553.0], [63.0, 553.0], [63.1, 553.0], [63.2, 554.0], [63.3, 555.0], [63.4, 555.0], [63.5, 555.0], [63.6, 556.0], [63.7, 556.0], [63.8, 556.0], [63.9, 556.0], [64.0, 557.0], [64.1, 557.0], [64.2, 557.0], [64.3, 557.0], [64.4, 558.0], [64.5, 559.0], [64.6, 559.0], [64.7, 559.0], [64.8, 561.0], [64.9, 561.0], [65.0, 561.0], [65.1, 561.0], [65.2, 561.0], [65.3, 561.0], [65.4, 562.0], [65.5, 562.0], [65.6, 563.0], [65.7, 563.0], [65.8, 563.0], [65.9, 564.0], [66.0, 565.0], [66.1, 565.0], [66.2, 566.0], [66.3, 569.0], [66.4, 569.0], [66.5, 569.0], [66.6, 569.0], [66.7, 571.0], [66.8, 571.0], [66.9, 571.0], [67.0, 571.0], [67.1, 572.0], [67.2, 572.0], [67.3, 573.0], [67.4, 574.0], [67.5, 575.0], [67.6, 575.0], [67.7, 576.0], [67.8, 576.0], [67.9, 578.0], [68.0, 578.0], [68.1, 581.0], [68.2, 581.0], [68.3, 581.0], [68.4, 581.0], [68.5, 582.0], [68.6, 583.0], [68.7, 583.0], [68.8, 583.0], [68.9, 584.0], [69.0, 584.0], [69.1, 584.0], [69.2, 584.0], [69.3, 584.0], [69.4, 585.0], [69.5, 585.0], [69.6, 586.0], [69.7, 587.0], [69.8, 587.0], [69.9, 587.0], [70.0, 588.0], [70.1, 588.0], [70.2, 588.0], [70.3, 588.0], [70.4, 589.0], [70.5, 589.0], [70.6, 589.0], [70.7, 590.0], [70.8, 590.0], [70.9, 591.0], [71.0, 591.0], [71.1, 593.0], [71.2, 593.0], [71.3, 593.0], [71.4, 593.0], [71.5, 594.0], [71.6, 594.0], [71.7, 594.0], [71.8, 595.0], [71.9, 596.0], [72.0, 596.0], [72.1, 596.0], [72.2, 596.0], [72.3, 598.0], [72.4, 599.0], [72.5, 599.0], [72.6, 600.0], [72.7, 603.0], [72.8, 603.0], [72.9, 603.0], [73.0, 604.0], [73.1, 607.0], [73.2, 607.0], [73.3, 607.0], [73.4, 608.0], [73.5, 609.0], [73.6, 609.0], [73.7, 609.0], [73.8, 610.0], [73.9, 610.0], [74.0, 610.0], [74.1, 610.0], [74.2, 611.0], [74.3, 612.0], [74.4, 612.0], [74.5, 614.0], [74.6, 622.0], [74.7, 623.0], [74.8, 623.0], [74.9, 623.0], [75.0, 623.0], [75.1, 623.0], [75.2, 623.0], [75.3, 624.0], [75.4, 626.0], [75.5, 626.0], [75.6, 626.0], [75.7, 626.0], [75.8, 626.0], [75.9, 626.0], [76.0, 627.0], [76.1, 628.0], [76.2, 629.0], [76.3, 629.0], [76.4, 630.0], [76.5, 630.0], [76.6, 632.0], [76.7, 632.0], [76.8, 632.0], [76.9, 634.0], [77.0, 634.0], [77.1, 636.0], [77.2, 636.0], [77.3, 640.0], [77.4, 640.0], [77.5, 641.0], [77.6, 642.0], [77.7, 643.0], [77.8, 643.0], [77.9, 643.0], [78.0, 643.0], [78.1, 644.0], [78.2, 644.0], [78.3, 645.0], [78.4, 645.0], [78.5, 645.0], [78.6, 646.0], [78.7, 647.0], [78.8, 648.0], [78.9, 648.0], [79.0, 648.0], [79.1, 651.0], [79.2, 651.0], [79.3, 651.0], [79.4, 651.0], [79.5, 654.0], [79.6, 654.0], [79.7, 654.0], [79.8, 655.0], [79.9, 656.0], [80.0, 656.0], [80.1, 656.0], [80.2, 658.0], [80.3, 658.0], [80.4, 658.0], [80.5, 661.0], [80.6, 665.0], [80.7, 668.0], [80.8, 668.0], [80.9, 668.0], [81.0, 670.0], [81.1, 671.0], [81.2, 671.0], [81.3, 672.0], [81.4, 673.0], [81.5, 674.0], [81.6, 674.0], [81.7, 676.0], [81.8, 679.0], [81.9, 679.0], [82.0, 682.0], [82.1, 682.0], [82.2, 684.0], [82.3, 684.0], [82.4, 686.0], [82.5, 692.0], [82.6, 692.0], [82.7, 692.0], [82.8, 692.0], [82.9, 694.0], [83.0, 695.0], [83.1, 695.0], [83.2, 695.0], [83.3, 697.0], [83.4, 697.0], [83.5, 697.0], [83.6, 698.0], [83.7, 700.0], [83.8, 700.0], [83.9, 701.0], [84.0, 704.0], [84.1, 704.0], [84.2, 704.0], [84.3, 706.0], [84.4, 708.0], [84.5, 710.0], [84.6, 710.0], [84.7, 711.0], [84.8, 716.0], [84.9, 719.0], [85.0, 719.0], [85.1, 719.0], [85.2, 720.0], [85.3, 720.0], [85.4, 721.0], [85.5, 723.0], [85.6, 725.0], [85.7, 725.0], [85.8, 727.0], [85.9, 728.0], [86.0, 729.0], [86.1, 729.0], [86.2, 729.0], [86.3, 730.0], [86.4, 733.0], [86.5, 733.0], [86.6, 737.0], [86.7, 738.0], [86.8, 738.0], [86.9, 739.0], [87.0, 741.0], [87.1, 741.0], [87.2, 741.0], [87.3, 745.0], [87.4, 747.0], [87.5, 748.0], [87.6, 748.0], [87.7, 750.0], [87.8, 751.0], [87.9, 751.0], [88.0, 751.0], [88.1, 756.0], [88.2, 757.0], [88.3, 759.0], [88.4, 759.0], [88.5, 762.0], [88.6, 762.0], [88.7, 762.0], [88.8, 771.0], [88.9, 772.0], [89.0, 777.0], [89.1, 777.0], [89.2, 779.0], [89.3, 781.0], [89.4, 786.0], [89.5, 786.0], [89.6, 807.0], [89.7, 814.0], [89.8, 815.0], [89.9, 815.0], [90.0, 818.0], [90.1, 826.0], [90.2, 826.0], [90.3, 829.0], [90.4, 831.0], [90.5, 832.0], [90.6, 832.0], [90.7, 835.0], [90.8, 841.0], [90.9, 844.0], [91.0, 844.0], [91.1, 847.0], [91.2, 848.0], [91.3, 853.0], [91.4, 853.0], [91.5, 856.0], [91.6, 860.0], [91.7, 860.0], [91.8, 863.0], [91.9, 865.0], [92.0, 869.0], [92.1, 869.0], [92.2, 871.0], [92.3, 881.0], [92.4, 892.0], [92.5, 892.0], [92.6, 893.0], [92.7, 911.0], [92.8, 915.0], [92.9, 915.0], [93.0, 917.0], [93.1, 933.0], [93.2, 934.0], [93.3, 934.0], [93.4, 938.0], [93.5, 949.0], [93.6, 949.0], [93.7, 950.0], [93.8, 950.0], [93.9, 951.0], [94.0, 951.0], [94.1, 958.0], [94.2, 960.0], [94.3, 969.0], [94.4, 969.0], [94.5, 970.0], [94.6, 970.0], [94.7, 980.0], [94.8, 980.0], [94.9, 984.0], [95.0, 984.0], [95.1, 984.0], [95.2, 1011.0], [95.3, 1012.0], [95.4, 1016.0], [95.5, 1016.0], [95.6, 1041.0], [95.7, 1108.0], [95.8, 1112.0], [95.9, 1112.0], [96.0, 1116.0], [96.1, 1131.0], [96.2, 1132.0], [96.3, 1132.0], [96.4, 1135.0], [96.5, 1148.0], [96.6, 1175.0], [96.7, 1175.0], [96.8, 1194.0], [96.9, 1206.0], [97.0, 1206.0], [97.1, 1212.0], [97.2, 1234.0], [97.3, 1240.0], [97.4, 1240.0], [97.5, 1283.0], [97.6, 1321.0], [97.7, 1339.0], [97.8, 1339.0], [97.9, 1369.0], [98.0, 1382.0], [98.1, 1407.0], [98.2, 1407.0], [98.3, 1415.0], [98.4, 1431.0], [98.5, 1431.0], [98.6, 1464.0], [98.7, 1496.0], [98.8, 1557.0], [98.9, 1557.0], [99.0, 1612.0], [99.1, 1625.0], [99.2, 1662.0], [99.3, 1662.0], [99.4, 1758.0], [99.5, 2221.0], [99.6, 2316.0], [99.7, 2316.0], [99.8, 2692.0], [99.9, 2968.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 206.0, "series": [{"data": [[2300.0, 1.0], [2200.0, 1.0], [600.0, 82.0], [2600.0, 1.0], [700.0, 43.0], [2900.0, 1.0], [200.0, 53.0], [800.0, 23.0], [900.0, 18.0], [1000.0, 4.0], [1100.0, 9.0], [300.0, 106.0], [1200.0, 5.0], [1300.0, 4.0], [1400.0, 5.0], [1500.0, 1.0], [1600.0, 3.0], [400.0, 206.0], [100.0, 9.0], [1700.0, 1.0], [500.0, 159.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 375.0, "series": [{"data": [[0.0, 375.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 351.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93877551020408, "minX": 1.60404816E12, "maxY": 9.93877551020408, "series": [{"data": [[1.60404816E12, 9.93877551020408]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 331.0, "minX": 1.0, "maxY": 881.0, "series": [{"data": [[8.0, 430.0], [4.0, 436.0], [2.0, 364.0], [1.0, 881.0], [9.0, 450.0], [10.0, 553.8911845730025], [5.0, 378.0], [6.0, 331.0], [3.0, 338.0], [7.0, 395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 552.555102040816]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5670.033333333334, "minX": 1.60404816E12, "maxY": 2034046.3166666667, "series": [{"data": [[1.60404816E12, 2034046.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404816E12, 5670.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 552.555102040816, "minX": 1.60404816E12, "maxY": 552.555102040816, "series": [{"data": [[1.60404816E12, 552.555102040816]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 551.2462585034023, "minX": 1.60404816E12, "maxY": 551.2462585034023, "series": [{"data": [[1.60404816E12, 551.2462585034023]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.16870748299319716, "minX": 1.60404816E12, "maxY": 0.16870748299319716, "series": [{"data": [[1.60404816E12, 0.16870748299319716]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.60404816E12, "maxY": 2968.0, "series": [{"data": [[1.60404816E12, 2968.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404816E12, 186.24799964904784]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404816E12, 189.00480049133301]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404816E12, 186.98399982452392]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404816E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404816E12, 497.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 386.0, "minX": 7.0, "maxY": 720.0, "series": [{"data": [[8.0, 433.0], [12.0, 716.0], [13.0, 720.0], [14.0, 436.0], [15.0, 630.0], [16.0, 586.0], [17.0, 518.0], [18.0, 492.5], [19.0, 471.0], [20.0, 552.0], [21.0, 480.0], [22.0, 444.5], [23.0, 386.0], [24.0, 522.5], [25.0, 442.0], [7.0, 557.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 386.0, "minX": 7.0, "maxY": 719.0, "series": [{"data": [[8.0, 433.0], [12.0, 714.0], [13.0, 719.0], [14.0, 435.5], [15.0, 629.0], [16.0, 585.5], [17.0, 516.0], [18.0, 492.0], [19.0, 471.0], [20.0, 551.5], [21.0, 479.0], [22.0, 443.5], [23.0, 386.0], [24.0, 522.5], [25.0, 441.0], [7.0, 556.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60404816E12, "maxY": 12.25, "series": [{"data": [[1.60404816E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60404816E12, "maxY": 12.25, "series": [{"data": [[1.60404816E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60404816E12, "maxY": 12.25, "series": [{"data": [[1.60404816E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60404816E12, "maxY": 12.25, "series": [{"data": [[1.60404816E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404816E12, "title": "Total Transactions Per Second"}},
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

