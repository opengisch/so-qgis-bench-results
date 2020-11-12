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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 2883.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 175.0], [0.3, 178.0], [0.4, 178.0], [0.5, 179.0], [0.6, 182.0], [0.7, 184.0], [0.8, 184.0], [0.9, 185.0], [1.0, 187.0], [1.1, 189.0], [1.2, 189.0], [1.3, 189.0], [1.4, 190.0], [1.5, 190.0], [1.6, 190.0], [1.7, 193.0], [1.8, 193.0], [1.9, 193.0], [2.0, 195.0], [2.1, 200.0], [2.2, 202.0], [2.3, 202.0], [2.4, 204.0], [2.5, 208.0], [2.6, 214.0], [2.7, 214.0], [2.8, 215.0], [2.9, 218.0], [3.0, 221.0], [3.1, 221.0], [3.2, 221.0], [3.3, 221.0], [3.4, 221.0], [3.5, 223.0], [3.6, 225.0], [3.7, 227.0], [3.8, 227.0], [3.9, 232.0], [4.0, 233.0], [4.1, 237.0], [4.2, 237.0], [4.3, 240.0], [4.4, 243.0], [4.5, 243.0], [4.6, 243.0], [4.7, 244.0], [4.8, 245.0], [4.9, 248.0], [5.0, 248.0], [5.1, 251.0], [5.2, 254.0], [5.3, 254.0], [5.4, 255.0], [5.5, 256.0], [5.6, 258.0], [5.7, 258.0], [5.8, 259.0], [5.9, 260.0], [6.0, 262.0], [6.1, 262.0], [6.2, 265.0], [6.3, 268.0], [6.4, 268.0], [6.5, 268.0], [6.6, 269.0], [6.7, 270.0], [6.8, 270.0], [6.9, 270.0], [7.0, 270.0], [7.1, 271.0], [7.2, 271.0], [7.3, 271.0], [7.4, 272.0], [7.5, 274.0], [7.6, 274.0], [7.7, 274.0], [7.8, 275.0], [7.9, 276.0], [8.0, 276.0], [8.1, 277.0], [8.2, 277.0], [8.3, 278.0], [8.4, 278.0], [8.5, 278.0], [8.6, 279.0], [8.7, 279.0], [8.8, 279.0], [8.9, 281.0], [9.0, 287.0], [9.1, 287.0], [9.2, 287.0], [9.3, 287.0], [9.4, 290.0], [9.5, 290.0], [9.6, 291.0], [9.7, 294.0], [9.8, 296.0], [9.9, 296.0], [10.0, 297.0], [10.1, 299.0], [10.2, 299.0], [10.3, 300.0], [10.4, 302.0], [10.5, 302.0], [10.6, 302.0], [10.7, 302.0], [10.8, 303.0], [10.9, 303.0], [11.0, 303.0], [11.1, 303.0], [11.2, 304.0], [11.3, 304.0], [11.4, 304.0], [11.5, 304.0], [11.6, 305.0], [11.7, 305.0], [11.8, 305.0], [11.9, 306.0], [12.0, 306.0], [12.1, 306.0], [12.2, 307.0], [12.3, 308.0], [12.4, 309.0], [12.5, 309.0], [12.6, 310.0], [12.7, 312.0], [12.8, 312.0], [12.9, 312.0], [13.0, 312.0], [13.1, 313.0], [13.2, 314.0], [13.3, 314.0], [13.4, 314.0], [13.5, 316.0], [13.6, 316.0], [13.7, 317.0], [13.8, 317.0], [13.9, 318.0], [14.0, 318.0], [14.1, 319.0], [14.2, 323.0], [14.3, 324.0], [14.4, 324.0], [14.5, 324.0], [14.6, 325.0], [14.7, 325.0], [14.8, 325.0], [14.9, 325.0], [15.0, 326.0], [15.1, 326.0], [15.2, 326.0], [15.3, 328.0], [15.4, 328.0], [15.5, 328.0], [15.6, 328.0], [15.7, 329.0], [15.8, 333.0], [15.9, 333.0], [16.0, 333.0], [16.1, 334.0], [16.2, 334.0], [16.3, 334.0], [16.4, 334.0], [16.5, 335.0], [16.6, 335.0], [16.7, 335.0], [16.8, 336.0], [16.9, 336.0], [17.0, 336.0], [17.1, 336.0], [17.2, 336.0], [17.3, 337.0], [17.4, 337.0], [17.5, 337.0], [17.6, 338.0], [17.7, 338.0], [17.8, 338.0], [17.9, 338.0], [18.0, 339.0], [18.1, 340.0], [18.2, 340.0], [18.3, 341.0], [18.4, 341.0], [18.5, 341.0], [18.6, 341.0], [18.7, 341.0], [18.8, 342.0], [18.9, 342.0], [19.0, 343.0], [19.1, 344.0], [19.2, 345.0], [19.3, 345.0], [19.4, 345.0], [19.5, 347.0], [19.6, 348.0], [19.7, 348.0], [19.8, 348.0], [19.9, 348.0], [20.0, 348.0], [20.1, 348.0], [20.2, 349.0], [20.3, 351.0], [20.4, 351.0], [20.5, 351.0], [20.6, 351.0], [20.7, 354.0], [20.8, 354.0], [20.9, 354.0], [21.0, 354.0], [21.1, 355.0], [21.2, 355.0], [21.3, 355.0], [21.4, 355.0], [21.5, 356.0], [21.6, 356.0], [21.7, 356.0], [21.8, 356.0], [21.9, 356.0], [22.0, 357.0], [22.1, 358.0], [22.2, 358.0], [22.3, 358.0], [22.4, 359.0], [22.5, 359.0], [22.6, 359.0], [22.7, 359.0], [22.8, 359.0], [22.9, 360.0], [23.0, 361.0], [23.1, 361.0], [23.2, 361.0], [23.3, 362.0], [23.4, 362.0], [23.5, 363.0], [23.6, 363.0], [23.7, 364.0], [23.8, 364.0], [23.9, 364.0], [24.0, 366.0], [24.1, 366.0], [24.2, 366.0], [24.3, 367.0], [24.4, 368.0], [24.5, 368.0], [24.6, 368.0], [24.7, 368.0], [24.8, 368.0], [24.9, 369.0], [25.0, 369.0], [25.1, 369.0], [25.2, 370.0], [25.3, 370.0], [25.4, 371.0], [25.5, 371.0], [25.6, 372.0], [25.7, 372.0], [25.8, 372.0], [25.9, 372.0], [26.0, 374.0], [26.1, 374.0], [26.2, 375.0], [26.3, 375.0], [26.4, 376.0], [26.5, 376.0], [26.6, 376.0], [26.7, 376.0], [26.8, 376.0], [26.9, 376.0], [27.0, 378.0], [27.1, 378.0], [27.2, 378.0], [27.3, 378.0], [27.4, 379.0], [27.5, 379.0], [27.6, 379.0], [27.7, 379.0], [27.8, 379.0], [27.9, 380.0], [28.0, 380.0], [28.1, 380.0], [28.2, 381.0], [28.3, 382.0], [28.4, 382.0], [28.5, 382.0], [28.6, 383.0], [28.7, 383.0], [28.8, 383.0], [28.9, 383.0], [29.0, 384.0], [29.1, 384.0], [29.2, 384.0], [29.3, 384.0], [29.4, 385.0], [29.5, 385.0], [29.6, 385.0], [29.7, 385.0], [29.8, 386.0], [29.9, 386.0], [30.0, 386.0], [30.1, 387.0], [30.2, 387.0], [30.3, 387.0], [30.4, 388.0], [30.5, 389.0], [30.6, 389.0], [30.7, 389.0], [30.8, 390.0], [30.9, 390.0], [31.0, 390.0], [31.1, 391.0], [31.2, 391.0], [31.3, 392.0], [31.4, 392.0], [31.5, 392.0], [31.6, 392.0], [31.7, 392.0], [31.8, 393.0], [31.9, 394.0], [32.0, 394.0], [32.1, 394.0], [32.2, 395.0], [32.3, 395.0], [32.4, 395.0], [32.5, 395.0], [32.6, 396.0], [32.7, 396.0], [32.8, 397.0], [32.9, 397.0], [33.0, 398.0], [33.1, 398.0], [33.2, 399.0], [33.3, 399.0], [33.4, 401.0], [33.5, 401.0], [33.6, 401.0], [33.7, 402.0], [33.8, 402.0], [33.9, 402.0], [34.0, 402.0], [34.1, 403.0], [34.2, 403.0], [34.3, 404.0], [34.4, 404.0], [34.5, 404.0], [34.6, 405.0], [34.7, 406.0], [34.8, 406.0], [34.9, 406.0], [35.0, 406.0], [35.1, 406.0], [35.2, 407.0], [35.3, 407.0], [35.4, 409.0], [35.5, 409.0], [35.6, 409.0], [35.7, 409.0], [35.8, 410.0], [35.9, 410.0], [36.0, 411.0], [36.1, 411.0], [36.2, 411.0], [36.3, 411.0], [36.4, 412.0], [36.5, 413.0], [36.6, 414.0], [36.7, 414.0], [36.8, 414.0], [36.9, 414.0], [37.0, 414.0], [37.1, 414.0], [37.2, 415.0], [37.3, 416.0], [37.4, 416.0], [37.5, 417.0], [37.6, 417.0], [37.7, 417.0], [37.8, 417.0], [37.9, 418.0], [38.0, 418.0], [38.1, 418.0], [38.2, 418.0], [38.3, 418.0], [38.4, 418.0], [38.5, 418.0], [38.6, 418.0], [38.7, 418.0], [38.8, 419.0], [38.9, 419.0], [39.0, 419.0], [39.1, 419.0], [39.2, 419.0], [39.3, 419.0], [39.4, 420.0], [39.5, 420.0], [39.6, 422.0], [39.7, 422.0], [39.8, 422.0], [39.9, 423.0], [40.0, 423.0], [40.1, 423.0], [40.2, 424.0], [40.3, 424.0], [40.4, 424.0], [40.5, 426.0], [40.6, 426.0], [40.7, 426.0], [40.8, 426.0], [40.9, 426.0], [41.0, 427.0], [41.1, 427.0], [41.2, 427.0], [41.3, 427.0], [41.4, 427.0], [41.5, 427.0], [41.6, 427.0], [41.7, 429.0], [41.8, 429.0], [41.9, 429.0], [42.0, 430.0], [42.1, 431.0], [42.2, 431.0], [42.3, 431.0], [42.4, 432.0], [42.5, 432.0], [42.6, 433.0], [42.7, 433.0], [42.8, 433.0], [42.9, 434.0], [43.0, 437.0], [43.1, 437.0], [43.2, 437.0], [43.3, 437.0], [43.4, 437.0], [43.5, 438.0], [43.6, 438.0], [43.7, 438.0], [43.8, 438.0], [43.9, 438.0], [44.0, 439.0], [44.1, 439.0], [44.2, 439.0], [44.3, 439.0], [44.4, 439.0], [44.5, 439.0], [44.6, 439.0], [44.7, 440.0], [44.8, 441.0], [44.9, 441.0], [45.0, 441.0], [45.1, 441.0], [45.2, 441.0], [45.3, 441.0], [45.4, 441.0], [45.5, 441.0], [45.6, 442.0], [45.7, 442.0], [45.8, 442.0], [45.9, 442.0], [46.0, 443.0], [46.1, 443.0], [46.2, 443.0], [46.3, 444.0], [46.4, 444.0], [46.5, 444.0], [46.6, 444.0], [46.7, 445.0], [46.8, 445.0], [46.9, 447.0], [47.0, 448.0], [47.1, 448.0], [47.2, 448.0], [47.3, 448.0], [47.4, 449.0], [47.5, 450.0], [47.6, 450.0], [47.7, 450.0], [47.8, 451.0], [47.9, 451.0], [48.0, 451.0], [48.1, 451.0], [48.2, 452.0], [48.3, 452.0], [48.4, 452.0], [48.5, 452.0], [48.6, 453.0], [48.7, 453.0], [48.8, 453.0], [48.9, 454.0], [49.0, 455.0], [49.1, 455.0], [49.2, 456.0], [49.3, 456.0], [49.4, 456.0], [49.5, 456.0], [49.6, 456.0], [49.7, 458.0], [49.8, 458.0], [49.9, 458.0], [50.0, 458.0], [50.1, 458.0], [50.2, 458.0], [50.3, 458.0], [50.4, 458.0], [50.5, 459.0], [50.6, 459.0], [50.7, 460.0], [50.8, 461.0], [50.9, 461.0], [51.0, 461.0], [51.1, 461.0], [51.2, 461.0], [51.3, 462.0], [51.4, 462.0], [51.5, 462.0], [51.6, 463.0], [51.7, 463.0], [51.8, 463.0], [51.9, 463.0], [52.0, 463.0], [52.1, 463.0], [52.2, 463.0], [52.3, 464.0], [52.4, 464.0], [52.5, 464.0], [52.6, 464.0], [52.7, 465.0], [52.8, 465.0], [52.9, 465.0], [53.0, 465.0], [53.1, 465.0], [53.2, 465.0], [53.3, 465.0], [53.4, 466.0], [53.5, 466.0], [53.6, 466.0], [53.7, 467.0], [53.8, 467.0], [53.9, 468.0], [54.0, 468.0], [54.1, 468.0], [54.2, 469.0], [54.3, 470.0], [54.4, 470.0], [54.5, 471.0], [54.6, 471.0], [54.7, 471.0], [54.8, 471.0], [54.9, 472.0], [55.0, 472.0], [55.1, 472.0], [55.2, 472.0], [55.3, 472.0], [55.4, 473.0], [55.5, 473.0], [55.6, 473.0], [55.7, 474.0], [55.8, 475.0], [55.9, 475.0], [56.0, 475.0], [56.1, 475.0], [56.2, 475.0], [56.3, 475.0], [56.4, 476.0], [56.5, 476.0], [56.6, 477.0], [56.7, 477.0], [56.8, 477.0], [56.9, 478.0], [57.0, 478.0], [57.1, 478.0], [57.2, 479.0], [57.3, 479.0], [57.4, 479.0], [57.5, 480.0], [57.6, 480.0], [57.7, 480.0], [57.8, 480.0], [57.9, 482.0], [58.0, 483.0], [58.1, 483.0], [58.2, 483.0], [58.3, 484.0], [58.4, 485.0], [58.5, 485.0], [58.6, 486.0], [58.7, 486.0], [58.8, 487.0], [58.9, 487.0], [59.0, 487.0], [59.1, 487.0], [59.2, 488.0], [59.3, 488.0], [59.4, 488.0], [59.5, 489.0], [59.6, 490.0], [59.7, 490.0], [59.8, 490.0], [59.9, 491.0], [60.0, 492.0], [60.1, 492.0], [60.2, 492.0], [60.3, 492.0], [60.4, 492.0], [60.5, 493.0], [60.6, 493.0], [60.7, 494.0], [60.8, 494.0], [60.9, 495.0], [61.0, 495.0], [61.1, 495.0], [61.2, 495.0], [61.3, 496.0], [61.4, 496.0], [61.5, 497.0], [61.6, 497.0], [61.7, 497.0], [61.8, 497.0], [61.9, 497.0], [62.0, 498.0], [62.1, 499.0], [62.2, 499.0], [62.3, 499.0], [62.4, 499.0], [62.5, 499.0], [62.6, 499.0], [62.7, 499.0], [62.8, 500.0], [62.9, 500.0], [63.0, 500.0], [63.1, 500.0], [63.2, 500.0], [63.3, 501.0], [63.4, 501.0], [63.5, 501.0], [63.6, 501.0], [63.7, 502.0], [63.8, 502.0], [63.9, 503.0], [64.0, 505.0], [64.1, 505.0], [64.2, 505.0], [64.3, 506.0], [64.4, 507.0], [64.5, 509.0], [64.6, 509.0], [64.7, 509.0], [64.8, 511.0], [64.9, 511.0], [65.0, 511.0], [65.1, 511.0], [65.2, 511.0], [65.3, 511.0], [65.4, 511.0], [65.5, 512.0], [65.6, 513.0], [65.7, 513.0], [65.8, 513.0], [65.9, 513.0], [66.0, 514.0], [66.1, 514.0], [66.2, 515.0], [66.3, 515.0], [66.4, 517.0], [66.5, 517.0], [66.6, 518.0], [66.7, 518.0], [66.8, 518.0], [66.9, 519.0], [67.0, 519.0], [67.1, 520.0], [67.2, 520.0], [67.3, 521.0], [67.4, 522.0], [67.5, 522.0], [67.6, 522.0], [67.7, 522.0], [67.8, 523.0], [67.9, 523.0], [68.0, 523.0], [68.1, 524.0], [68.2, 524.0], [68.3, 524.0], [68.4, 524.0], [68.5, 525.0], [68.6, 525.0], [68.7, 525.0], [68.8, 526.0], [68.9, 528.0], [69.0, 529.0], [69.1, 529.0], [69.2, 529.0], [69.3, 529.0], [69.4, 529.0], [69.5, 529.0], [69.6, 530.0], [69.7, 530.0], [69.8, 530.0], [69.9, 530.0], [70.0, 532.0], [70.1, 532.0], [70.2, 532.0], [70.3, 532.0], [70.4, 533.0], [70.5, 533.0], [70.6, 533.0], [70.7, 534.0], [70.8, 536.0], [70.9, 537.0], [71.0, 537.0], [71.1, 538.0], [71.2, 538.0], [71.3, 538.0], [71.4, 538.0], [71.5, 539.0], [71.6, 541.0], [71.7, 541.0], [71.8, 541.0], [71.9, 542.0], [72.0, 543.0], [72.1, 543.0], [72.2, 543.0], [72.3, 545.0], [72.4, 546.0], [72.5, 546.0], [72.6, 547.0], [72.7, 548.0], [72.8, 552.0], [72.9, 552.0], [73.0, 553.0], [73.1, 553.0], [73.2, 554.0], [73.3, 554.0], [73.4, 555.0], [73.5, 557.0], [73.6, 557.0], [73.7, 557.0], [73.8, 558.0], [73.9, 560.0], [74.0, 560.0], [74.1, 563.0], [74.2, 564.0], [74.3, 565.0], [74.4, 565.0], [74.5, 565.0], [74.6, 565.0], [74.7, 565.0], [74.8, 565.0], [74.9, 566.0], [75.0, 570.0], [75.1, 570.0], [75.2, 571.0], [75.3, 572.0], [75.4, 572.0], [75.5, 572.0], [75.6, 574.0], [75.7, 575.0], [75.8, 576.0], [75.9, 576.0], [76.0, 576.0], [76.1, 577.0], [76.2, 579.0], [76.3, 579.0], [76.4, 579.0], [76.5, 579.0], [76.6, 579.0], [76.7, 579.0], [76.8, 580.0], [76.9, 580.0], [77.0, 580.0], [77.1, 580.0], [77.2, 581.0], [77.3, 581.0], [77.4, 581.0], [77.5, 581.0], [77.6, 581.0], [77.7, 583.0], [77.8, 583.0], [77.9, 584.0], [78.0, 586.0], [78.1, 587.0], [78.2, 587.0], [78.3, 588.0], [78.4, 589.0], [78.5, 589.0], [78.6, 589.0], [78.7, 591.0], [78.8, 593.0], [78.9, 593.0], [79.0, 593.0], [79.1, 594.0], [79.2, 595.0], [79.3, 595.0], [79.4, 596.0], [79.5, 597.0], [79.6, 597.0], [79.7, 597.0], [79.8, 598.0], [79.9, 598.0], [80.0, 599.0], [80.1, 599.0], [80.2, 600.0], [80.3, 601.0], [80.4, 601.0], [80.5, 601.0], [80.6, 603.0], [80.7, 604.0], [80.8, 604.0], [80.9, 605.0], [81.0, 605.0], [81.1, 608.0], [81.2, 608.0], [81.3, 609.0], [81.4, 609.0], [81.5, 610.0], [81.6, 610.0], [81.7, 614.0], [81.8, 615.0], [81.9, 615.0], [82.0, 617.0], [82.1, 618.0], [82.2, 618.0], [82.3, 618.0], [82.4, 619.0], [82.5, 620.0], [82.6, 620.0], [82.7, 620.0], [82.8, 620.0], [82.9, 620.0], [83.0, 621.0], [83.1, 621.0], [83.2, 623.0], [83.3, 627.0], [83.4, 627.0], [83.5, 629.0], [83.6, 630.0], [83.7, 631.0], [83.8, 631.0], [83.9, 633.0], [84.0, 635.0], [84.1, 636.0], [84.2, 636.0], [84.3, 636.0], [84.4, 641.0], [84.5, 644.0], [84.6, 644.0], [84.7, 645.0], [84.8, 645.0], [84.9, 647.0], [85.0, 647.0], [85.1, 648.0], [85.2, 650.0], [85.3, 650.0], [85.4, 650.0], [85.5, 651.0], [85.6, 654.0], [85.7, 654.0], [85.8, 655.0], [85.9, 655.0], [86.0, 656.0], [86.1, 656.0], [86.2, 657.0], [86.3, 658.0], [86.4, 660.0], [86.5, 660.0], [86.6, 662.0], [86.7, 663.0], [86.8, 663.0], [86.9, 664.0], [87.0, 665.0], [87.1, 666.0], [87.2, 666.0], [87.3, 666.0], [87.4, 669.0], [87.5, 671.0], [87.6, 671.0], [87.7, 675.0], [87.8, 677.0], [87.9, 678.0], [88.0, 678.0], [88.1, 680.0], [88.2, 681.0], [88.3, 681.0], [88.4, 681.0], [88.5, 684.0], [88.6, 687.0], [88.7, 687.0], [88.8, 688.0], [88.9, 688.0], [89.0, 690.0], [89.1, 690.0], [89.2, 692.0], [89.3, 692.0], [89.4, 702.0], [89.5, 702.0], [89.6, 703.0], [89.7, 706.0], [89.8, 708.0], [89.9, 708.0], [90.0, 712.0], [90.1, 716.0], [90.2, 716.0], [90.3, 717.0], [90.4, 720.0], [90.5, 721.0], [90.6, 721.0], [90.7, 721.0], [90.8, 728.0], [90.9, 728.0], [91.0, 728.0], [91.1, 731.0], [91.2, 733.0], [91.3, 741.0], [91.4, 741.0], [91.5, 747.0], [91.6, 756.0], [91.7, 756.0], [91.8, 756.0], [91.9, 761.0], [92.0, 767.0], [92.1, 767.0], [92.2, 768.0], [92.3, 769.0], [92.4, 773.0], [92.5, 773.0], [92.6, 783.0], [92.7, 787.0], [92.8, 789.0], [92.9, 789.0], [93.0, 792.0], [93.1, 797.0], [93.2, 811.0], [93.3, 811.0], [93.4, 816.0], [93.5, 816.0], [93.6, 816.0], [93.7, 827.0], [93.8, 830.0], [93.9, 855.0], [94.0, 855.0], [94.1, 871.0], [94.2, 891.0], [94.3, 893.0], [94.4, 893.0], [94.5, 896.0], [94.6, 908.0], [94.7, 913.0], [94.8, 913.0], [94.9, 916.0], [95.0, 927.0], [95.1, 927.0], [95.2, 939.0], [95.3, 940.0], [95.4, 944.0], [95.5, 944.0], [95.6, 949.0], [95.7, 951.0], [95.8, 956.0], [95.9, 956.0], [96.0, 956.0], [96.1, 969.0], [96.2, 978.0], [96.3, 978.0], [96.4, 979.0], [96.5, 993.0], [96.6, 1001.0], [96.7, 1001.0], [96.8, 1019.0], [96.9, 1029.0], [97.0, 1029.0], [97.1, 1037.0], [97.2, 1070.0], [97.3, 1074.0], [97.4, 1074.0], [97.5, 1078.0], [97.6, 1106.0], [97.7, 1114.0], [97.8, 1114.0], [97.9, 1129.0], [98.0, 1136.0], [98.1, 1140.0], [98.2, 1140.0], [98.3, 1158.0], [98.4, 1201.0], [98.5, 1201.0], [98.6, 1204.0], [98.7, 1210.0], [98.8, 1261.0], [98.9, 1261.0], [99.0, 1278.0], [99.1, 1292.0], [99.2, 1431.0], [99.3, 1431.0], [99.4, 1483.0], [99.5, 2089.0], [99.6, 2474.0], [99.7, 2474.0], [99.8, 2805.0], [99.9, 2883.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 216.0, "series": [{"data": [[600.0, 68.0], [2400.0, 1.0], [700.0, 28.0], [2800.0, 2.0], [200.0, 60.0], [800.0, 10.0], [900.0, 15.0], [1000.0, 7.0], [1100.0, 6.0], [300.0, 170.0], [1200.0, 6.0], [1400.0, 2.0], [400.0, 216.0], [100.0, 15.0], [500.0, 128.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 465.0, "series": [{"data": [[0.0, 465.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 266.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.91588785046729, "minX": 1.6050582E12, "maxY": 9.928343949044587, "series": [{"data": [[1.6050582E12, 9.91588785046729], [1.60505826E12, 9.928343949044587]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505826E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 281.5, "minX": 1.0, "maxY": 816.0, "series": [{"data": [[8.0, 414.0], [4.0, 348.0], [2.0, 312.0], [1.0, 816.0], [9.0, 414.0], [5.0, 281.5], [10.0, 501.524204702628], [6.0, 398.0], [3.0, 342.0], [7.0, 308.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.9265306122449, 499.7891156462592]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 831.85, "minX": 1.6050582E12, "maxY": 1597287.3166666667, "series": [{"data": [[1.6050582E12, 437339.5333333333], [1.60505826E12, 1597287.3166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6050582E12, 831.85], [1.60505826E12, 4838.183333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505826E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 483.7117834394908, "minX": 1.6050582E12, "maxY": 594.1495327102804, "series": [{"data": [[1.6050582E12, 594.1495327102804], [1.60505826E12, 483.7117834394908]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505826E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 482.5318471337578, "minX": 1.6050582E12, "maxY": 592.785046728972, "series": [{"data": [[1.6050582E12, 592.785046728972], [1.60505826E12, 482.5318471337578]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505826E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6050582E12, "maxY": 0.7850467289719631, "series": [{"data": [[1.6050582E12, 0.7850467289719631], [1.60505826E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505826E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.6050582E12, "maxY": 2883.0, "series": [{"data": [[1.6050582E12, 2883.0], [1.60505826E12, 1431.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6050582E12, 175.0], [1.60505826E12, 187.64399940013885]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6050582E12, 175.0], [1.60505826E12, 189.22710005998613]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6050582E12, 175.0], [1.60505826E12, 188.90199970006944]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6050582E12, 175.0], [1.60505826E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6050582E12, 479.0], [1.60505826E12, 453.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505826E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 386.0, "minX": 8.0, "maxY": 518.0, "series": [{"data": [[8.0, 393.5], [9.0, 426.5], [14.0, 506.5], [16.0, 495.5], [17.0, 487.0], [18.0, 512.0], [19.0, 518.0], [20.0, 495.5], [21.0, 480.0], [22.0, 398.0], [23.0, 414.0], [24.0, 391.5], [25.0, 392.0], [27.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 386.0, "minX": 8.0, "maxY": 513.0, "series": [{"data": [[8.0, 393.0], [9.0, 426.0], [14.0, 506.5], [16.0, 494.5], [17.0, 487.0], [18.0, 512.0], [19.0, 513.0], [20.0, 495.0], [21.0, 479.0], [22.0, 398.0], [23.0, 413.5], [24.0, 391.5], [25.0, 392.0], [27.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.95, "minX": 1.6050582E12, "maxY": 10.3, "series": [{"data": [[1.6050582E12, 1.95], [1.60505826E12, 10.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505826E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.6050582E12, "maxY": 10.466666666666667, "series": [{"data": [[1.6050582E12, 1.7833333333333334], [1.60505826E12, 10.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505826E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.6050582E12, "maxY": 10.466666666666667, "series": [{"data": [[1.6050582E12, 1.7833333333333334], [1.60505826E12, 10.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505826E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.6050582E12, "maxY": 10.466666666666667, "series": [{"data": [[1.6050582E12, 1.7833333333333334], [1.60505826E12, 10.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505826E12, "title": "Total Transactions Per Second"}},
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

