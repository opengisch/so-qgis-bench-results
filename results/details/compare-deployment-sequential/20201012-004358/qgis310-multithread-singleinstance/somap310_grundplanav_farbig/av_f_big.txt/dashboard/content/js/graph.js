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
        data: {"result": {"minY": 166.0, "minX": 0.0, "maxY": 2768.0, "series": [{"data": [[0.0, 166.0], [0.1, 166.0], [0.2, 169.0], [0.3, 170.0], [0.4, 170.0], [0.5, 171.0], [0.6, 173.0], [0.7, 185.0], [0.8, 185.0], [0.9, 192.0], [1.0, 193.0], [1.1, 193.0], [1.2, 193.0], [1.3, 193.0], [1.4, 194.0], [1.5, 194.0], [1.6, 194.0], [1.7, 195.0], [1.8, 195.0], [1.9, 195.0], [2.0, 197.0], [2.1, 198.0], [2.2, 198.0], [2.3, 198.0], [2.4, 199.0], [2.5, 199.0], [2.6, 199.0], [2.7, 199.0], [2.8, 201.0], [2.9, 202.0], [3.0, 204.0], [3.1, 204.0], [3.2, 204.0], [3.3, 205.0], [3.4, 205.0], [3.5, 205.0], [3.6, 206.0], [3.7, 206.0], [3.8, 206.0], [3.9, 206.0], [4.0, 208.0], [4.1, 208.0], [4.2, 208.0], [4.3, 210.0], [4.4, 212.0], [4.5, 213.0], [4.6, 213.0], [4.7, 214.0], [4.8, 215.0], [4.9, 216.0], [5.0, 216.0], [5.1, 216.0], [5.2, 216.0], [5.3, 216.0], [5.4, 217.0], [5.5, 218.0], [5.6, 218.0], [5.7, 218.0], [5.8, 218.0], [5.9, 219.0], [6.0, 219.0], [6.1, 219.0], [6.2, 225.0], [6.3, 225.0], [6.4, 225.0], [6.5, 225.0], [6.6, 225.0], [6.7, 226.0], [6.8, 226.0], [6.9, 226.0], [7.0, 229.0], [7.1, 231.0], [7.2, 231.0], [7.3, 232.0], [7.4, 236.0], [7.5, 237.0], [7.6, 237.0], [7.7, 238.0], [7.8, 239.0], [7.9, 239.0], [8.0, 239.0], [8.1, 243.0], [8.2, 243.0], [8.3, 245.0], [8.4, 245.0], [8.5, 248.0], [8.6, 248.0], [8.7, 248.0], [8.8, 250.0], [8.9, 250.0], [9.0, 252.0], [9.1, 252.0], [9.2, 253.0], [9.3, 253.0], [9.4, 253.0], [9.5, 253.0], [9.6, 254.0], [9.7, 254.0], [9.8, 255.0], [9.9, 255.0], [10.0, 255.0], [10.1, 256.0], [10.2, 256.0], [10.3, 256.0], [10.4, 257.0], [10.5, 257.0], [10.6, 257.0], [10.7, 257.0], [10.8, 257.0], [10.9, 257.0], [11.0, 257.0], [11.1, 258.0], [11.2, 258.0], [11.3, 258.0], [11.4, 258.0], [11.5, 258.0], [11.6, 259.0], [11.7, 259.0], [11.8, 259.0], [11.9, 259.0], [12.0, 259.0], [12.1, 259.0], [12.2, 260.0], [12.3, 261.0], [12.4, 261.0], [12.5, 261.0], [12.6, 262.0], [12.7, 262.0], [12.8, 262.0], [12.9, 262.0], [13.0, 262.0], [13.1, 262.0], [13.2, 262.0], [13.3, 262.0], [13.4, 263.0], [13.5, 264.0], [13.6, 264.0], [13.7, 264.0], [13.8, 265.0], [13.9, 265.0], [14.0, 265.0], [14.1, 265.0], [14.2, 265.0], [14.3, 265.0], [14.4, 265.0], [14.5, 266.0], [14.6, 266.0], [14.7, 267.0], [14.8, 267.0], [14.9, 267.0], [15.0, 267.0], [15.1, 267.0], [15.2, 267.0], [15.3, 268.0], [15.4, 269.0], [15.5, 269.0], [15.6, 269.0], [15.7, 269.0], [15.8, 270.0], [15.9, 270.0], [16.0, 270.0], [16.1, 270.0], [16.2, 270.0], [16.3, 270.0], [16.4, 270.0], [16.5, 270.0], [16.6, 271.0], [16.7, 271.0], [16.8, 271.0], [16.9, 271.0], [17.0, 271.0], [17.1, 272.0], [17.2, 272.0], [17.3, 273.0], [17.4, 273.0], [17.5, 273.0], [17.6, 273.0], [17.7, 274.0], [17.8, 274.0], [17.9, 274.0], [18.0, 274.0], [18.1, 275.0], [18.2, 275.0], [18.3, 276.0], [18.4, 276.0], [18.5, 276.0], [18.6, 276.0], [18.7, 277.0], [18.8, 277.0], [18.9, 277.0], [19.0, 277.0], [19.1, 279.0], [19.2, 280.0], [19.3, 280.0], [19.4, 280.0], [19.5, 280.0], [19.6, 280.0], [19.7, 280.0], [19.8, 280.0], [19.9, 280.0], [20.0, 280.0], [20.1, 280.0], [20.2, 280.0], [20.3, 281.0], [20.4, 281.0], [20.5, 281.0], [20.6, 281.0], [20.7, 281.0], [20.8, 281.0], [20.9, 281.0], [21.0, 281.0], [21.1, 281.0], [21.2, 281.0], [21.3, 282.0], [21.4, 282.0], [21.5, 283.0], [21.6, 283.0], [21.7, 283.0], [21.8, 284.0], [21.9, 284.0], [22.0, 284.0], [22.1, 284.0], [22.2, 284.0], [22.3, 284.0], [22.4, 284.0], [22.5, 284.0], [22.6, 284.0], [22.7, 284.0], [22.8, 285.0], [22.9, 285.0], [23.0, 285.0], [23.1, 285.0], [23.2, 285.0], [23.3, 285.0], [23.4, 285.0], [23.5, 286.0], [23.6, 286.0], [23.7, 286.0], [23.8, 286.0], [23.9, 286.0], [24.0, 287.0], [24.1, 287.0], [24.2, 287.0], [24.3, 287.0], [24.4, 287.0], [24.5, 287.0], [24.6, 287.0], [24.7, 288.0], [24.8, 289.0], [24.9, 290.0], [25.0, 290.0], [25.1, 290.0], [25.2, 291.0], [25.3, 291.0], [25.4, 292.0], [25.5, 293.0], [25.6, 294.0], [25.7, 294.0], [25.8, 294.0], [25.9, 296.0], [26.0, 296.0], [26.1, 296.0], [26.2, 297.0], [26.3, 297.0], [26.4, 297.0], [26.5, 297.0], [26.6, 298.0], [26.7, 298.0], [26.8, 298.0], [26.9, 299.0], [27.0, 300.0], [27.1, 300.0], [27.2, 300.0], [27.3, 301.0], [27.4, 301.0], [27.5, 302.0], [27.6, 302.0], [27.7, 303.0], [27.8, 304.0], [27.9, 304.0], [28.0, 304.0], [28.1, 310.0], [28.2, 310.0], [28.3, 311.0], [28.4, 311.0], [28.5, 316.0], [28.6, 320.0], [28.7, 320.0], [28.8, 321.0], [28.9, 321.0], [29.0, 323.0], [29.1, 323.0], [29.2, 324.0], [29.3, 328.0], [29.4, 330.0], [29.5, 330.0], [29.6, 331.0], [29.7, 331.0], [29.8, 332.0], [29.9, 332.0], [30.0, 333.0], [30.1, 334.0], [30.2, 334.0], [30.3, 335.0], [30.4, 340.0], [30.5, 340.0], [30.6, 340.0], [30.7, 341.0], [30.8, 343.0], [30.9, 344.0], [31.0, 344.0], [31.1, 345.0], [31.2, 346.0], [31.3, 346.0], [31.4, 346.0], [31.5, 347.0], [31.6, 347.0], [31.7, 347.0], [31.8, 347.0], [31.9, 347.0], [32.0, 347.0], [32.1, 347.0], [32.2, 348.0], [32.3, 348.0], [32.4, 348.0], [32.5, 348.0], [32.6, 350.0], [32.7, 352.0], [32.8, 356.0], [32.9, 356.0], [33.0, 356.0], [33.1, 357.0], [33.2, 359.0], [33.3, 359.0], [33.4, 360.0], [33.5, 360.0], [33.6, 360.0], [33.7, 360.0], [33.8, 360.0], [33.9, 361.0], [34.0, 361.0], [34.1, 364.0], [34.2, 365.0], [34.3, 365.0], [34.4, 365.0], [34.5, 367.0], [34.6, 367.0], [34.7, 368.0], [34.8, 368.0], [34.9, 368.0], [35.0, 368.0], [35.1, 368.0], [35.2, 371.0], [35.3, 372.0], [35.4, 372.0], [35.5, 372.0], [35.6, 373.0], [35.7, 374.0], [35.8, 374.0], [35.9, 374.0], [36.0, 374.0], [36.1, 374.0], [36.2, 374.0], [36.3, 374.0], [36.4, 375.0], [36.5, 376.0], [36.6, 377.0], [36.7, 377.0], [36.8, 378.0], [36.9, 378.0], [37.0, 378.0], [37.1, 379.0], [37.2, 379.0], [37.3, 380.0], [37.4, 380.0], [37.5, 380.0], [37.6, 380.0], [37.7, 380.0], [37.8, 380.0], [37.9, 380.0], [38.0, 380.0], [38.1, 381.0], [38.2, 381.0], [38.3, 382.0], [38.4, 382.0], [38.5, 382.0], [38.6, 382.0], [38.7, 382.0], [38.8, 382.0], [38.9, 382.0], [39.0, 382.0], [39.1, 383.0], [39.2, 383.0], [39.3, 383.0], [39.4, 383.0], [39.5, 384.0], [39.6, 384.0], [39.7, 384.0], [39.8, 384.0], [39.9, 384.0], [40.0, 384.0], [40.1, 384.0], [40.2, 384.0], [40.3, 385.0], [40.4, 385.0], [40.5, 385.0], [40.6, 385.0], [40.7, 385.0], [40.8, 385.0], [40.9, 385.0], [41.0, 385.0], [41.1, 385.0], [41.2, 385.0], [41.3, 386.0], [41.4, 386.0], [41.5, 387.0], [41.6, 387.0], [41.7, 387.0], [41.8, 387.0], [41.9, 387.0], [42.0, 387.0], [42.1, 387.0], [42.2, 387.0], [42.3, 387.0], [42.4, 387.0], [42.5, 388.0], [42.6, 388.0], [42.7, 388.0], [42.8, 388.0], [42.9, 388.0], [43.0, 388.0], [43.1, 388.0], [43.2, 389.0], [43.3, 389.0], [43.4, 389.0], [43.5, 389.0], [43.6, 389.0], [43.7, 390.0], [43.8, 390.0], [43.9, 390.0], [44.0, 390.0], [44.1, 390.0], [44.2, 390.0], [44.3, 390.0], [44.4, 391.0], [44.5, 391.0], [44.6, 391.0], [44.7, 391.0], [44.8, 391.0], [44.9, 391.0], [45.0, 391.0], [45.1, 391.0], [45.2, 391.0], [45.3, 391.0], [45.4, 392.0], [45.5, 392.0], [45.6, 392.0], [45.7, 392.0], [45.8, 392.0], [45.9, 393.0], [46.0, 393.0], [46.1, 393.0], [46.2, 393.0], [46.3, 393.0], [46.4, 393.0], [46.5, 393.0], [46.6, 393.0], [46.7, 394.0], [46.8, 394.0], [46.9, 394.0], [47.0, 395.0], [47.1, 395.0], [47.2, 395.0], [47.3, 395.0], [47.4, 396.0], [47.5, 396.0], [47.6, 396.0], [47.7, 396.0], [47.8, 397.0], [47.9, 397.0], [48.0, 397.0], [48.1, 397.0], [48.2, 397.0], [48.3, 397.0], [48.4, 397.0], [48.5, 397.0], [48.6, 397.0], [48.7, 397.0], [48.8, 398.0], [48.9, 398.0], [49.0, 398.0], [49.1, 398.0], [49.2, 399.0], [49.3, 400.0], [49.4, 400.0], [49.5, 400.0], [49.6, 401.0], [49.7, 402.0], [49.8, 402.0], [49.9, 402.0], [50.0, 403.0], [50.1, 403.0], [50.2, 403.0], [50.3, 403.0], [50.4, 403.0], [50.5, 403.0], [50.6, 403.0], [50.7, 403.0], [50.8, 404.0], [50.9, 404.0], [51.0, 404.0], [51.1, 404.0], [51.2, 405.0], [51.3, 405.0], [51.4, 405.0], [51.5, 407.0], [51.6, 408.0], [51.7, 408.0], [51.8, 410.0], [51.9, 411.0], [52.0, 412.0], [52.1, 412.0], [52.2, 413.0], [52.3, 414.0], [52.4, 416.0], [52.5, 416.0], [52.6, 416.0], [52.7, 417.0], [52.8, 418.0], [52.9, 418.0], [53.0, 419.0], [53.1, 419.0], [53.2, 420.0], [53.3, 420.0], [53.4, 421.0], [53.5, 421.0], [53.6, 421.0], [53.7, 421.0], [53.8, 422.0], [53.9, 422.0], [54.0, 422.0], [54.1, 423.0], [54.2, 425.0], [54.3, 426.0], [54.4, 426.0], [54.5, 426.0], [54.6, 428.0], [54.7, 429.0], [54.8, 429.0], [54.9, 430.0], [55.0, 431.0], [55.1, 431.0], [55.2, 431.0], [55.3, 432.0], [55.4, 432.0], [55.5, 432.0], [55.6, 433.0], [55.7, 433.0], [55.8, 435.0], [55.9, 435.0], [56.0, 436.0], [56.1, 436.0], [56.2, 436.0], [56.3, 436.0], [56.4, 437.0], [56.5, 437.0], [56.6, 437.0], [56.7, 437.0], [56.8, 437.0], [56.9, 437.0], [57.0, 437.0], [57.1, 437.0], [57.2, 438.0], [57.3, 439.0], [57.4, 439.0], [57.5, 439.0], [57.6, 440.0], [57.7, 441.0], [57.8, 441.0], [57.9, 442.0], [58.0, 442.0], [58.1, 442.0], [58.2, 442.0], [58.3, 443.0], [58.4, 443.0], [58.5, 443.0], [58.6, 444.0], [58.7, 445.0], [58.8, 446.0], [58.9, 446.0], [59.0, 446.0], [59.1, 447.0], [59.2, 448.0], [59.3, 448.0], [59.4, 448.0], [59.5, 448.0], [59.6, 449.0], [59.7, 449.0], [59.8, 450.0], [59.9, 451.0], [60.0, 451.0], [60.1, 451.0], [60.2, 451.0], [60.3, 452.0], [60.4, 452.0], [60.5, 452.0], [60.6, 452.0], [60.7, 453.0], [60.8, 453.0], [60.9, 454.0], [61.0, 454.0], [61.1, 454.0], [61.2, 454.0], [61.3, 455.0], [61.4, 456.0], [61.5, 458.0], [61.6, 458.0], [61.7, 460.0], [61.8, 461.0], [61.9, 461.0], [62.0, 461.0], [62.1, 463.0], [62.2, 463.0], [62.3, 463.0], [62.4, 465.0], [62.5, 466.0], [62.6, 468.0], [62.7, 468.0], [62.8, 471.0], [62.9, 475.0], [63.0, 476.0], [63.1, 476.0], [63.2, 476.0], [63.3, 480.0], [63.4, 480.0], [63.5, 482.0], [63.6, 484.0], [63.7, 484.0], [63.8, 484.0], [63.9, 484.0], [64.0, 486.0], [64.1, 488.0], [64.2, 488.0], [64.3, 490.0], [64.4, 490.0], [64.5, 491.0], [64.6, 491.0], [64.7, 492.0], [64.8, 494.0], [64.9, 497.0], [65.0, 497.0], [65.1, 501.0], [65.2, 501.0], [65.3, 501.0], [65.4, 502.0], [65.5, 502.0], [65.6, 506.0], [65.7, 506.0], [65.8, 506.0], [65.9, 507.0], [66.0, 508.0], [66.1, 508.0], [66.2, 508.0], [66.3, 508.0], [66.4, 508.0], [66.5, 508.0], [66.6, 509.0], [66.7, 510.0], [66.8, 510.0], [66.9, 510.0], [67.0, 511.0], [67.1, 511.0], [67.2, 511.0], [67.3, 512.0], [67.4, 513.0], [67.5, 513.0], [67.6, 513.0], [67.7, 514.0], [67.8, 514.0], [67.9, 515.0], [68.0, 515.0], [68.1, 515.0], [68.2, 516.0], [68.3, 516.0], [68.4, 516.0], [68.5, 516.0], [68.6, 516.0], [68.7, 516.0], [68.8, 516.0], [68.9, 516.0], [69.0, 517.0], [69.1, 517.0], [69.2, 517.0], [69.3, 518.0], [69.4, 518.0], [69.5, 518.0], [69.6, 518.0], [69.7, 518.0], [69.8, 518.0], [69.9, 518.0], [70.0, 519.0], [70.1, 520.0], [70.2, 520.0], [70.3, 521.0], [70.4, 521.0], [70.5, 522.0], [70.6, 522.0], [70.7, 522.0], [70.8, 522.0], [70.9, 522.0], [71.0, 522.0], [71.1, 522.0], [71.2, 522.0], [71.3, 523.0], [71.4, 523.0], [71.5, 524.0], [71.6, 524.0], [71.7, 524.0], [71.8, 525.0], [71.9, 526.0], [72.0, 526.0], [72.1, 526.0], [72.2, 527.0], [72.3, 527.0], [72.4, 527.0], [72.5, 527.0], [72.6, 527.0], [72.7, 527.0], [72.8, 528.0], [72.9, 528.0], [73.0, 528.0], [73.1, 529.0], [73.2, 530.0], [73.3, 530.0], [73.4, 531.0], [73.5, 532.0], [73.6, 532.0], [73.7, 532.0], [73.8, 533.0], [73.9, 533.0], [74.0, 533.0], [74.1, 533.0], [74.2, 534.0], [74.3, 534.0], [74.4, 534.0], [74.5, 534.0], [74.6, 535.0], [74.7, 538.0], [74.8, 538.0], [74.9, 539.0], [75.0, 540.0], [75.1, 540.0], [75.2, 543.0], [75.3, 544.0], [75.4, 544.0], [75.5, 544.0], [75.6, 547.0], [75.7, 548.0], [75.8, 549.0], [75.9, 549.0], [76.0, 549.0], [76.1, 553.0], [76.2, 554.0], [76.3, 554.0], [76.4, 556.0], [76.5, 557.0], [76.6, 558.0], [76.7, 558.0], [76.8, 559.0], [76.9, 561.0], [77.0, 561.0], [77.1, 563.0], [77.2, 565.0], [77.3, 565.0], [77.4, 565.0], [77.5, 566.0], [77.6, 568.0], [77.7, 568.0], [77.8, 568.0], [77.9, 569.0], [78.0, 571.0], [78.1, 572.0], [78.2, 572.0], [78.3, 573.0], [78.4, 574.0], [78.5, 574.0], [78.6, 575.0], [78.7, 576.0], [78.8, 576.0], [78.9, 576.0], [79.0, 577.0], [79.1, 577.0], [79.2, 577.0], [79.3, 577.0], [79.4, 577.0], [79.5, 578.0], [79.6, 580.0], [79.7, 580.0], [79.8, 580.0], [79.9, 584.0], [80.0, 585.0], [80.1, 585.0], [80.2, 586.0], [80.3, 586.0], [80.4, 586.0], [80.5, 587.0], [80.6, 587.0], [80.7, 590.0], [80.8, 590.0], [80.9, 591.0], [81.0, 596.0], [81.1, 596.0], [81.2, 596.0], [81.3, 600.0], [81.4, 601.0], [81.5, 606.0], [81.6, 606.0], [81.7, 608.0], [81.8, 610.0], [81.9, 610.0], [82.0, 611.0], [82.1, 613.0], [82.2, 615.0], [82.3, 615.0], [82.4, 616.0], [82.5, 617.0], [82.6, 618.0], [82.7, 618.0], [82.8, 619.0], [82.9, 619.0], [83.0, 621.0], [83.1, 621.0], [83.2, 621.0], [83.3, 625.0], [83.4, 625.0], [83.5, 625.0], [83.6, 626.0], [83.7, 626.0], [83.8, 626.0], [83.9, 628.0], [84.0, 628.0], [84.1, 629.0], [84.2, 629.0], [84.3, 629.0], [84.4, 630.0], [84.5, 630.0], [84.6, 630.0], [84.7, 636.0], [84.8, 636.0], [84.9, 637.0], [85.0, 637.0], [85.1, 637.0], [85.2, 637.0], [85.3, 637.0], [85.4, 637.0], [85.5, 638.0], [85.6, 638.0], [85.7, 638.0], [85.8, 638.0], [85.9, 639.0], [86.0, 639.0], [86.1, 639.0], [86.2, 639.0], [86.3, 640.0], [86.4, 642.0], [86.5, 642.0], [86.6, 642.0], [86.7, 642.0], [86.8, 642.0], [86.9, 643.0], [87.0, 645.0], [87.1, 647.0], [87.2, 647.0], [87.3, 647.0], [87.4, 650.0], [87.5, 651.0], [87.6, 651.0], [87.7, 652.0], [87.8, 654.0], [87.9, 656.0], [88.0, 656.0], [88.1, 656.0], [88.2, 658.0], [88.3, 659.0], [88.4, 659.0], [88.5, 660.0], [88.6, 660.0], [88.7, 660.0], [88.8, 661.0], [88.9, 661.0], [89.0, 662.0], [89.1, 662.0], [89.2, 669.0], [89.3, 671.0], [89.4, 671.0], [89.5, 671.0], [89.6, 678.0], [89.7, 679.0], [89.8, 681.0], [89.9, 681.0], [90.0, 682.0], [90.1, 683.0], [90.2, 683.0], [90.3, 690.0], [90.4, 692.0], [90.5, 696.0], [90.6, 696.0], [90.7, 696.0], [90.8, 700.0], [90.9, 701.0], [91.0, 701.0], [91.1, 702.0], [91.2, 705.0], [91.3, 706.0], [91.4, 706.0], [91.5, 706.0], [91.6, 707.0], [91.7, 707.0], [91.8, 710.0], [91.9, 713.0], [92.0, 714.0], [92.1, 714.0], [92.2, 714.0], [92.3, 716.0], [92.4, 718.0], [92.5, 718.0], [92.6, 719.0], [92.7, 720.0], [92.8, 726.0], [92.9, 726.0], [93.0, 727.0], [93.1, 730.0], [93.2, 731.0], [93.3, 731.0], [93.4, 740.0], [93.5, 747.0], [93.6, 747.0], [93.7, 758.0], [93.8, 758.0], [93.9, 766.0], [94.0, 766.0], [94.1, 769.0], [94.2, 775.0], [94.3, 798.0], [94.4, 798.0], [94.5, 816.0], [94.6, 819.0], [94.7, 820.0], [94.8, 820.0], [94.9, 820.0], [95.0, 823.0], [95.1, 823.0], [95.2, 826.0], [95.3, 828.0], [95.4, 836.0], [95.5, 836.0], [95.6, 867.0], [95.7, 871.0], [95.8, 881.0], [95.9, 881.0], [96.0, 885.0], [96.1, 894.0], [96.2, 903.0], [96.3, 903.0], [96.4, 904.0], [96.5, 916.0], [96.6, 918.0], [96.7, 918.0], [96.8, 933.0], [96.9, 934.0], [97.0, 934.0], [97.1, 941.0], [97.2, 984.0], [97.3, 990.0], [97.4, 990.0], [97.5, 995.0], [97.6, 1023.0], [97.7, 1029.0], [97.8, 1029.0], [97.9, 1060.0], [98.0, 1073.0], [98.1, 1086.0], [98.2, 1086.0], [98.3, 1105.0], [98.4, 1184.0], [98.5, 1184.0], [98.6, 1185.0], [98.7, 1231.0], [98.8, 1268.0], [98.9, 1268.0], [99.0, 1307.0], [99.1, 1361.0], [99.2, 1588.0], [99.3, 1588.0], [99.4, 1622.0], [99.5, 1672.0], [99.6, 2359.0], [99.7, 2359.0], [99.8, 2759.0], [99.9, 2768.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 178.0, "series": [{"data": [[2300.0, 1.0], [600.0, 70.0], [2700.0, 2.0], [700.0, 27.0], [200.0, 178.0], [800.0, 13.0], [900.0, 10.0], [1000.0, 5.0], [1100.0, 3.0], [300.0, 164.0], [1200.0, 2.0], [1300.0, 2.0], [1500.0, 1.0], [400.0, 116.0], [100.0, 20.0], [1600.0, 2.0], [500.0, 119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 478.0, "series": [{"data": [[0.0, 478.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60246404E12, "maxY": 1.0, "series": [{"data": [[1.60246434E12, 1.0], [1.60246416E12, 1.0], [1.60246422E12, 1.0], [1.60246404E12, 1.0], [1.6024641E12, 1.0], [1.60246428E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246434E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 459.37006802721106, "minX": 1.0, "maxY": 459.37006802721106, "series": [{"data": [[1.0, 459.37006802721106]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 459.37006802721106]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 763.8333333333334, "minX": 1.60246404E12, "maxY": 405817.81666666665, "series": [{"data": [[1.60246434E12, 226457.3], [1.60246416E12, 343787.25], [1.60246422E12, 303765.61666666664], [1.60246404E12, 405817.81666666665], [1.6024641E12, 281331.5333333333], [1.60246428E12, 274572.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246434E12, 763.8333333333334], [1.60246416E12, 1111.85], [1.60246422E12, 961.9166666666666], [1.60246404E12, 833.45], [1.6024641E12, 906.9], [1.60246428E12, 945.0833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246434E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 399.79611650485447, "minX": 1.60246404E12, "maxY": 519.1727272727273, "series": [{"data": [[1.60246434E12, 399.79611650485447], [1.60246416E12, 400.1744966442953], [1.60246422E12, 467.32031249999994], [1.60246404E12, 519.1727272727273], [1.6024641E12, 497.42499999999995], [1.60246428E12, 481.71999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246434E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 398.81553398058236, "minX": 1.60246404E12, "maxY": 517.6818181818179, "series": [{"data": [[1.60246434E12, 398.81553398058236], [1.60246416E12, 399.1610738255034], [1.60246422E12, 466.2890625], [1.60246404E12, 517.6818181818179], [1.6024641E12, 496.175], [1.60246428E12, 480.7040000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246434E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.00970873786407767, "minX": 1.60246404E12, "maxY": 0.2909090909090906, "series": [{"data": [[1.60246434E12, 0.00970873786407767], [1.60246416E12, 0.013422818791946315], [1.60246422E12, 0.031250000000000014], [1.60246404E12, 0.2909090909090906], [1.6024641E12, 0.016666666666666666], [1.60246428E12, 0.016]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246434E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 166.0, "minX": 1.60246404E12, "maxY": 2768.0, "series": [{"data": [[1.60246434E12, 1622.0], [1.60246416E12, 2759.0], [1.60246422E12, 1184.0], [1.60246404E12, 2768.0], [1.6024641E12, 798.0], [1.60246428E12, 881.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246434E12, 198.0], [1.60246416E12, 169.3499999642372], [1.60246422E12, 166.80499984622003], [1.60246404E12, 193.0], [1.6024641E12, 349.6909994518757], [1.60246428E12, 261.9379997897148]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246434E12, 198.11840003967285], [1.60246416E12, 169.48500001430511], [1.60246422E12, 167.385500061512], [1.60246404E12, 193.0], [1.6024641E12, 351.76010021924975], [1.60246428E12, 262.73180008411407]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246434E12, 198.0], [1.60246416E12, 169.4249999821186], [1.60246422E12, 167.12749992311], [1.60246404E12, 193.0], [1.6024641E12, 350.84049972593783], [1.60246428E12, 262.37899989485743]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246434E12, 198.0], [1.60246416E12, 169.0], [1.60246422E12, 166.0], [1.60246404E12, 193.0], [1.6024641E12, 348.0], [1.60246428E12, 261.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246434E12, 285.0], [1.60246416E12, 298.0], [1.60246422E12, 409.0], [1.60246404E12, 417.5], [1.6024641E12, 473.0], [1.60246428E12, 488.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246434E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 216.0, "minX": 1.0, "maxY": 680.0, "series": [{"data": [[1.0, 680.0], [2.0, 489.0], [4.0, 272.5], [5.0, 216.0], [3.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 216.0, "minX": 1.0, "maxY": 678.5, "series": [{"data": [[1.0, 678.5], [2.0, 488.5], [4.0, 272.0], [5.0, 216.0], [3.0, 359.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.60246404E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60246434E12, 1.7], [1.60246416E12, 2.4833333333333334], [1.60246422E12, 2.1333333333333333], [1.60246404E12, 1.85], [1.6024641E12, 2.0], [1.60246428E12, 2.0833333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246434E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60246404E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60246434E12, 1.7166666666666666], [1.60246416E12, 2.4833333333333334], [1.60246422E12, 2.1333333333333333], [1.60246404E12, 1.8333333333333333], [1.6024641E12, 2.0], [1.60246428E12, 2.0833333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246434E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60246404E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60246434E12, 1.7166666666666666], [1.60246416E12, 2.4833333333333334], [1.60246422E12, 2.1333333333333333], [1.60246404E12, 1.8333333333333333], [1.6024641E12, 2.0], [1.60246428E12, 2.0833333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246434E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60246404E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60246434E12, 1.7166666666666666], [1.60246416E12, 2.4833333333333334], [1.60246422E12, 2.1333333333333333], [1.60246404E12, 1.8333333333333333], [1.6024641E12, 2.0], [1.60246428E12, 2.0833333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246434E12, "title": "Total Transactions Per Second"}},
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

