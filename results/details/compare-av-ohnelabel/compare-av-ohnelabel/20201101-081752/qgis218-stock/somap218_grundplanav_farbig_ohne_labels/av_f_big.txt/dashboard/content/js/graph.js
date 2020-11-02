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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 3064.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 180.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 187.0], [0.7, 192.0], [0.8, 192.0], [0.9, 193.0], [1.0, 199.0], [1.1, 199.0], [1.2, 199.0], [1.3, 201.0], [1.4, 202.0], [1.5, 203.0], [1.6, 203.0], [1.7, 207.0], [1.8, 207.0], [1.9, 207.0], [2.0, 208.0], [2.1, 213.0], [2.2, 215.0], [2.3, 215.0], [2.4, 220.0], [2.5, 223.0], [2.6, 226.0], [2.7, 226.0], [2.8, 227.0], [2.9, 228.0], [3.0, 229.0], [3.1, 229.0], [3.2, 230.0], [3.3, 232.0], [3.4, 232.0], [3.5, 233.0], [3.6, 235.0], [3.7, 237.0], [3.8, 237.0], [3.9, 241.0], [4.0, 241.0], [4.1, 242.0], [4.2, 242.0], [4.3, 242.0], [4.4, 243.0], [4.5, 247.0], [4.6, 247.0], [4.7, 247.0], [4.8, 247.0], [4.9, 249.0], [5.0, 249.0], [5.1, 249.0], [5.2, 251.0], [5.3, 251.0], [5.4, 251.0], [5.5, 251.0], [5.6, 261.0], [5.7, 261.0], [5.8, 262.0], [5.9, 264.0], [6.0, 268.0], [6.1, 268.0], [6.2, 270.0], [6.3, 270.0], [6.4, 271.0], [6.5, 271.0], [6.6, 274.0], [6.7, 274.0], [6.8, 274.0], [6.9, 275.0], [7.0, 275.0], [7.1, 275.0], [7.2, 275.0], [7.3, 276.0], [7.4, 276.0], [7.5, 276.0], [7.6, 276.0], [7.7, 279.0], [7.8, 282.0], [7.9, 284.0], [8.0, 284.0], [8.1, 284.0], [8.2, 285.0], [8.3, 286.0], [8.4, 286.0], [8.5, 286.0], [8.6, 288.0], [8.7, 288.0], [8.8, 289.0], [8.9, 290.0], [9.0, 297.0], [9.1, 297.0], [9.2, 297.0], [9.3, 298.0], [9.4, 301.0], [9.5, 301.0], [9.6, 301.0], [9.7, 302.0], [9.8, 303.0], [9.9, 303.0], [10.0, 303.0], [10.1, 305.0], [10.2, 305.0], [10.3, 305.0], [10.4, 308.0], [10.5, 310.0], [10.6, 310.0], [10.7, 312.0], [10.8, 312.0], [10.9, 312.0], [11.0, 312.0], [11.1, 312.0], [11.2, 312.0], [11.3, 313.0], [11.4, 313.0], [11.5, 313.0], [11.6, 313.0], [11.7, 313.0], [11.8, 317.0], [11.9, 318.0], [12.0, 319.0], [12.1, 319.0], [12.2, 320.0], [12.3, 322.0], [12.4, 322.0], [12.5, 322.0], [12.6, 323.0], [12.7, 325.0], [12.8, 325.0], [12.9, 325.0], [13.0, 325.0], [13.1, 326.0], [13.2, 327.0], [13.3, 327.0], [13.4, 327.0], [13.5, 328.0], [13.6, 328.0], [13.7, 328.0], [13.8, 332.0], [13.9, 332.0], [14.0, 332.0], [14.1, 333.0], [14.2, 333.0], [14.3, 335.0], [14.4, 335.0], [14.5, 337.0], [14.6, 337.0], [14.7, 339.0], [14.8, 339.0], [14.9, 339.0], [15.0, 339.0], [15.1, 339.0], [15.2, 339.0], [15.3, 339.0], [15.4, 340.0], [15.5, 340.0], [15.6, 341.0], [15.7, 341.0], [15.8, 342.0], [15.9, 342.0], [16.0, 342.0], [16.1, 343.0], [16.2, 343.0], [16.3, 343.0], [16.4, 345.0], [16.5, 345.0], [16.6, 347.0], [16.7, 347.0], [16.8, 348.0], [16.9, 348.0], [17.0, 348.0], [17.1, 348.0], [17.2, 351.0], [17.3, 352.0], [17.4, 352.0], [17.5, 353.0], [17.6, 353.0], [17.7, 354.0], [17.8, 354.0], [17.9, 354.0], [18.0, 354.0], [18.1, 354.0], [18.2, 354.0], [18.3, 354.0], [18.4, 357.0], [18.5, 357.0], [18.6, 357.0], [18.7, 357.0], [18.8, 357.0], [18.9, 357.0], [19.0, 357.0], [19.1, 358.0], [19.2, 359.0], [19.3, 359.0], [19.4, 360.0], [19.5, 360.0], [19.6, 360.0], [19.7, 360.0], [19.8, 361.0], [19.9, 362.0], [20.0, 362.0], [20.1, 362.0], [20.2, 363.0], [20.3, 363.0], [20.4, 363.0], [20.5, 364.0], [20.6, 365.0], [20.7, 365.0], [20.8, 365.0], [20.9, 365.0], [21.0, 366.0], [21.1, 368.0], [21.2, 368.0], [21.3, 368.0], [21.4, 369.0], [21.5, 369.0], [21.6, 369.0], [21.7, 370.0], [21.8, 370.0], [21.9, 370.0], [22.0, 372.0], [22.1, 372.0], [22.2, 372.0], [22.3, 372.0], [22.4, 374.0], [22.5, 374.0], [22.6, 374.0], [22.7, 374.0], [22.8, 376.0], [22.9, 376.0], [23.0, 377.0], [23.1, 377.0], [23.2, 378.0], [23.3, 378.0], [23.4, 378.0], [23.5, 379.0], [23.6, 379.0], [23.7, 379.0], [23.8, 379.0], [23.9, 380.0], [24.0, 381.0], [24.1, 382.0], [24.2, 382.0], [24.3, 382.0], [24.4, 383.0], [24.5, 383.0], [24.6, 383.0], [24.7, 383.0], [24.8, 383.0], [24.9, 384.0], [25.0, 384.0], [25.1, 384.0], [25.2, 384.0], [25.3, 384.0], [25.4, 384.0], [25.5, 385.0], [25.6, 387.0], [25.7, 387.0], [25.8, 387.0], [25.9, 388.0], [26.0, 388.0], [26.1, 388.0], [26.2, 389.0], [26.3, 390.0], [26.4, 391.0], [26.5, 391.0], [26.6, 391.0], [26.7, 391.0], [26.8, 391.0], [26.9, 392.0], [27.0, 392.0], [27.1, 392.0], [27.2, 392.0], [27.3, 393.0], [27.4, 393.0], [27.5, 393.0], [27.6, 393.0], [27.7, 394.0], [27.8, 394.0], [27.9, 394.0], [28.0, 394.0], [28.1, 394.0], [28.2, 395.0], [28.3, 396.0], [28.4, 396.0], [28.5, 396.0], [28.6, 397.0], [28.7, 397.0], [28.8, 398.0], [28.9, 398.0], [29.0, 399.0], [29.1, 399.0], [29.2, 399.0], [29.3, 400.0], [29.4, 400.0], [29.5, 400.0], [29.6, 401.0], [29.7, 401.0], [29.8, 402.0], [29.9, 402.0], [30.0, 402.0], [30.1, 402.0], [30.2, 402.0], [30.3, 403.0], [30.4, 405.0], [30.5, 405.0], [30.6, 405.0], [30.7, 407.0], [30.8, 407.0], [30.9, 407.0], [31.0, 407.0], [31.1, 407.0], [31.2, 408.0], [31.3, 408.0], [31.4, 408.0], [31.5, 408.0], [31.6, 409.0], [31.7, 409.0], [31.8, 409.0], [31.9, 410.0], [32.0, 411.0], [32.1, 411.0], [32.2, 412.0], [32.3, 413.0], [32.4, 413.0], [32.5, 413.0], [32.6, 413.0], [32.7, 414.0], [32.8, 414.0], [32.9, 414.0], [33.0, 414.0], [33.1, 415.0], [33.2, 415.0], [33.3, 415.0], [33.4, 415.0], [33.5, 415.0], [33.6, 415.0], [33.7, 416.0], [33.8, 416.0], [33.9, 417.0], [34.0, 417.0], [34.1, 417.0], [34.2, 418.0], [34.3, 418.0], [34.4, 418.0], [34.5, 418.0], [34.6, 418.0], [34.7, 418.0], [34.8, 418.0], [34.9, 419.0], [35.0, 419.0], [35.1, 419.0], [35.2, 419.0], [35.3, 420.0], [35.4, 420.0], [35.5, 420.0], [35.6, 420.0], [35.7, 421.0], [35.8, 423.0], [35.9, 423.0], [36.0, 424.0], [36.1, 424.0], [36.2, 426.0], [36.3, 426.0], [36.4, 426.0], [36.5, 427.0], [36.6, 428.0], [36.7, 428.0], [36.8, 429.0], [36.9, 429.0], [37.0, 429.0], [37.1, 430.0], [37.2, 431.0], [37.3, 431.0], [37.4, 431.0], [37.5, 432.0], [37.6, 433.0], [37.7, 433.0], [37.8, 433.0], [37.9, 434.0], [38.0, 434.0], [38.1, 435.0], [38.2, 435.0], [38.3, 435.0], [38.4, 436.0], [38.5, 436.0], [38.6, 436.0], [38.7, 436.0], [38.8, 436.0], [38.9, 436.0], [39.0, 436.0], [39.1, 436.0], [39.2, 437.0], [39.3, 437.0], [39.4, 437.0], [39.5, 438.0], [39.6, 439.0], [39.7, 439.0], [39.8, 440.0], [39.9, 441.0], [40.0, 442.0], [40.1, 442.0], [40.2, 443.0], [40.3, 443.0], [40.4, 443.0], [40.5, 444.0], [40.6, 444.0], [40.7, 445.0], [40.8, 445.0], [40.9, 445.0], [41.0, 445.0], [41.1, 445.0], [41.2, 445.0], [41.3, 446.0], [41.4, 447.0], [41.5, 448.0], [41.6, 448.0], [41.7, 449.0], [41.8, 450.0], [41.9, 450.0], [42.0, 450.0], [42.1, 450.0], [42.2, 450.0], [42.3, 450.0], [42.4, 451.0], [42.5, 451.0], [42.6, 452.0], [42.7, 452.0], [42.8, 452.0], [42.9, 452.0], [43.0, 452.0], [43.1, 452.0], [43.2, 453.0], [43.3, 453.0], [43.4, 453.0], [43.5, 453.0], [43.6, 455.0], [43.7, 455.0], [43.8, 455.0], [43.9, 456.0], [44.0, 457.0], [44.1, 458.0], [44.2, 458.0], [44.3, 458.0], [44.4, 460.0], [44.5, 460.0], [44.6, 460.0], [44.7, 460.0], [44.8, 460.0], [44.9, 461.0], [45.0, 461.0], [45.1, 462.0], [45.2, 462.0], [45.3, 462.0], [45.4, 462.0], [45.5, 463.0], [45.6, 463.0], [45.7, 463.0], [45.8, 464.0], [45.9, 464.0], [46.0, 465.0], [46.1, 465.0], [46.2, 466.0], [46.3, 466.0], [46.4, 466.0], [46.5, 466.0], [46.6, 467.0], [46.7, 467.0], [46.8, 467.0], [46.9, 467.0], [47.0, 467.0], [47.1, 467.0], [47.2, 467.0], [47.3, 468.0], [47.4, 470.0], [47.5, 470.0], [47.6, 470.0], [47.7, 470.0], [47.8, 471.0], [47.9, 472.0], [48.0, 472.0], [48.1, 472.0], [48.2, 472.0], [48.3, 474.0], [48.4, 474.0], [48.5, 475.0], [48.6, 475.0], [48.7, 475.0], [48.8, 475.0], [48.9, 476.0], [49.0, 477.0], [49.1, 477.0], [49.2, 477.0], [49.3, 477.0], [49.4, 477.0], [49.5, 477.0], [49.6, 478.0], [49.7, 478.0], [49.8, 479.0], [49.9, 479.0], [50.0, 479.0], [50.1, 480.0], [50.2, 480.0], [50.3, 480.0], [50.4, 480.0], [50.5, 480.0], [50.6, 480.0], [50.7, 480.0], [50.8, 481.0], [50.9, 481.0], [51.0, 481.0], [51.1, 482.0], [51.2, 482.0], [51.3, 483.0], [51.4, 483.0], [51.5, 483.0], [51.6, 483.0], [51.7, 483.0], [51.8, 485.0], [51.9, 485.0], [52.0, 485.0], [52.1, 485.0], [52.2, 486.0], [52.3, 486.0], [52.4, 486.0], [52.5, 486.0], [52.6, 486.0], [52.7, 486.0], [52.8, 487.0], [52.9, 487.0], [53.0, 487.0], [53.1, 487.0], [53.2, 487.0], [53.3, 487.0], [53.4, 488.0], [53.5, 488.0], [53.6, 488.0], [53.7, 489.0], [53.8, 489.0], [53.9, 490.0], [54.0, 490.0], [54.1, 490.0], [54.2, 490.0], [54.3, 491.0], [54.4, 491.0], [54.5, 491.0], [54.6, 492.0], [54.7, 492.0], [54.8, 492.0], [54.9, 492.0], [55.0, 493.0], [55.1, 493.0], [55.2, 493.0], [55.3, 494.0], [55.4, 494.0], [55.5, 494.0], [55.6, 495.0], [55.7, 496.0], [55.8, 496.0], [55.9, 496.0], [56.0, 496.0], [56.1, 496.0], [56.2, 497.0], [56.3, 497.0], [56.4, 497.0], [56.5, 498.0], [56.6, 498.0], [56.7, 498.0], [56.8, 498.0], [56.9, 498.0], [57.0, 498.0], [57.1, 499.0], [57.2, 499.0], [57.3, 499.0], [57.4, 499.0], [57.5, 500.0], [57.6, 500.0], [57.7, 501.0], [57.8, 501.0], [57.9, 502.0], [58.0, 503.0], [58.1, 504.0], [58.2, 504.0], [58.3, 504.0], [58.4, 506.0], [58.5, 506.0], [58.6, 507.0], [58.7, 507.0], [58.8, 508.0], [58.9, 508.0], [59.0, 509.0], [59.1, 509.0], [59.2, 509.0], [59.3, 509.0], [59.4, 509.0], [59.5, 509.0], [59.6, 513.0], [59.7, 513.0], [59.8, 513.0], [59.9, 514.0], [60.0, 515.0], [60.1, 515.0], [60.2, 516.0], [60.3, 517.0], [60.4, 517.0], [60.5, 519.0], [60.6, 520.0], [60.7, 520.0], [60.8, 520.0], [60.9, 520.0], [61.0, 523.0], [61.1, 523.0], [61.2, 523.0], [61.3, 523.0], [61.4, 524.0], [61.5, 524.0], [61.6, 524.0], [61.7, 525.0], [61.8, 525.0], [61.9, 525.0], [62.0, 525.0], [62.1, 526.0], [62.2, 527.0], [62.3, 527.0], [62.4, 527.0], [62.5, 528.0], [62.6, 528.0], [62.7, 528.0], [62.8, 529.0], [62.9, 529.0], [63.0, 531.0], [63.1, 531.0], [63.2, 531.0], [63.3, 531.0], [63.4, 531.0], [63.5, 532.0], [63.6, 532.0], [63.7, 533.0], [63.8, 533.0], [63.9, 534.0], [64.0, 534.0], [64.1, 535.0], [64.2, 535.0], [64.3, 535.0], [64.4, 535.0], [64.5, 535.0], [64.6, 535.0], [64.7, 537.0], [64.8, 538.0], [64.9, 539.0], [65.0, 539.0], [65.1, 539.0], [65.2, 540.0], [65.3, 540.0], [65.4, 540.0], [65.5, 540.0], [65.6, 540.0], [65.7, 540.0], [65.8, 541.0], [65.9, 542.0], [66.0, 544.0], [66.1, 544.0], [66.2, 544.0], [66.3, 545.0], [66.4, 545.0], [66.5, 545.0], [66.6, 547.0], [66.7, 549.0], [66.8, 549.0], [66.9, 549.0], [67.0, 549.0], [67.1, 550.0], [67.2, 550.0], [67.3, 550.0], [67.4, 552.0], [67.5, 553.0], [67.6, 553.0], [67.7, 553.0], [67.8, 554.0], [67.9, 555.0], [68.0, 555.0], [68.1, 555.0], [68.2, 556.0], [68.3, 556.0], [68.4, 556.0], [68.5, 556.0], [68.6, 557.0], [68.7, 557.0], [68.8, 557.0], [68.9, 558.0], [69.0, 559.0], [69.1, 559.0], [69.2, 559.0], [69.3, 559.0], [69.4, 559.0], [69.5, 559.0], [69.6, 560.0], [69.7, 561.0], [69.8, 561.0], [69.9, 561.0], [70.0, 562.0], [70.1, 563.0], [70.2, 563.0], [70.3, 563.0], [70.4, 565.0], [70.5, 565.0], [70.6, 565.0], [70.7, 566.0], [70.8, 567.0], [70.9, 567.0], [71.0, 567.0], [71.1, 567.0], [71.2, 567.0], [71.3, 568.0], [71.4, 568.0], [71.5, 568.0], [71.6, 569.0], [71.7, 569.0], [71.8, 570.0], [71.9, 571.0], [72.0, 572.0], [72.1, 572.0], [72.2, 572.0], [72.3, 573.0], [72.4, 573.0], [72.5, 573.0], [72.6, 575.0], [72.7, 575.0], [72.8, 575.0], [72.9, 575.0], [73.0, 576.0], [73.1, 577.0], [73.2, 577.0], [73.3, 577.0], [73.4, 578.0], [73.5, 578.0], [73.6, 578.0], [73.7, 579.0], [73.8, 580.0], [73.9, 582.0], [74.0, 582.0], [74.1, 583.0], [74.2, 583.0], [74.3, 584.0], [74.4, 584.0], [74.5, 584.0], [74.6, 585.0], [74.7, 585.0], [74.8, 585.0], [74.9, 586.0], [75.0, 587.0], [75.1, 587.0], [75.2, 587.0], [75.3, 588.0], [75.4, 589.0], [75.5, 589.0], [75.6, 590.0], [75.7, 590.0], [75.8, 591.0], [75.9, 591.0], [76.0, 591.0], [76.1, 591.0], [76.2, 591.0], [76.3, 591.0], [76.4, 591.0], [76.5, 593.0], [76.6, 595.0], [76.7, 595.0], [76.8, 595.0], [76.9, 595.0], [77.0, 595.0], [77.1, 596.0], [77.2, 599.0], [77.3, 600.0], [77.4, 600.0], [77.5, 601.0], [77.6, 601.0], [77.7, 601.0], [77.8, 601.0], [77.9, 604.0], [78.0, 605.0], [78.1, 606.0], [78.2, 606.0], [78.3, 607.0], [78.4, 609.0], [78.5, 609.0], [78.6, 610.0], [78.7, 610.0], [78.8, 611.0], [78.9, 611.0], [79.0, 611.0], [79.1, 617.0], [79.2, 617.0], [79.3, 617.0], [79.4, 618.0], [79.5, 623.0], [79.6, 626.0], [79.7, 626.0], [79.8, 626.0], [79.9, 629.0], [80.0, 630.0], [80.1, 630.0], [80.2, 632.0], [80.3, 632.0], [80.4, 632.0], [80.5, 635.0], [80.6, 636.0], [80.7, 636.0], [80.8, 636.0], [80.9, 637.0], [81.0, 637.0], [81.1, 637.0], [81.2, 637.0], [81.3, 639.0], [81.4, 639.0], [81.5, 639.0], [81.6, 639.0], [81.7, 640.0], [81.8, 642.0], [81.9, 642.0], [82.0, 642.0], [82.1, 643.0], [82.2, 643.0], [82.3, 643.0], [82.4, 643.0], [82.5, 643.0], [82.6, 645.0], [82.7, 645.0], [82.8, 645.0], [82.9, 647.0], [83.0, 650.0], [83.1, 650.0], [83.2, 650.0], [83.3, 651.0], [83.4, 651.0], [83.5, 652.0], [83.6, 652.0], [83.7, 653.0], [83.8, 653.0], [83.9, 655.0], [84.0, 657.0], [84.1, 658.0], [84.2, 658.0], [84.3, 660.0], [84.4, 660.0], [84.5, 661.0], [84.6, 661.0], [84.7, 662.0], [84.8, 664.0], [84.9, 665.0], [85.0, 665.0], [85.1, 666.0], [85.2, 670.0], [85.3, 670.0], [85.4, 673.0], [85.5, 674.0], [85.6, 674.0], [85.7, 674.0], [85.8, 676.0], [85.9, 677.0], [86.0, 678.0], [86.1, 678.0], [86.2, 679.0], [86.3, 680.0], [86.4, 681.0], [86.5, 681.0], [86.6, 682.0], [86.7, 684.0], [86.8, 684.0], [86.9, 687.0], [87.0, 688.0], [87.1, 690.0], [87.2, 690.0], [87.3, 691.0], [87.4, 692.0], [87.5, 692.0], [87.6, 692.0], [87.7, 694.0], [87.8, 709.0], [87.9, 710.0], [88.0, 710.0], [88.1, 711.0], [88.2, 714.0], [88.3, 715.0], [88.4, 715.0], [88.5, 716.0], [88.6, 716.0], [88.7, 716.0], [88.8, 721.0], [88.9, 722.0], [89.0, 724.0], [89.1, 724.0], [89.2, 727.0], [89.3, 730.0], [89.4, 732.0], [89.5, 732.0], [89.6, 732.0], [89.7, 736.0], [89.8, 739.0], [89.9, 739.0], [90.0, 751.0], [90.1, 756.0], [90.2, 756.0], [90.3, 757.0], [90.4, 757.0], [90.5, 767.0], [90.6, 767.0], [90.7, 771.0], [90.8, 772.0], [90.9, 775.0], [91.0, 775.0], [91.1, 782.0], [91.2, 786.0], [91.3, 787.0], [91.4, 787.0], [91.5, 790.0], [91.6, 793.0], [91.7, 793.0], [91.8, 807.0], [91.9, 811.0], [92.0, 819.0], [92.1, 819.0], [92.2, 821.0], [92.3, 824.0], [92.4, 828.0], [92.5, 828.0], [92.6, 831.0], [92.7, 845.0], [92.8, 848.0], [92.9, 848.0], [93.0, 850.0], [93.1, 855.0], [93.2, 857.0], [93.3, 857.0], [93.4, 858.0], [93.5, 860.0], [93.6, 860.0], [93.7, 867.0], [93.8, 871.0], [93.9, 876.0], [94.0, 876.0], [94.1, 899.0], [94.2, 905.0], [94.3, 917.0], [94.4, 917.0], [94.5, 918.0], [94.6, 922.0], [94.7, 922.0], [94.8, 922.0], [94.9, 942.0], [95.0, 945.0], [95.1, 945.0], [95.2, 951.0], [95.3, 1011.0], [95.4, 1030.0], [95.5, 1030.0], [95.6, 1033.0], [95.7, 1056.0], [95.8, 1065.0], [95.9, 1065.0], [96.0, 1079.0], [96.1, 1090.0], [96.2, 1095.0], [96.3, 1095.0], [96.4, 1099.0], [96.5, 1113.0], [96.6, 1115.0], [96.7, 1115.0], [96.8, 1176.0], [96.9, 1195.0], [97.0, 1195.0], [97.1, 1211.0], [97.2, 1214.0], [97.3, 1229.0], [97.4, 1229.0], [97.5, 1243.0], [97.6, 1245.0], [97.7, 1258.0], [97.8, 1258.0], [97.9, 1276.0], [98.0, 1344.0], [98.1, 1366.0], [98.2, 1366.0], [98.3, 1381.0], [98.4, 1384.0], [98.5, 1384.0], [98.6, 1479.0], [98.7, 1514.0], [98.8, 1539.0], [98.9, 1539.0], [99.0, 1549.0], [99.1, 1560.0], [99.2, 1609.0], [99.3, 1609.0], [99.4, 2208.0], [99.5, 2335.0], [99.6, 2608.0], [99.7, 2608.0], [99.8, 2666.0], [99.9, 3064.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 207.0, "series": [{"data": [[2200.0, 1.0], [2300.0, 1.0], [600.0, 77.0], [2600.0, 2.0], [700.0, 29.0], [3000.0, 1.0], [200.0, 60.0], [800.0, 18.0], [900.0, 8.0], [1000.0, 9.0], [1100.0, 4.0], [1200.0, 7.0], [300.0, 146.0], [1300.0, 4.0], [1400.0, 1.0], [1500.0, 4.0], [100.0, 9.0], [1600.0, 1.0], [400.0, 207.0], [500.0, 146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 424.0, "series": [{"data": [[0.0, 424.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 301.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.937414965986395, "minX": 1.60421868E12, "maxY": 9.937414965986395, "series": [{"data": [[1.60421868E12, 9.937414965986395]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421868E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 949.5, "series": [{"data": [[8.0, 325.0], [4.0, 313.0], [2.0, 732.0], [1.0, 363.0], [9.0, 949.5], [10.0, 527.0289655172404], [5.0, 445.0], [6.0, 486.0], [3.0, 337.0], [7.0, 369.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.937414965986395, 527.027210884353]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5670.033333333334, "minX": 1.60421868E12, "maxY": 2034046.3166666667, "series": [{"data": [[1.60421868E12, 2034046.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60421868E12, 5670.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421868E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 527.027210884353, "minX": 1.60421868E12, "maxY": 527.027210884353, "series": [{"data": [[1.60421868E12, 527.027210884353]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421868E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 525.7034013605443, "minX": 1.60421868E12, "maxY": 525.7034013605443, "series": [{"data": [[1.60421868E12, 525.7034013605443]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421868E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.14829931972789112, "minX": 1.60421868E12, "maxY": 0.14829931972789112, "series": [{"data": [[1.60421868E12, 0.14829931972789112]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421868E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.60421868E12, "maxY": 3064.0, "series": [{"data": [[1.60421868E12, 3064.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60421868E12, 192.62399982452393]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60421868E12, 194.71840042114258]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60421868E12, 192.99199991226197]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60421868E12, 177.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60421868E12, 479.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421868E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 255.5, "minX": 6.0, "maxY": 1214.0, "series": [{"data": [[9.0, 1214.0], [12.0, 451.0], [14.0, 431.5], [15.0, 500.0], [16.0, 558.0], [18.0, 490.5], [19.0, 528.5], [20.0, 502.5], [21.0, 443.0], [22.0, 386.0], [23.0, 437.5], [6.0, 255.5], [26.0, 328.5], [27.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 255.5, "minX": 6.0, "maxY": 1208.0, "series": [{"data": [[9.0, 1208.0], [12.0, 450.5], [14.0, 431.5], [15.0, 500.0], [16.0, 557.0], [18.0, 490.0], [19.0, 528.0], [20.0, 502.5], [21.0, 442.5], [22.0, 386.0], [23.0, 437.5], [6.0, 255.5], [26.0, 328.5], [27.0, 405.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60421868E12, "maxY": 12.25, "series": [{"data": [[1.60421868E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421868E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60421868E12, "maxY": 12.25, "series": [{"data": [[1.60421868E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421868E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60421868E12, "maxY": 12.25, "series": [{"data": [[1.60421868E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421868E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60421868E12, "maxY": 12.25, "series": [{"data": [[1.60421868E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421868E12, "title": "Total Transactions Per Second"}},
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

