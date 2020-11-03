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
        data: {"result": {"minY": 178.0, "minX": 0.0, "maxY": 2906.0, "series": [{"data": [[0.0, 178.0], [0.1, 178.0], [0.2, 187.0], [0.3, 190.0], [0.4, 190.0], [0.5, 190.0], [0.6, 191.0], [0.7, 193.0], [0.8, 193.0], [0.9, 193.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 198.0], [1.5, 198.0], [1.6, 198.0], [1.7, 199.0], [1.8, 203.0], [1.9, 203.0], [2.0, 203.0], [2.1, 205.0], [2.2, 205.0], [2.3, 205.0], [2.4, 205.0], [2.5, 206.0], [2.6, 207.0], [2.7, 207.0], [2.8, 208.0], [2.9, 208.0], [3.0, 209.0], [3.1, 209.0], [3.2, 209.0], [3.3, 210.0], [3.4, 210.0], [3.5, 212.0], [3.6, 212.0], [3.7, 212.0], [3.8, 212.0], [3.9, 212.0], [4.0, 213.0], [4.1, 213.0], [4.2, 213.0], [4.3, 214.0], [4.4, 214.0], [4.5, 214.0], [4.6, 214.0], [4.7, 214.0], [4.8, 214.0], [4.9, 215.0], [5.0, 215.0], [5.1, 216.0], [5.2, 217.0], [5.3, 217.0], [5.4, 217.0], [5.5, 219.0], [5.6, 219.0], [5.7, 219.0], [5.8, 221.0], [5.9, 222.0], [6.0, 222.0], [6.1, 222.0], [6.2, 222.0], [6.3, 223.0], [6.4, 225.0], [6.5, 225.0], [6.6, 229.0], [6.7, 232.0], [6.8, 232.0], [6.9, 234.0], [7.0, 237.0], [7.1, 238.0], [7.2, 238.0], [7.3, 241.0], [7.4, 242.0], [7.5, 244.0], [7.6, 244.0], [7.7, 245.0], [7.8, 245.0], [7.9, 246.0], [8.0, 246.0], [8.1, 248.0], [8.2, 249.0], [8.3, 250.0], [8.4, 250.0], [8.5, 251.0], [8.6, 252.0], [8.7, 252.0], [8.8, 253.0], [8.9, 253.0], [9.0, 254.0], [9.1, 254.0], [9.2, 255.0], [9.3, 255.0], [9.4, 255.0], [9.5, 255.0], [9.6, 255.0], [9.7, 256.0], [9.8, 257.0], [9.9, 257.0], [10.0, 257.0], [10.1, 257.0], [10.2, 257.0], [10.3, 257.0], [10.4, 258.0], [10.5, 258.0], [10.6, 258.0], [10.7, 258.0], [10.8, 258.0], [10.9, 258.0], [11.0, 258.0], [11.1, 258.0], [11.2, 259.0], [11.3, 259.0], [11.4, 259.0], [11.5, 259.0], [11.6, 259.0], [11.7, 259.0], [11.8, 259.0], [11.9, 260.0], [12.0, 261.0], [12.1, 261.0], [12.2, 261.0], [12.3, 262.0], [12.4, 263.0], [12.5, 263.0], [12.6, 263.0], [12.7, 263.0], [12.8, 264.0], [12.9, 264.0], [13.0, 264.0], [13.1, 264.0], [13.2, 265.0], [13.3, 265.0], [13.4, 265.0], [13.5, 265.0], [13.6, 265.0], [13.7, 266.0], [13.8, 266.0], [13.9, 267.0], [14.0, 267.0], [14.1, 267.0], [14.2, 267.0], [14.3, 268.0], [14.4, 268.0], [14.5, 268.0], [14.6, 268.0], [14.7, 268.0], [14.8, 268.0], [14.9, 269.0], [15.0, 269.0], [15.1, 269.0], [15.2, 270.0], [15.3, 270.0], [15.4, 271.0], [15.5, 271.0], [15.6, 271.0], [15.7, 271.0], [15.8, 271.0], [15.9, 271.0], [16.0, 271.0], [16.1, 271.0], [16.2, 271.0], [16.3, 271.0], [16.4, 272.0], [16.5, 273.0], [16.6, 273.0], [16.7, 273.0], [16.8, 273.0], [16.9, 274.0], [17.0, 274.0], [17.1, 274.0], [17.2, 275.0], [17.3, 275.0], [17.4, 275.0], [17.5, 275.0], [17.6, 275.0], [17.7, 276.0], [17.8, 276.0], [17.9, 276.0], [18.0, 276.0], [18.1, 276.0], [18.2, 276.0], [18.3, 277.0], [18.4, 277.0], [18.5, 277.0], [18.6, 277.0], [18.7, 277.0], [18.8, 277.0], [18.9, 277.0], [19.0, 278.0], [19.1, 278.0], [19.2, 279.0], [19.3, 279.0], [19.4, 279.0], [19.5, 280.0], [19.6, 280.0], [19.7, 280.0], [19.8, 281.0], [19.9, 281.0], [20.0, 282.0], [20.1, 282.0], [20.2, 282.0], [20.3, 282.0], [20.4, 282.0], [20.5, 282.0], [20.6, 283.0], [20.7, 283.0], [20.8, 283.0], [20.9, 283.0], [21.0, 284.0], [21.1, 284.0], [21.2, 284.0], [21.3, 284.0], [21.4, 284.0], [21.5, 285.0], [21.6, 285.0], [21.7, 285.0], [21.8, 286.0], [21.9, 286.0], [22.0, 286.0], [22.1, 286.0], [22.2, 287.0], [22.3, 287.0], [22.4, 287.0], [22.5, 288.0], [22.6, 289.0], [22.7, 289.0], [22.8, 289.0], [22.9, 290.0], [23.0, 290.0], [23.1, 290.0], [23.2, 290.0], [23.3, 291.0], [23.4, 291.0], [23.5, 292.0], [23.6, 292.0], [23.7, 293.0], [23.8, 293.0], [23.9, 293.0], [24.0, 294.0], [24.1, 294.0], [24.2, 294.0], [24.3, 294.0], [24.4, 294.0], [24.5, 295.0], [24.6, 295.0], [24.7, 295.0], [24.8, 295.0], [24.9, 296.0], [25.0, 296.0], [25.1, 297.0], [25.2, 297.0], [25.3, 297.0], [25.4, 298.0], [25.5, 299.0], [25.6, 299.0], [25.7, 299.0], [25.8, 300.0], [25.9, 300.0], [26.0, 301.0], [26.1, 301.0], [26.2, 302.0], [26.3, 304.0], [26.4, 305.0], [26.5, 305.0], [26.6, 308.0], [26.7, 308.0], [26.8, 308.0], [26.9, 308.0], [27.0, 309.0], [27.1, 309.0], [27.2, 309.0], [27.3, 309.0], [27.4, 311.0], [27.5, 311.0], [27.6, 311.0], [27.7, 313.0], [27.8, 314.0], [27.9, 314.0], [28.0, 314.0], [28.1, 317.0], [28.2, 317.0], [28.3, 320.0], [28.4, 320.0], [28.5, 320.0], [28.6, 321.0], [28.7, 321.0], [28.8, 323.0], [28.9, 323.0], [29.0, 323.0], [29.1, 323.0], [29.2, 329.0], [29.3, 330.0], [29.4, 331.0], [29.5, 331.0], [29.6, 332.0], [29.7, 337.0], [29.8, 339.0], [29.9, 339.0], [30.0, 339.0], [30.1, 343.0], [30.2, 343.0], [30.3, 343.0], [30.4, 346.0], [30.5, 348.0], [30.6, 348.0], [30.7, 349.0], [30.8, 350.0], [30.9, 353.0], [31.0, 353.0], [31.1, 355.0], [31.2, 355.0], [31.3, 356.0], [31.4, 356.0], [31.5, 356.0], [31.6, 356.0], [31.7, 356.0], [31.8, 358.0], [31.9, 359.0], [32.0, 360.0], [32.1, 360.0], [32.2, 361.0], [32.3, 361.0], [32.4, 361.0], [32.5, 361.0], [32.6, 361.0], [32.7, 361.0], [32.8, 361.0], [32.9, 361.0], [33.0, 362.0], [33.1, 362.0], [33.2, 362.0], [33.3, 362.0], [33.4, 363.0], [33.5, 364.0], [33.6, 364.0], [33.7, 365.0], [33.8, 365.0], [33.9, 365.0], [34.0, 365.0], [34.1, 366.0], [34.2, 366.0], [34.3, 366.0], [34.4, 366.0], [34.5, 366.0], [34.6, 367.0], [34.7, 367.0], [34.8, 367.0], [34.9, 367.0], [35.0, 367.0], [35.1, 367.0], [35.2, 367.0], [35.3, 367.0], [35.4, 367.0], [35.5, 367.0], [35.6, 368.0], [35.7, 368.0], [35.8, 368.0], [35.9, 368.0], [36.0, 369.0], [36.1, 369.0], [36.2, 369.0], [36.3, 369.0], [36.4, 369.0], [36.5, 369.0], [36.6, 369.0], [36.7, 369.0], [36.8, 370.0], [36.9, 371.0], [37.0, 371.0], [37.1, 372.0], [37.2, 372.0], [37.3, 372.0], [37.4, 372.0], [37.5, 372.0], [37.6, 372.0], [37.7, 372.0], [37.8, 372.0], [37.9, 373.0], [38.0, 373.0], [38.1, 373.0], [38.2, 373.0], [38.3, 374.0], [38.4, 375.0], [38.5, 375.0], [38.6, 375.0], [38.7, 375.0], [38.8, 376.0], [38.9, 376.0], [39.0, 376.0], [39.1, 376.0], [39.2, 376.0], [39.3, 376.0], [39.4, 376.0], [39.5, 376.0], [39.6, 377.0], [39.7, 377.0], [39.8, 377.0], [39.9, 377.0], [40.0, 378.0], [40.1, 378.0], [40.2, 378.0], [40.3, 379.0], [40.4, 379.0], [40.5, 379.0], [40.6, 379.0], [40.7, 380.0], [40.8, 380.0], [40.9, 380.0], [41.0, 380.0], [41.1, 380.0], [41.2, 380.0], [41.3, 380.0], [41.4, 380.0], [41.5, 381.0], [41.6, 381.0], [41.7, 381.0], [41.8, 381.0], [41.9, 381.0], [42.0, 381.0], [42.1, 381.0], [42.2, 381.0], [42.3, 381.0], [42.4, 382.0], [42.5, 382.0], [42.6, 382.0], [42.7, 382.0], [42.8, 382.0], [42.9, 383.0], [43.0, 384.0], [43.1, 384.0], [43.2, 384.0], [43.3, 384.0], [43.4, 384.0], [43.5, 384.0], [43.6, 385.0], [43.7, 385.0], [43.8, 385.0], [43.9, 385.0], [44.0, 385.0], [44.1, 385.0], [44.2, 385.0], [44.3, 386.0], [44.4, 387.0], [44.5, 387.0], [44.6, 387.0], [44.7, 387.0], [44.8, 387.0], [44.9, 388.0], [45.0, 388.0], [45.1, 388.0], [45.2, 388.0], [45.3, 388.0], [45.4, 388.0], [45.5, 389.0], [45.6, 389.0], [45.7, 389.0], [45.8, 390.0], [45.9, 391.0], [46.0, 391.0], [46.1, 391.0], [46.2, 391.0], [46.3, 392.0], [46.4, 392.0], [46.5, 392.0], [46.6, 392.0], [46.7, 392.0], [46.8, 392.0], [46.9, 392.0], [47.0, 393.0], [47.1, 393.0], [47.2, 393.0], [47.3, 394.0], [47.4, 394.0], [47.5, 394.0], [47.6, 394.0], [47.7, 395.0], [47.8, 395.0], [47.9, 395.0], [48.0, 395.0], [48.1, 395.0], [48.2, 396.0], [48.3, 396.0], [48.4, 396.0], [48.5, 397.0], [48.6, 397.0], [48.7, 397.0], [48.8, 397.0], [48.9, 398.0], [49.0, 398.0], [49.1, 398.0], [49.2, 398.0], [49.3, 399.0], [49.4, 399.0], [49.5, 399.0], [49.6, 399.0], [49.7, 399.0], [49.8, 400.0], [49.9, 400.0], [50.0, 400.0], [50.1, 400.0], [50.2, 400.0], [50.3, 400.0], [50.4, 401.0], [50.5, 402.0], [50.6, 402.0], [50.7, 402.0], [50.8, 402.0], [50.9, 404.0], [51.0, 404.0], [51.1, 404.0], [51.2, 404.0], [51.3, 404.0], [51.4, 404.0], [51.5, 405.0], [51.6, 405.0], [51.7, 405.0], [51.8, 405.0], [51.9, 406.0], [52.0, 407.0], [52.1, 407.0], [52.2, 407.0], [52.3, 408.0], [52.4, 408.0], [52.5, 408.0], [52.6, 408.0], [52.7, 410.0], [52.8, 410.0], [52.9, 410.0], [53.0, 410.0], [53.1, 410.0], [53.2, 412.0], [53.3, 412.0], [53.4, 412.0], [53.5, 413.0], [53.6, 413.0], [53.7, 414.0], [53.8, 415.0], [53.9, 415.0], [54.0, 415.0], [54.1, 417.0], [54.2, 420.0], [54.3, 421.0], [54.4, 421.0], [54.5, 422.0], [54.6, 422.0], [54.7, 426.0], [54.8, 426.0], [54.9, 426.0], [55.0, 426.0], [55.1, 426.0], [55.2, 428.0], [55.3, 429.0], [55.4, 429.0], [55.5, 429.0], [55.6, 429.0], [55.7, 430.0], [55.8, 431.0], [55.9, 431.0], [56.0, 431.0], [56.1, 432.0], [56.2, 432.0], [56.3, 432.0], [56.4, 433.0], [56.5, 434.0], [56.6, 435.0], [56.7, 435.0], [56.8, 435.0], [56.9, 436.0], [57.0, 436.0], [57.1, 437.0], [57.2, 438.0], [57.3, 439.0], [57.4, 439.0], [57.5, 440.0], [57.6, 441.0], [57.7, 442.0], [57.8, 442.0], [57.9, 442.0], [58.0, 443.0], [58.1, 443.0], [58.2, 443.0], [58.3, 443.0], [58.4, 444.0], [58.5, 444.0], [58.6, 445.0], [58.7, 446.0], [58.8, 446.0], [58.9, 446.0], [59.0, 448.0], [59.1, 449.0], [59.2, 449.0], [59.3, 449.0], [59.4, 450.0], [59.5, 451.0], [59.6, 452.0], [59.7, 452.0], [59.8, 453.0], [59.9, 454.0], [60.0, 455.0], [60.1, 455.0], [60.2, 455.0], [60.3, 457.0], [60.4, 457.0], [60.5, 457.0], [60.6, 457.0], [60.7, 458.0], [60.8, 458.0], [60.9, 458.0], [61.0, 459.0], [61.1, 461.0], [61.2, 461.0], [61.3, 462.0], [61.4, 464.0], [61.5, 466.0], [61.6, 466.0], [61.7, 467.0], [61.8, 467.0], [61.9, 467.0], [62.0, 468.0], [62.1, 468.0], [62.2, 471.0], [62.3, 471.0], [62.4, 475.0], [62.5, 475.0], [62.6, 476.0], [62.7, 476.0], [62.8, 480.0], [62.9, 480.0], [63.0, 481.0], [63.1, 481.0], [63.2, 481.0], [63.3, 482.0], [63.4, 482.0], [63.5, 483.0], [63.6, 486.0], [63.7, 486.0], [63.8, 486.0], [63.9, 488.0], [64.0, 488.0], [64.1, 491.0], [64.2, 491.0], [64.3, 494.0], [64.4, 495.0], [64.5, 495.0], [64.6, 495.0], [64.7, 498.0], [64.8, 503.0], [64.9, 503.0], [65.0, 503.0], [65.1, 504.0], [65.2, 506.0], [65.3, 506.0], [65.4, 506.0], [65.5, 508.0], [65.6, 508.0], [65.7, 508.0], [65.8, 510.0], [65.9, 513.0], [66.0, 515.0], [66.1, 515.0], [66.2, 515.0], [66.3, 517.0], [66.4, 517.0], [66.5, 517.0], [66.6, 518.0], [66.7, 518.0], [66.8, 518.0], [66.9, 518.0], [67.0, 519.0], [67.1, 520.0], [67.2, 520.0], [67.3, 520.0], [67.4, 521.0], [67.5, 521.0], [67.6, 521.0], [67.7, 525.0], [67.8, 525.0], [67.9, 527.0], [68.0, 527.0], [68.1, 527.0], [68.2, 527.0], [68.3, 528.0], [68.4, 528.0], [68.5, 528.0], [68.6, 528.0], [68.7, 528.0], [68.8, 529.0], [68.9, 529.0], [69.0, 529.0], [69.1, 529.0], [69.2, 529.0], [69.3, 531.0], [69.4, 532.0], [69.5, 532.0], [69.6, 532.0], [69.7, 532.0], [69.8, 533.0], [69.9, 533.0], [70.0, 533.0], [70.1, 534.0], [70.2, 534.0], [70.3, 535.0], [70.4, 535.0], [70.5, 536.0], [70.6, 536.0], [70.7, 536.0], [70.8, 537.0], [70.9, 537.0], [71.0, 537.0], [71.1, 538.0], [71.2, 538.0], [71.3, 538.0], [71.4, 538.0], [71.5, 538.0], [71.6, 539.0], [71.7, 539.0], [71.8, 541.0], [71.9, 541.0], [72.0, 542.0], [72.1, 542.0], [72.2, 542.0], [72.3, 542.0], [72.4, 543.0], [72.5, 543.0], [72.6, 544.0], [72.7, 544.0], [72.8, 547.0], [72.9, 547.0], [73.0, 547.0], [73.1, 548.0], [73.2, 549.0], [73.3, 549.0], [73.4, 549.0], [73.5, 550.0], [73.6, 550.0], [73.7, 550.0], [73.8, 550.0], [73.9, 551.0], [74.0, 551.0], [74.1, 551.0], [74.2, 553.0], [74.3, 555.0], [74.4, 555.0], [74.5, 555.0], [74.6, 561.0], [74.7, 562.0], [74.8, 562.0], [74.9, 563.0], [75.0, 564.0], [75.1, 564.0], [75.2, 565.0], [75.3, 566.0], [75.4, 566.0], [75.5, 566.0], [75.6, 568.0], [75.7, 569.0], [75.8, 569.0], [75.9, 569.0], [76.0, 569.0], [76.1, 570.0], [76.2, 571.0], [76.3, 571.0], [76.4, 571.0], [76.5, 571.0], [76.6, 571.0], [76.7, 571.0], [76.8, 572.0], [76.9, 572.0], [77.0, 572.0], [77.1, 574.0], [77.2, 574.0], [77.3, 574.0], [77.4, 574.0], [77.5, 574.0], [77.6, 574.0], [77.7, 575.0], [77.8, 575.0], [77.9, 576.0], [78.0, 576.0], [78.1, 576.0], [78.2, 576.0], [78.3, 576.0], [78.4, 576.0], [78.5, 576.0], [78.6, 579.0], [78.7, 580.0], [78.8, 581.0], [78.9, 581.0], [79.0, 582.0], [79.1, 583.0], [79.2, 591.0], [79.3, 591.0], [79.4, 591.0], [79.5, 592.0], [79.6, 593.0], [79.7, 593.0], [79.8, 595.0], [79.9, 597.0], [80.0, 598.0], [80.1, 598.0], [80.2, 599.0], [80.3, 600.0], [80.4, 600.0], [80.5, 601.0], [80.6, 602.0], [80.7, 604.0], [80.8, 604.0], [80.9, 606.0], [81.0, 609.0], [81.1, 611.0], [81.2, 611.0], [81.3, 612.0], [81.4, 615.0], [81.5, 616.0], [81.6, 616.0], [81.7, 616.0], [81.8, 617.0], [81.9, 617.0], [82.0, 619.0], [82.1, 622.0], [82.2, 629.0], [82.3, 629.0], [82.4, 630.0], [82.5, 631.0], [82.6, 631.0], [82.7, 631.0], [82.8, 634.0], [82.9, 634.0], [83.0, 636.0], [83.1, 636.0], [83.2, 636.0], [83.3, 637.0], [83.4, 637.0], [83.5, 639.0], [83.6, 639.0], [83.7, 640.0], [83.8, 640.0], [83.9, 642.0], [84.0, 645.0], [84.1, 646.0], [84.2, 646.0], [84.3, 648.0], [84.4, 651.0], [84.5, 651.0], [84.6, 651.0], [84.7, 653.0], [84.8, 657.0], [84.9, 657.0], [85.0, 657.0], [85.1, 657.0], [85.2, 657.0], [85.3, 657.0], [85.4, 659.0], [85.5, 664.0], [85.6, 664.0], [85.7, 664.0], [85.8, 667.0], [85.9, 670.0], [86.0, 671.0], [86.1, 671.0], [86.2, 673.0], [86.3, 674.0], [86.4, 677.0], [86.5, 677.0], [86.6, 679.0], [86.7, 679.0], [86.8, 679.0], [86.9, 681.0], [87.0, 686.0], [87.1, 689.0], [87.2, 689.0], [87.3, 690.0], [87.4, 693.0], [87.5, 694.0], [87.6, 694.0], [87.7, 694.0], [87.8, 700.0], [87.9, 700.0], [88.0, 700.0], [88.1, 702.0], [88.2, 703.0], [88.3, 704.0], [88.4, 704.0], [88.5, 705.0], [88.6, 705.0], [88.7, 705.0], [88.8, 705.0], [88.9, 705.0], [89.0, 708.0], [89.1, 708.0], [89.2, 708.0], [89.3, 708.0], [89.4, 709.0], [89.5, 709.0], [89.6, 712.0], [89.7, 713.0], [89.8, 713.0], [89.9, 713.0], [90.0, 714.0], [90.1, 714.0], [90.2, 714.0], [90.3, 715.0], [90.4, 718.0], [90.5, 723.0], [90.6, 723.0], [90.7, 723.0], [90.8, 723.0], [90.9, 724.0], [91.0, 724.0], [91.1, 725.0], [91.2, 727.0], [91.3, 728.0], [91.4, 728.0], [91.5, 731.0], [91.6, 731.0], [91.7, 731.0], [91.8, 736.0], [91.9, 736.0], [92.0, 739.0], [92.1, 739.0], [92.2, 740.0], [92.3, 741.0], [92.4, 746.0], [92.5, 746.0], [92.6, 748.0], [92.7, 749.0], [92.8, 751.0], [92.9, 751.0], [93.0, 758.0], [93.1, 767.0], [93.2, 767.0], [93.3, 767.0], [93.4, 769.0], [93.5, 769.0], [93.6, 769.0], [93.7, 772.0], [93.8, 787.0], [93.9, 791.0], [94.0, 791.0], [94.1, 798.0], [94.2, 798.0], [94.3, 822.0], [94.4, 822.0], [94.5, 834.0], [94.6, 837.0], [94.7, 847.0], [94.8, 847.0], [94.9, 850.0], [95.0, 854.0], [95.1, 854.0], [95.2, 855.0], [95.3, 881.0], [95.4, 881.0], [95.5, 881.0], [95.6, 893.0], [95.7, 905.0], [95.8, 913.0], [95.9, 913.0], [96.0, 922.0], [96.1, 925.0], [96.2, 939.0], [96.3, 939.0], [96.4, 960.0], [96.5, 962.0], [96.6, 973.0], [96.7, 973.0], [96.8, 984.0], [96.9, 994.0], [97.0, 994.0], [97.1, 1004.0], [97.2, 1010.0], [97.3, 1014.0], [97.4, 1014.0], [97.5, 1030.0], [97.6, 1059.0], [97.7, 1083.0], [97.8, 1083.0], [97.9, 1140.0], [98.0, 1161.0], [98.1, 1196.0], [98.2, 1196.0], [98.3, 1214.0], [98.4, 1232.0], [98.5, 1232.0], [98.6, 1258.0], [98.7, 1302.0], [98.8, 1384.0], [98.9, 1384.0], [99.0, 1613.0], [99.1, 1675.0], [99.2, 1686.0], [99.3, 1686.0], [99.4, 2408.0], [99.5, 2766.0], [99.6, 2807.0], [99.7, 2807.0], [99.8, 2809.0], [99.9, 2906.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 177.0, "series": [{"data": [[600.0, 55.0], [2400.0, 1.0], [2700.0, 1.0], [700.0, 48.0], [2800.0, 2.0], [2900.0, 1.0], [200.0, 176.0], [800.0, 10.0], [900.0, 10.0], [1000.0, 6.0], [1100.0, 3.0], [300.0, 177.0], [1200.0, 3.0], [1300.0, 2.0], [400.0, 110.0], [100.0, 13.0], [1600.0, 3.0], [500.0, 114.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 476.0, "series": [{"data": [[0.0, 476.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60422462E12, "maxY": 1.0, "series": [{"data": [[1.60422468E12, 1.0], [1.60422498E12, 1.0], [1.6042248E12, 1.0], [1.60422486E12, 1.0], [1.60422462E12, 1.0], [1.60422474E12, 1.0], [1.60422492E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422498E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 472.46530612244874, "minX": 1.0, "maxY": 472.46530612244874, "series": [{"data": [[1.0, 472.46530612244874]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 472.46530612244874]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 121.16666666666667, "minX": 1.60422462E12, "maxY": 358370.4166666667, "series": [{"data": [[1.60422468E12, 358370.4166666667], [1.60422498E12, 208165.43333333332], [1.6042248E12, 331123.25], [1.60422486E12, 305039.0333333333], [1.60422462E12, 101240.95], [1.60422474E12, 265408.7166666667], [1.60422492E12, 266437.5333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422468E12, 893.6166666666667], [1.60422498E12, 650.6166666666667], [1.6042248E12, 1120.4833333333333], [1.60422486E12, 908.0166666666667], [1.60422462E12, 121.16666666666667], [1.60422474E12, 853.95], [1.60422492E12, 975.1833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422498E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 397.36423841059593, "minX": 1.60422462E12, "maxY": 750.375, "series": [{"data": [[1.60422468E12, 504.83050847457616], [1.60422498E12, 410.97727272727263], [1.6042248E12, 397.36423841059593], [1.60422486E12, 499.54999999999995], [1.60422462E12, 750.375], [1.60422474E12, 528.7345132743365], [1.60422492E12, 463.7596899224808]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422498E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 396.3377483443709, "minX": 1.60422462E12, "maxY": 748.0625, "series": [{"data": [[1.60422468E12, 503.6440677966104], [1.60422498E12, 409.90909090909093], [1.6042248E12, 396.3377483443709], [1.60422486E12, 498.375], [1.60422462E12, 748.0625], [1.60422474E12, 527.3451327433626], [1.60422492E12, 462.8062015503878]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422498E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013245033112582787, "minX": 1.60422462E12, "maxY": 2.0625, "series": [{"data": [[1.60422468E12, 0.01694915254237288], [1.60422498E12, 0.02272727272727273], [1.6042248E12, 0.013245033112582787], [1.60422486E12, 0.04166666666666667], [1.60422462E12, 2.0625], [1.60422474E12, 0.01769911504424779], [1.60422492E12, 0.015503875968992255]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422498E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 178.0, "minX": 1.60422462E12, "maxY": 2906.0, "series": [{"data": [[1.60422468E12, 2906.0], [1.60422498E12, 1686.0], [1.6042248E12, 2807.0], [1.60422486E12, 1214.0], [1.60422462E12, 2809.0], [1.60422474E12, 2408.0], [1.60422492E12, 854.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422468E12, 191.14199994325637], [1.60422498E12, 187.0], [1.6042248E12, 182.4159995651245], [1.60422486E12, 190.71199976921082], [1.60422462E12, 205.0], [1.60422474E12, 355.10399989128115], [1.60422492E12, 250.52999972105027]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422468E12, 191.35620002269744], [1.60422498E12, 187.0], [1.6042248E12, 184.0576001739502], [1.60422486E12, 191.58320009231568], [1.60422462E12, 205.0], [1.60422474E12, 355.51440004348757], [1.60422492E12, 251.5830001115799]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422468E12, 191.2609999716282], [1.60422498E12, 187.0], [1.6042248E12, 183.32799978256224], [1.60422486E12, 191.1959998846054], [1.60422462E12, 205.0], [1.60422474E12, 355.3319999456406], [1.60422492E12, 251.11499986052513]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422468E12, 191.0], [1.60422498E12, 187.0], [1.6042248E12, 178.0], [1.60422486E12, 190.0], [1.60422462E12, 205.0], [1.60422474E12, 355.0], [1.60422492E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422468E12, 400.0], [1.60422498E12, 276.5], [1.6042248E12, 302.0], [1.60422486E12, 441.0], [1.60422462E12, 478.0], [1.60422474E12, 521.0], [1.60422492E12, 444.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422498E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 222.0, "minX": 1.0, "maxY": 653.5, "series": [{"data": [[1.0, 653.5], [2.0, 503.5], [4.0, 280.5], [5.0, 222.0], [3.0, 369.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 221.0, "minX": 1.0, "maxY": 652.0, "series": [{"data": [[1.0, 652.0], [2.0, 502.0], [4.0, 280.0], [5.0, 221.0], [3.0, 368.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.60422462E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60422468E12, 1.9666666666666666], [1.60422498E12, 1.45], [1.6042248E12, 2.5166666666666666], [1.60422486E12, 2.0], [1.60422462E12, 0.2833333333333333], [1.60422474E12, 1.8833333333333333], [1.60422492E12, 2.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422498E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60422462E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60422468E12, 1.9666666666666666], [1.60422498E12, 1.4666666666666666], [1.6042248E12, 2.5166666666666666], [1.60422486E12, 2.0], [1.60422462E12, 0.26666666666666666], [1.60422474E12, 1.8833333333333333], [1.60422492E12, 2.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422498E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60422462E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60422468E12, 1.9666666666666666], [1.60422498E12, 1.4666666666666666], [1.6042248E12, 2.5166666666666666], [1.60422486E12, 2.0], [1.60422462E12, 0.26666666666666666], [1.60422474E12, 1.8833333333333333], [1.60422492E12, 2.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422498E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60422462E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.60422468E12, 1.9666666666666666], [1.60422498E12, 1.4666666666666666], [1.6042248E12, 2.5166666666666666], [1.60422486E12, 2.0], [1.60422462E12, 0.26666666666666666], [1.60422474E12, 1.8833333333333333], [1.60422492E12, 2.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422498E12, "title": "Total Transactions Per Second"}},
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

