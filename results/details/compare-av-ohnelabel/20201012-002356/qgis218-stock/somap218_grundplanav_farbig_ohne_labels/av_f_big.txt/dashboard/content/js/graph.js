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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 3019.0, "series": [{"data": [[0.0, 181.0], [0.1, 181.0], [0.2, 182.0], [0.3, 182.0], [0.4, 182.0], [0.5, 187.0], [0.6, 188.0], [0.7, 191.0], [0.8, 191.0], [0.9, 191.0], [1.0, 194.0], [1.1, 197.0], [1.2, 197.0], [1.3, 201.0], [1.4, 206.0], [1.5, 207.0], [1.6, 207.0], [1.7, 208.0], [1.8, 208.0], [1.9, 208.0], [2.0, 210.0], [2.1, 211.0], [2.2, 212.0], [2.3, 212.0], [2.4, 213.0], [2.5, 213.0], [2.6, 215.0], [2.7, 215.0], [2.8, 216.0], [2.9, 216.0], [3.0, 220.0], [3.1, 220.0], [3.2, 228.0], [3.3, 229.0], [3.4, 229.0], [3.5, 233.0], [3.6, 234.0], [3.7, 236.0], [3.8, 236.0], [3.9, 236.0], [4.0, 239.0], [4.1, 239.0], [4.2, 239.0], [4.3, 240.0], [4.4, 243.0], [4.5, 247.0], [4.6, 247.0], [4.7, 248.0], [4.8, 251.0], [4.9, 253.0], [5.0, 253.0], [5.1, 254.0], [5.2, 256.0], [5.3, 256.0], [5.4, 259.0], [5.5, 267.0], [5.6, 268.0], [5.7, 268.0], [5.8, 268.0], [5.9, 270.0], [6.0, 271.0], [6.1, 271.0], [6.2, 273.0], [6.3, 275.0], [6.4, 275.0], [6.5, 275.0], [6.6, 277.0], [6.7, 279.0], [6.8, 279.0], [6.9, 281.0], [7.0, 286.0], [7.1, 287.0], [7.2, 287.0], [7.3, 288.0], [7.4, 288.0], [7.5, 289.0], [7.6, 289.0], [7.7, 289.0], [7.8, 290.0], [7.9, 290.0], [8.0, 290.0], [8.1, 292.0], [8.2, 293.0], [8.3, 295.0], [8.4, 295.0], [8.5, 296.0], [8.6, 297.0], [8.7, 297.0], [8.8, 298.0], [8.9, 299.0], [9.0, 300.0], [9.1, 300.0], [9.2, 301.0], [9.3, 301.0], [9.4, 301.0], [9.5, 301.0], [9.6, 301.0], [9.7, 303.0], [9.8, 303.0], [9.9, 303.0], [10.0, 304.0], [10.1, 306.0], [10.2, 306.0], [10.3, 306.0], [10.4, 308.0], [10.5, 308.0], [10.6, 308.0], [10.7, 309.0], [10.8, 310.0], [10.9, 310.0], [11.0, 310.0], [11.1, 312.0], [11.2, 313.0], [11.3, 313.0], [11.4, 313.0], [11.5, 313.0], [11.6, 317.0], [11.7, 317.0], [11.8, 318.0], [11.9, 318.0], [12.0, 318.0], [12.1, 318.0], [12.2, 320.0], [12.3, 323.0], [12.4, 323.0], [12.5, 323.0], [12.6, 324.0], [12.7, 325.0], [12.8, 325.0], [12.9, 325.0], [13.0, 327.0], [13.1, 327.0], [13.2, 327.0], [13.3, 327.0], [13.4, 328.0], [13.5, 329.0], [13.6, 329.0], [13.7, 330.0], [13.8, 330.0], [13.9, 330.0], [14.0, 330.0], [14.1, 331.0], [14.2, 331.0], [14.3, 331.0], [14.4, 331.0], [14.5, 331.0], [14.6, 332.0], [14.7, 332.0], [14.8, 332.0], [14.9, 333.0], [15.0, 333.0], [15.1, 333.0], [15.2, 334.0], [15.3, 334.0], [15.4, 334.0], [15.5, 334.0], [15.6, 335.0], [15.7, 336.0], [15.8, 336.0], [15.9, 336.0], [16.0, 336.0], [16.1, 337.0], [16.2, 337.0], [16.3, 337.0], [16.4, 337.0], [16.5, 338.0], [16.6, 339.0], [16.7, 339.0], [16.8, 340.0], [16.9, 340.0], [17.0, 340.0], [17.1, 342.0], [17.2, 342.0], [17.3, 342.0], [17.4, 342.0], [17.5, 342.0], [17.6, 343.0], [17.7, 343.0], [17.8, 343.0], [17.9, 343.0], [18.0, 344.0], [18.1, 345.0], [18.2, 345.0], [18.3, 345.0], [18.4, 346.0], [18.5, 346.0], [18.6, 346.0], [18.7, 346.0], [18.8, 348.0], [18.9, 348.0], [19.0, 348.0], [19.1, 349.0], [19.2, 349.0], [19.3, 349.0], [19.4, 350.0], [19.5, 351.0], [19.6, 351.0], [19.7, 351.0], [19.8, 351.0], [19.9, 353.0], [20.0, 353.0], [20.1, 353.0], [20.2, 353.0], [20.3, 354.0], [20.4, 354.0], [20.5, 354.0], [20.6, 354.0], [20.7, 354.0], [20.8, 354.0], [20.9, 355.0], [21.0, 355.0], [21.1, 355.0], [21.2, 355.0], [21.3, 355.0], [21.4, 356.0], [21.5, 356.0], [21.6, 356.0], [21.7, 358.0], [21.8, 358.0], [21.9, 358.0], [22.0, 358.0], [22.1, 358.0], [22.2, 358.0], [22.3, 358.0], [22.4, 359.0], [22.5, 359.0], [22.6, 360.0], [22.7, 360.0], [22.8, 361.0], [22.9, 361.0], [23.0, 361.0], [23.1, 361.0], [23.2, 362.0], [23.3, 362.0], [23.4, 362.0], [23.5, 362.0], [23.6, 363.0], [23.7, 364.0], [23.8, 364.0], [23.9, 365.0], [24.0, 365.0], [24.1, 365.0], [24.2, 365.0], [24.3, 366.0], [24.4, 367.0], [24.5, 367.0], [24.6, 367.0], [24.7, 367.0], [24.8, 368.0], [24.9, 368.0], [25.0, 368.0], [25.1, 368.0], [25.2, 369.0], [25.3, 369.0], [25.4, 369.0], [25.5, 369.0], [25.6, 369.0], [25.7, 369.0], [25.8, 370.0], [25.9, 370.0], [26.0, 370.0], [26.1, 370.0], [26.2, 371.0], [26.3, 372.0], [26.4, 372.0], [26.5, 372.0], [26.6, 372.0], [26.7, 373.0], [26.8, 373.0], [26.9, 374.0], [27.0, 374.0], [27.1, 375.0], [27.2, 375.0], [27.3, 375.0], [27.4, 375.0], [27.5, 377.0], [27.6, 377.0], [27.7, 377.0], [27.8, 378.0], [27.9, 380.0], [28.0, 380.0], [28.1, 380.0], [28.2, 380.0], [28.3, 382.0], [28.4, 382.0], [28.5, 383.0], [28.6, 385.0], [28.7, 385.0], [28.8, 385.0], [28.9, 386.0], [29.0, 386.0], [29.1, 386.0], [29.2, 386.0], [29.3, 387.0], [29.4, 387.0], [29.5, 387.0], [29.6, 388.0], [29.7, 389.0], [29.8, 390.0], [29.9, 390.0], [30.0, 390.0], [30.1, 391.0], [30.2, 391.0], [30.3, 392.0], [30.4, 392.0], [30.5, 392.0], [30.6, 392.0], [30.7, 392.0], [30.8, 392.0], [30.9, 393.0], [31.0, 393.0], [31.1, 393.0], [31.2, 393.0], [31.3, 393.0], [31.4, 393.0], [31.5, 393.0], [31.6, 394.0], [31.7, 394.0], [31.8, 395.0], [31.9, 395.0], [32.0, 395.0], [32.1, 395.0], [32.2, 395.0], [32.3, 395.0], [32.4, 395.0], [32.5, 395.0], [32.6, 395.0], [32.7, 396.0], [32.8, 396.0], [32.9, 396.0], [33.0, 397.0], [33.1, 397.0], [33.2, 398.0], [33.3, 398.0], [33.4, 399.0], [33.5, 400.0], [33.6, 400.0], [33.7, 401.0], [33.8, 401.0], [33.9, 401.0], [34.0, 401.0], [34.1, 402.0], [34.2, 402.0], [34.3, 403.0], [34.4, 403.0], [34.5, 403.0], [34.6, 404.0], [34.7, 404.0], [34.8, 404.0], [34.9, 404.0], [35.0, 405.0], [35.1, 405.0], [35.2, 405.0], [35.3, 405.0], [35.4, 407.0], [35.5, 407.0], [35.6, 408.0], [35.7, 409.0], [35.8, 409.0], [35.9, 409.0], [36.0, 409.0], [36.1, 410.0], [36.2, 410.0], [36.3, 410.0], [36.4, 410.0], [36.5, 411.0], [36.6, 411.0], [36.7, 411.0], [36.8, 412.0], [36.9, 413.0], [37.0, 413.0], [37.1, 414.0], [37.2, 415.0], [37.3, 416.0], [37.4, 416.0], [37.5, 416.0], [37.6, 417.0], [37.7, 418.0], [37.8, 418.0], [37.9, 418.0], [38.0, 418.0], [38.1, 418.0], [38.2, 418.0], [38.3, 419.0], [38.4, 419.0], [38.5, 419.0], [38.6, 420.0], [38.7, 421.0], [38.8, 421.0], [38.9, 421.0], [39.0, 422.0], [39.1, 423.0], [39.2, 423.0], [39.3, 423.0], [39.4, 423.0], [39.5, 423.0], [39.6, 423.0], [39.7, 423.0], [39.8, 424.0], [39.9, 424.0], [40.0, 425.0], [40.1, 425.0], [40.2, 425.0], [40.3, 425.0], [40.4, 425.0], [40.5, 425.0], [40.6, 426.0], [40.7, 426.0], [40.8, 426.0], [40.9, 426.0], [41.0, 426.0], [41.1, 427.0], [41.2, 427.0], [41.3, 427.0], [41.4, 428.0], [41.5, 428.0], [41.6, 428.0], [41.7, 429.0], [41.8, 429.0], [41.9, 429.0], [42.0, 429.0], [42.1, 430.0], [42.2, 431.0], [42.3, 431.0], [42.4, 431.0], [42.5, 431.0], [42.6, 432.0], [42.7, 432.0], [42.8, 432.0], [42.9, 434.0], [43.0, 434.0], [43.1, 434.0], [43.2, 434.0], [43.3, 434.0], [43.4, 434.0], [43.5, 434.0], [43.6, 434.0], [43.7, 435.0], [43.8, 435.0], [43.9, 436.0], [44.0, 438.0], [44.1, 438.0], [44.2, 438.0], [44.3, 439.0], [44.4, 440.0], [44.5, 440.0], [44.6, 440.0], [44.7, 441.0], [44.8, 441.0], [44.9, 441.0], [45.0, 441.0], [45.1, 442.0], [45.2, 442.0], [45.3, 442.0], [45.4, 442.0], [45.5, 443.0], [45.6, 443.0], [45.7, 443.0], [45.8, 444.0], [45.9, 445.0], [46.0, 445.0], [46.1, 445.0], [46.2, 445.0], [46.3, 445.0], [46.4, 445.0], [46.5, 445.0], [46.6, 445.0], [46.7, 446.0], [46.8, 446.0], [46.9, 448.0], [47.0, 449.0], [47.1, 449.0], [47.2, 449.0], [47.3, 450.0], [47.4, 450.0], [47.5, 452.0], [47.6, 452.0], [47.7, 452.0], [47.8, 452.0], [47.9, 452.0], [48.0, 452.0], [48.1, 452.0], [48.2, 453.0], [48.3, 454.0], [48.4, 454.0], [48.5, 454.0], [48.6, 454.0], [48.7, 454.0], [48.8, 455.0], [48.9, 455.0], [49.0, 456.0], [49.1, 456.0], [49.2, 457.0], [49.3, 457.0], [49.4, 457.0], [49.5, 457.0], [49.6, 457.0], [49.7, 458.0], [49.8, 458.0], [49.9, 458.0], [50.0, 459.0], [50.1, 459.0], [50.2, 459.0], [50.3, 461.0], [50.4, 461.0], [50.5, 461.0], [50.6, 461.0], [50.7, 462.0], [50.8, 463.0], [50.9, 463.0], [51.0, 463.0], [51.1, 464.0], [51.2, 464.0], [51.3, 464.0], [51.4, 464.0], [51.5, 464.0], [51.6, 464.0], [51.7, 464.0], [51.8, 465.0], [51.9, 465.0], [52.0, 465.0], [52.1, 465.0], [52.2, 465.0], [52.3, 466.0], [52.4, 466.0], [52.5, 466.0], [52.6, 467.0], [52.7, 467.0], [52.8, 467.0], [52.9, 467.0], [53.0, 468.0], [53.1, 468.0], [53.2, 469.0], [53.3, 469.0], [53.4, 469.0], [53.5, 470.0], [53.6, 470.0], [53.7, 470.0], [53.8, 470.0], [53.9, 471.0], [54.0, 471.0], [54.1, 472.0], [54.2, 472.0], [54.3, 473.0], [54.4, 473.0], [54.5, 473.0], [54.6, 475.0], [54.7, 476.0], [54.8, 476.0], [54.9, 476.0], [55.0, 476.0], [55.1, 476.0], [55.2, 478.0], [55.3, 478.0], [55.4, 478.0], [55.5, 478.0], [55.6, 479.0], [55.7, 479.0], [55.8, 479.0], [55.9, 479.0], [56.0, 479.0], [56.1, 480.0], [56.2, 480.0], [56.3, 480.0], [56.4, 480.0], [56.5, 481.0], [56.6, 481.0], [56.7, 481.0], [56.8, 482.0], [56.9, 482.0], [57.0, 482.0], [57.1, 483.0], [57.2, 484.0], [57.3, 484.0], [57.4, 484.0], [57.5, 485.0], [57.6, 486.0], [57.7, 488.0], [57.8, 488.0], [57.9, 488.0], [58.0, 489.0], [58.1, 490.0], [58.2, 490.0], [58.3, 490.0], [58.4, 490.0], [58.5, 490.0], [58.6, 490.0], [58.7, 491.0], [58.8, 492.0], [58.9, 492.0], [59.0, 492.0], [59.1, 492.0], [59.2, 492.0], [59.3, 492.0], [59.4, 492.0], [59.5, 492.0], [59.6, 493.0], [59.7, 493.0], [59.8, 493.0], [59.9, 494.0], [60.0, 495.0], [60.1, 495.0], [60.2, 495.0], [60.3, 495.0], [60.4, 495.0], [60.5, 496.0], [60.6, 497.0], [60.7, 497.0], [60.8, 497.0], [60.9, 498.0], [61.0, 498.0], [61.1, 499.0], [61.2, 499.0], [61.3, 499.0], [61.4, 500.0], [61.5, 500.0], [61.6, 500.0], [61.7, 501.0], [61.8, 501.0], [61.9, 501.0], [62.0, 502.0], [62.1, 502.0], [62.2, 504.0], [62.3, 504.0], [62.4, 506.0], [62.5, 506.0], [62.6, 506.0], [62.7, 506.0], [62.8, 507.0], [62.9, 507.0], [63.0, 508.0], [63.1, 508.0], [63.2, 509.0], [63.3, 509.0], [63.4, 509.0], [63.5, 510.0], [63.6, 510.0], [63.7, 510.0], [63.8, 510.0], [63.9, 510.0], [64.0, 511.0], [64.1, 511.0], [64.2, 511.0], [64.3, 512.0], [64.4, 512.0], [64.5, 512.0], [64.6, 512.0], [64.7, 514.0], [64.8, 514.0], [64.9, 515.0], [65.0, 515.0], [65.1, 517.0], [65.2, 517.0], [65.3, 517.0], [65.4, 518.0], [65.5, 518.0], [65.6, 518.0], [65.7, 518.0], [65.8, 519.0], [65.9, 520.0], [66.0, 520.0], [66.1, 520.0], [66.2, 520.0], [66.3, 521.0], [66.4, 521.0], [66.5, 521.0], [66.6, 522.0], [66.7, 522.0], [66.8, 522.0], [66.9, 522.0], [67.0, 523.0], [67.1, 524.0], [67.2, 524.0], [67.3, 524.0], [67.4, 524.0], [67.5, 524.0], [67.6, 524.0], [67.7, 525.0], [67.8, 525.0], [67.9, 528.0], [68.0, 528.0], [68.1, 529.0], [68.2, 532.0], [68.3, 532.0], [68.4, 532.0], [68.5, 532.0], [68.6, 532.0], [68.7, 532.0], [68.8, 534.0], [68.9, 535.0], [69.0, 536.0], [69.1, 536.0], [69.2, 536.0], [69.3, 536.0], [69.4, 537.0], [69.5, 537.0], [69.6, 538.0], [69.7, 540.0], [69.8, 541.0], [69.9, 541.0], [70.0, 544.0], [70.1, 544.0], [70.2, 544.0], [70.3, 544.0], [70.4, 547.0], [70.5, 549.0], [70.6, 549.0], [70.7, 550.0], [70.8, 550.0], [70.9, 553.0], [71.0, 553.0], [71.1, 554.0], [71.2, 554.0], [71.3, 554.0], [71.4, 554.0], [71.5, 557.0], [71.6, 557.0], [71.7, 557.0], [71.8, 558.0], [71.9, 559.0], [72.0, 559.0], [72.1, 559.0], [72.2, 560.0], [72.3, 560.0], [72.4, 560.0], [72.5, 560.0], [72.6, 560.0], [72.7, 562.0], [72.8, 563.0], [72.9, 563.0], [73.0, 564.0], [73.1, 564.0], [73.2, 566.0], [73.3, 566.0], [73.4, 566.0], [73.5, 566.0], [73.6, 566.0], [73.7, 567.0], [73.8, 568.0], [73.9, 568.0], [74.0, 568.0], [74.1, 570.0], [74.2, 572.0], [74.3, 575.0], [74.4, 575.0], [74.5, 576.0], [74.6, 576.0], [74.7, 576.0], [74.8, 576.0], [74.9, 576.0], [75.0, 576.0], [75.1, 576.0], [75.2, 577.0], [75.3, 578.0], [75.4, 579.0], [75.5, 579.0], [75.6, 579.0], [75.7, 580.0], [75.8, 580.0], [75.9, 580.0], [76.0, 581.0], [76.1, 586.0], [76.2, 586.0], [76.3, 586.0], [76.4, 586.0], [76.5, 586.0], [76.6, 586.0], [76.7, 586.0], [76.8, 588.0], [76.9, 588.0], [77.0, 588.0], [77.1, 590.0], [77.2, 590.0], [77.3, 592.0], [77.4, 592.0], [77.5, 594.0], [77.6, 594.0], [77.7, 595.0], [77.8, 595.0], [77.9, 596.0], [78.0, 598.0], [78.1, 598.0], [78.2, 598.0], [78.3, 602.0], [78.4, 602.0], [78.5, 602.0], [78.6, 602.0], [78.7, 602.0], [78.8, 603.0], [78.9, 603.0], [79.0, 604.0], [79.1, 604.0], [79.2, 604.0], [79.3, 604.0], [79.4, 606.0], [79.5, 607.0], [79.6, 607.0], [79.7, 607.0], [79.8, 608.0], [79.9, 608.0], [80.0, 609.0], [80.1, 609.0], [80.2, 611.0], [80.3, 611.0], [80.4, 611.0], [80.5, 617.0], [80.6, 617.0], [80.7, 617.0], [80.8, 617.0], [80.9, 623.0], [81.0, 623.0], [81.1, 624.0], [81.2, 624.0], [81.3, 624.0], [81.4, 625.0], [81.5, 626.0], [81.6, 626.0], [81.7, 626.0], [81.8, 629.0], [81.9, 629.0], [82.0, 629.0], [82.1, 630.0], [82.2, 632.0], [82.3, 632.0], [82.4, 633.0], [82.5, 634.0], [82.6, 635.0], [82.7, 635.0], [82.8, 635.0], [82.9, 638.0], [83.0, 638.0], [83.1, 638.0], [83.2, 640.0], [83.3, 641.0], [83.4, 641.0], [83.5, 642.0], [83.6, 642.0], [83.7, 643.0], [83.8, 643.0], [83.9, 643.0], [84.0, 644.0], [84.1, 644.0], [84.2, 644.0], [84.3, 644.0], [84.4, 645.0], [84.5, 646.0], [84.6, 646.0], [84.7, 647.0], [84.8, 648.0], [84.9, 649.0], [85.0, 649.0], [85.1, 649.0], [85.2, 649.0], [85.3, 649.0], [85.4, 651.0], [85.5, 651.0], [85.6, 653.0], [85.7, 653.0], [85.8, 658.0], [85.9, 658.0], [86.0, 663.0], [86.1, 663.0], [86.2, 664.0], [86.3, 666.0], [86.4, 668.0], [86.5, 668.0], [86.6, 670.0], [86.7, 672.0], [86.8, 672.0], [86.9, 672.0], [87.0, 672.0], [87.1, 675.0], [87.2, 675.0], [87.3, 676.0], [87.4, 678.0], [87.5, 679.0], [87.6, 679.0], [87.7, 679.0], [87.8, 680.0], [87.9, 680.0], [88.0, 680.0], [88.1, 687.0], [88.2, 687.0], [88.3, 688.0], [88.4, 688.0], [88.5, 689.0], [88.6, 694.0], [88.7, 694.0], [88.8, 696.0], [88.9, 700.0], [89.0, 701.0], [89.1, 701.0], [89.2, 702.0], [89.3, 718.0], [89.4, 720.0], [89.5, 720.0], [89.6, 721.0], [89.7, 722.0], [89.8, 723.0], [89.9, 723.0], [90.0, 724.0], [90.1, 725.0], [90.2, 725.0], [90.3, 726.0], [90.4, 736.0], [90.5, 736.0], [90.6, 736.0], [90.7, 736.0], [90.8, 737.0], [90.9, 740.0], [91.0, 740.0], [91.1, 741.0], [91.2, 745.0], [91.3, 746.0], [91.4, 746.0], [91.5, 747.0], [91.6, 747.0], [91.7, 747.0], [91.8, 747.0], [91.9, 759.0], [92.0, 764.0], [92.1, 764.0], [92.2, 773.0], [92.3, 777.0], [92.4, 782.0], [92.5, 782.0], [92.6, 792.0], [92.7, 794.0], [92.8, 798.0], [92.9, 798.0], [93.0, 808.0], [93.1, 818.0], [93.2, 821.0], [93.3, 821.0], [93.4, 822.0], [93.5, 832.0], [93.6, 832.0], [93.7, 838.0], [93.8, 846.0], [93.9, 859.0], [94.0, 859.0], [94.1, 871.0], [94.2, 897.0], [94.3, 897.0], [94.4, 897.0], [94.5, 907.0], [94.6, 907.0], [94.7, 909.0], [94.8, 909.0], [94.9, 911.0], [95.0, 926.0], [95.1, 926.0], [95.2, 936.0], [95.3, 941.0], [95.4, 943.0], [95.5, 943.0], [95.6, 948.0], [95.7, 949.0], [95.8, 956.0], [95.9, 956.0], [96.0, 964.0], [96.1, 992.0], [96.2, 1024.0], [96.3, 1024.0], [96.4, 1034.0], [96.5, 1037.0], [96.6, 1042.0], [96.7, 1042.0], [96.8, 1084.0], [96.9, 1102.0], [97.0, 1102.0], [97.1, 1110.0], [97.2, 1137.0], [97.3, 1163.0], [97.4, 1163.0], [97.5, 1186.0], [97.6, 1190.0], [97.7, 1228.0], [97.8, 1228.0], [97.9, 1244.0], [98.0, 1244.0], [98.1, 1262.0], [98.2, 1262.0], [98.3, 1274.0], [98.4, 1281.0], [98.5, 1281.0], [98.6, 1308.0], [98.7, 1372.0], [98.8, 1402.0], [98.9, 1402.0], [99.0, 1496.0], [99.1, 1541.0], [99.2, 1553.0], [99.3, 1553.0], [99.4, 1874.0], [99.5, 2103.0], [99.6, 2740.0], [99.7, 2740.0], [99.8, 2746.0], [99.9, 3019.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 205.0, "series": [{"data": [[2100.0, 1.0], [600.0, 78.0], [2700.0, 2.0], [700.0, 30.0], [3000.0, 1.0], [200.0, 57.0], [800.0, 11.0], [900.0, 13.0], [1000.0, 5.0], [1100.0, 6.0], [300.0, 180.0], [1200.0, 6.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 2.0], [400.0, 205.0], [100.0, 9.0], [1800.0, 1.0], [500.0, 124.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 453.0, "series": [{"data": [[0.0, 453.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 275.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.937414965986395, "minX": 1.60246224E12, "maxY": 9.937414965986395, "series": [{"data": [[1.60246224E12, 9.937414965986395]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246224E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 301.0, "minX": 1.0, "maxY": 794.0, "series": [{"data": [[8.0, 442.0], [4.0, 386.0], [2.0, 348.0], [1.0, 794.0], [9.0, 494.0], [10.0, 510.3972413793102], [5.0, 301.0], [6.0, 329.0], [3.0, 303.0], [7.0, 355.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.937414965986395, 509.22993197278925]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5670.033333333334, "minX": 1.60246224E12, "maxY": 2034046.3166666667, "series": [{"data": [[1.60246224E12, 2034046.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246224E12, 5670.033333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246224E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 509.22993197278925, "minX": 1.60246224E12, "maxY": 509.22993197278925, "series": [{"data": [[1.60246224E12, 509.22993197278925]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246224E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 508.21360544217634, "minX": 1.60246224E12, "maxY": 508.21360544217634, "series": [{"data": [[1.60246224E12, 508.21360544217634]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246224E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10204081632653074, "minX": 1.60246224E12, "maxY": 0.10204081632653074, "series": [{"data": [[1.60246224E12, 0.10204081632653074]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246224E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60246224E12, "maxY": 3019.0, "series": [{"data": [[1.60246224E12, 3019.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246224E12, 191.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246224E12, 191.8592002105713]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246224E12, 191.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246224E12, 181.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246224E12, 459.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246224E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 351.5, "minX": 4.0, "maxY": 590.5, "series": [{"data": [[10.0, 590.5], [13.0, 479.0], [14.0, 351.5], [4.0, 476.0], [16.0, 513.5], [17.0, 478.5], [18.0, 496.5], [19.0, 509.0], [20.0, 482.0], [21.0, 512.0], [22.0, 446.5], [23.0, 365.0], [25.0, 367.0], [27.0, 392.0], [28.0, 405.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 351.5, "minX": 4.0, "maxY": 589.5, "series": [{"data": [[10.0, 589.5], [13.0, 478.0], [14.0, 351.5], [4.0, 473.5], [16.0, 512.5], [17.0, 478.0], [18.0, 495.5], [19.0, 508.0], [20.0, 481.5], [21.0, 511.0], [22.0, 446.0], [23.0, 365.0], [25.0, 366.0], [27.0, 391.0], [28.0, 404.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60246224E12, "maxY": 12.25, "series": [{"data": [[1.60246224E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246224E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60246224E12, "maxY": 12.25, "series": [{"data": [[1.60246224E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246224E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60246224E12, "maxY": 12.25, "series": [{"data": [[1.60246224E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246224E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60246224E12, "maxY": 12.25, "series": [{"data": [[1.60246224E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246224E12, "title": "Total Transactions Per Second"}},
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

