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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 2860.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 188.0], [0.3, 193.0], [0.4, 193.0], [0.5, 196.0], [0.6, 198.0], [0.7, 200.0], [0.8, 200.0], [0.9, 200.0], [1.0, 201.0], [1.1, 201.0], [1.2, 201.0], [1.3, 202.0], [1.4, 202.0], [1.5, 202.0], [1.6, 202.0], [1.7, 202.0], [1.8, 203.0], [1.9, 203.0], [2.0, 205.0], [2.1, 206.0], [2.2, 206.0], [2.3, 206.0], [2.4, 208.0], [2.5, 208.0], [2.6, 209.0], [2.7, 209.0], [2.8, 209.0], [2.9, 209.0], [3.0, 211.0], [3.1, 211.0], [3.2, 213.0], [3.3, 213.0], [3.4, 213.0], [3.5, 214.0], [3.6, 217.0], [3.7, 217.0], [3.8, 217.0], [3.9, 217.0], [4.0, 218.0], [4.1, 218.0], [4.2, 218.0], [4.3, 218.0], [4.4, 218.0], [4.5, 220.0], [4.6, 220.0], [4.7, 220.0], [4.8, 220.0], [4.9, 222.0], [5.0, 222.0], [5.1, 222.0], [5.2, 222.0], [5.3, 222.0], [5.4, 223.0], [5.5, 223.0], [5.6, 224.0], [5.7, 224.0], [5.8, 224.0], [5.9, 224.0], [6.0, 224.0], [6.1, 224.0], [6.2, 225.0], [6.3, 225.0], [6.4, 227.0], [6.5, 227.0], [6.6, 229.0], [6.7, 229.0], [6.8, 229.0], [6.9, 230.0], [7.0, 231.0], [7.1, 231.0], [7.2, 231.0], [7.3, 233.0], [7.4, 233.0], [7.5, 236.0], [7.6, 236.0], [7.7, 237.0], [7.8, 238.0], [7.9, 238.0], [8.0, 238.0], [8.1, 240.0], [8.2, 243.0], [8.3, 244.0], [8.4, 244.0], [8.5, 247.0], [8.6, 255.0], [8.7, 255.0], [8.8, 255.0], [8.9, 255.0], [9.0, 258.0], [9.1, 258.0], [9.2, 258.0], [9.3, 258.0], [9.4, 259.0], [9.5, 259.0], [9.6, 260.0], [9.7, 260.0], [9.8, 261.0], [9.9, 261.0], [10.0, 261.0], [10.1, 261.0], [10.2, 261.0], [10.3, 262.0], [10.4, 262.0], [10.5, 262.0], [10.6, 262.0], [10.7, 263.0], [10.8, 263.0], [10.9, 263.0], [11.0, 263.0], [11.1, 263.0], [11.2, 263.0], [11.3, 263.0], [11.4, 263.0], [11.5, 264.0], [11.6, 265.0], [11.7, 265.0], [11.8, 265.0], [11.9, 265.0], [12.0, 266.0], [12.1, 266.0], [12.2, 267.0], [12.3, 267.0], [12.4, 267.0], [12.5, 267.0], [12.6, 267.0], [12.7, 268.0], [12.8, 269.0], [12.9, 269.0], [13.0, 269.0], [13.1, 270.0], [13.2, 270.0], [13.3, 270.0], [13.4, 271.0], [13.5, 272.0], [13.6, 272.0], [13.7, 273.0], [13.8, 273.0], [13.9, 273.0], [14.0, 273.0], [14.1, 274.0], [14.2, 274.0], [14.3, 274.0], [14.4, 274.0], [14.5, 275.0], [14.6, 275.0], [14.7, 276.0], [14.8, 276.0], [14.9, 278.0], [15.0, 278.0], [15.1, 278.0], [15.2, 278.0], [15.3, 278.0], [15.4, 278.0], [15.5, 278.0], [15.6, 279.0], [15.7, 279.0], [15.8, 279.0], [15.9, 279.0], [16.0, 281.0], [16.1, 281.0], [16.2, 281.0], [16.3, 281.0], [16.4, 281.0], [16.5, 282.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 283.0], [17.0, 283.0], [17.1, 284.0], [17.2, 286.0], [17.3, 286.0], [17.4, 286.0], [17.5, 287.0], [17.6, 287.0], [17.7, 288.0], [17.8, 288.0], [17.9, 288.0], [18.0, 289.0], [18.1, 289.0], [18.2, 289.0], [18.3, 289.0], [18.4, 289.0], [18.5, 289.0], [18.6, 289.0], [18.7, 289.0], [18.8, 289.0], [18.9, 289.0], [19.0, 290.0], [19.1, 290.0], [19.2, 291.0], [19.3, 291.0], [19.4, 291.0], [19.5, 292.0], [19.6, 292.0], [19.7, 292.0], [19.8, 292.0], [19.9, 292.0], [20.0, 292.0], [20.1, 292.0], [20.2, 292.0], [20.3, 292.0], [20.4, 292.0], [20.5, 293.0], [20.6, 293.0], [20.7, 293.0], [20.8, 293.0], [20.9, 294.0], [21.0, 294.0], [21.1, 295.0], [21.2, 295.0], [21.3, 296.0], [21.4, 296.0], [21.5, 297.0], [21.6, 297.0], [21.7, 297.0], [21.8, 297.0], [21.9, 297.0], [22.0, 298.0], [22.1, 299.0], [22.2, 299.0], [22.3, 299.0], [22.4, 299.0], [22.5, 299.0], [22.6, 299.0], [22.7, 299.0], [22.8, 300.0], [22.9, 300.0], [23.0, 300.0], [23.1, 300.0], [23.2, 300.0], [23.3, 301.0], [23.4, 301.0], [23.5, 302.0], [23.6, 302.0], [23.7, 302.0], [23.8, 302.0], [23.9, 302.0], [24.0, 302.0], [24.1, 303.0], [24.2, 303.0], [24.3, 304.0], [24.4, 305.0], [24.5, 305.0], [24.6, 305.0], [24.7, 306.0], [24.8, 306.0], [24.9, 306.0], [25.0, 306.0], [25.1, 306.0], [25.2, 307.0], [25.3, 307.0], [25.4, 308.0], [25.5, 308.0], [25.6, 308.0], [25.7, 308.0], [25.8, 309.0], [25.9, 309.0], [26.0, 310.0], [26.1, 310.0], [26.2, 311.0], [26.3, 312.0], [26.4, 312.0], [26.5, 312.0], [26.6, 312.0], [26.7, 313.0], [26.8, 313.0], [26.9, 314.0], [27.0, 317.0], [27.1, 317.0], [27.2, 317.0], [27.3, 319.0], [27.4, 321.0], [27.5, 321.0], [27.6, 321.0], [27.7, 323.0], [27.8, 323.0], [27.9, 324.0], [28.0, 324.0], [28.1, 326.0], [28.2, 326.0], [28.3, 326.0], [28.4, 326.0], [28.5, 329.0], [28.6, 329.0], [28.7, 329.0], [28.8, 330.0], [28.9, 330.0], [29.0, 331.0], [29.1, 331.0], [29.2, 336.0], [29.3, 336.0], [29.4, 336.0], [29.5, 336.0], [29.6, 337.0], [29.7, 341.0], [29.8, 341.0], [29.9, 341.0], [30.0, 343.0], [30.1, 352.0], [30.2, 352.0], [30.3, 354.0], [30.4, 355.0], [30.5, 355.0], [30.6, 355.0], [30.7, 358.0], [30.8, 358.0], [30.9, 358.0], [31.0, 358.0], [31.1, 359.0], [31.2, 359.0], [31.3, 360.0], [31.4, 360.0], [31.5, 361.0], [31.6, 362.0], [31.7, 362.0], [31.8, 363.0], [31.9, 363.0], [32.0, 364.0], [32.1, 364.0], [32.2, 366.0], [32.3, 367.0], [32.4, 368.0], [32.5, 368.0], [32.6, 368.0], [32.7, 372.0], [32.8, 375.0], [32.9, 375.0], [33.0, 376.0], [33.1, 377.0], [33.2, 377.0], [33.3, 377.0], [33.4, 378.0], [33.5, 380.0], [33.6, 380.0], [33.7, 381.0], [33.8, 381.0], [33.9, 381.0], [34.0, 381.0], [34.1, 382.0], [34.2, 383.0], [34.3, 383.0], [34.4, 383.0], [34.5, 384.0], [34.6, 385.0], [34.7, 385.0], [34.8, 385.0], [34.9, 388.0], [35.0, 388.0], [35.1, 388.0], [35.2, 389.0], [35.3, 389.0], [35.4, 389.0], [35.5, 389.0], [35.6, 389.0], [35.7, 390.0], [35.8, 390.0], [35.9, 390.0], [36.0, 390.0], [36.1, 391.0], [36.2, 391.0], [36.3, 391.0], [36.4, 391.0], [36.5, 392.0], [36.6, 393.0], [36.7, 393.0], [36.8, 394.0], [36.9, 394.0], [37.0, 394.0], [37.1, 394.0], [37.2, 394.0], [37.3, 394.0], [37.4, 394.0], [37.5, 394.0], [37.6, 394.0], [37.7, 395.0], [37.8, 395.0], [37.9, 395.0], [38.0, 396.0], [38.1, 396.0], [38.2, 396.0], [38.3, 396.0], [38.4, 396.0], [38.5, 396.0], [38.6, 397.0], [38.7, 397.0], [38.8, 397.0], [38.9, 397.0], [39.0, 397.0], [39.1, 397.0], [39.2, 398.0], [39.3, 398.0], [39.4, 398.0], [39.5, 398.0], [39.6, 398.0], [39.7, 398.0], [39.8, 398.0], [39.9, 398.0], [40.0, 399.0], [40.1, 399.0], [40.2, 399.0], [40.3, 399.0], [40.4, 399.0], [40.5, 400.0], [40.6, 400.0], [40.7, 400.0], [40.8, 400.0], [40.9, 400.0], [41.0, 400.0], [41.1, 400.0], [41.2, 400.0], [41.3, 401.0], [41.4, 401.0], [41.5, 401.0], [41.6, 401.0], [41.7, 401.0], [41.8, 401.0], [41.9, 401.0], [42.0, 401.0], [42.1, 401.0], [42.2, 401.0], [42.3, 401.0], [42.4, 402.0], [42.5, 402.0], [42.6, 402.0], [42.7, 402.0], [42.8, 402.0], [42.9, 402.0], [43.0, 402.0], [43.1, 402.0], [43.2, 402.0], [43.3, 403.0], [43.4, 403.0], [43.5, 403.0], [43.6, 403.0], [43.7, 403.0], [43.8, 403.0], [43.9, 404.0], [44.0, 404.0], [44.1, 405.0], [44.2, 405.0], [44.3, 405.0], [44.4, 405.0], [44.5, 405.0], [44.6, 405.0], [44.7, 405.0], [44.8, 406.0], [44.9, 406.0], [45.0, 406.0], [45.1, 406.0], [45.2, 406.0], [45.3, 406.0], [45.4, 406.0], [45.5, 406.0], [45.6, 406.0], [45.7, 406.0], [45.8, 406.0], [45.9, 406.0], [46.0, 407.0], [46.1, 407.0], [46.2, 407.0], [46.3, 407.0], [46.4, 407.0], [46.5, 407.0], [46.6, 407.0], [46.7, 407.0], [46.8, 407.0], [46.9, 407.0], [47.0, 407.0], [47.1, 408.0], [47.2, 408.0], [47.3, 408.0], [47.4, 409.0], [47.5, 409.0], [47.6, 409.0], [47.7, 409.0], [47.8, 409.0], [47.9, 409.0], [48.0, 409.0], [48.1, 410.0], [48.2, 410.0], [48.3, 410.0], [48.4, 410.0], [48.5, 410.0], [48.6, 410.0], [48.7, 410.0], [48.8, 411.0], [48.9, 412.0], [49.0, 412.0], [49.1, 412.0], [49.2, 412.0], [49.3, 412.0], [49.4, 413.0], [49.5, 413.0], [49.6, 413.0], [49.7, 413.0], [49.8, 413.0], [49.9, 413.0], [50.0, 414.0], [50.1, 414.0], [50.2, 414.0], [50.3, 414.0], [50.4, 414.0], [50.5, 416.0], [50.6, 416.0], [50.7, 417.0], [50.8, 418.0], [50.9, 418.0], [51.0, 418.0], [51.1, 418.0], [51.2, 418.0], [51.3, 419.0], [51.4, 419.0], [51.5, 421.0], [51.6, 422.0], [51.7, 422.0], [51.8, 422.0], [51.9, 422.0], [52.0, 422.0], [52.1, 422.0], [52.2, 423.0], [52.3, 425.0], [52.4, 425.0], [52.5, 425.0], [52.6, 427.0], [52.7, 428.0], [52.8, 430.0], [52.9, 430.0], [53.0, 430.0], [53.1, 432.0], [53.2, 432.0], [53.3, 432.0], [53.4, 433.0], [53.5, 434.0], [53.6, 434.0], [53.7, 435.0], [53.8, 439.0], [53.9, 440.0], [54.0, 440.0], [54.1, 441.0], [54.2, 442.0], [54.3, 443.0], [54.4, 443.0], [54.5, 443.0], [54.6, 444.0], [54.7, 444.0], [54.8, 444.0], [54.9, 447.0], [55.0, 447.0], [55.1, 447.0], [55.2, 452.0], [55.3, 453.0], [55.4, 456.0], [55.5, 456.0], [55.6, 457.0], [55.7, 457.0], [55.8, 457.0], [55.9, 457.0], [56.0, 458.0], [56.1, 459.0], [56.2, 459.0], [56.3, 459.0], [56.4, 459.0], [56.5, 459.0], [56.6, 459.0], [56.7, 459.0], [56.8, 460.0], [56.9, 460.0], [57.0, 460.0], [57.1, 461.0], [57.2, 462.0], [57.3, 463.0], [57.4, 463.0], [57.5, 464.0], [57.6, 464.0], [57.7, 465.0], [57.8, 465.0], [57.9, 465.0], [58.0, 465.0], [58.1, 466.0], [58.2, 466.0], [58.3, 467.0], [58.4, 467.0], [58.5, 467.0], [58.6, 468.0], [58.7, 468.0], [58.8, 469.0], [58.9, 469.0], [59.0, 469.0], [59.1, 469.0], [59.2, 470.0], [59.3, 470.0], [59.4, 470.0], [59.5, 471.0], [59.6, 471.0], [59.7, 471.0], [59.8, 472.0], [59.9, 472.0], [60.0, 472.0], [60.1, 472.0], [60.2, 474.0], [60.3, 475.0], [60.4, 475.0], [60.5, 475.0], [60.6, 475.0], [60.7, 475.0], [60.8, 475.0], [60.9, 477.0], [61.0, 478.0], [61.1, 478.0], [61.2, 478.0], [61.3, 478.0], [61.4, 481.0], [61.5, 483.0], [61.6, 483.0], [61.7, 483.0], [61.8, 483.0], [61.9, 483.0], [62.0, 484.0], [62.1, 485.0], [62.2, 486.0], [62.3, 486.0], [62.4, 489.0], [62.5, 489.0], [62.6, 492.0], [62.7, 492.0], [62.8, 493.0], [62.9, 494.0], [63.0, 494.0], [63.1, 494.0], [63.2, 496.0], [63.3, 498.0], [63.4, 498.0], [63.5, 508.0], [63.6, 508.0], [63.7, 508.0], [63.8, 508.0], [63.9, 509.0], [64.0, 511.0], [64.1, 511.0], [64.2, 511.0], [64.3, 514.0], [64.4, 515.0], [64.5, 517.0], [64.6, 517.0], [64.7, 517.0], [64.8, 518.0], [64.9, 519.0], [65.0, 519.0], [65.1, 519.0], [65.2, 521.0], [65.3, 521.0], [65.4, 521.0], [65.5, 522.0], [65.6, 522.0], [65.7, 522.0], [65.8, 523.0], [65.9, 523.0], [66.0, 526.0], [66.1, 526.0], [66.2, 527.0], [66.3, 527.0], [66.4, 527.0], [66.5, 527.0], [66.6, 527.0], [66.7, 530.0], [66.8, 530.0], [66.9, 530.0], [67.0, 531.0], [67.1, 531.0], [67.2, 531.0], [67.3, 531.0], [67.4, 533.0], [67.5, 533.0], [67.6, 533.0], [67.7, 534.0], [67.8, 534.0], [67.9, 534.0], [68.0, 534.0], [68.1, 534.0], [68.2, 534.0], [68.3, 534.0], [68.4, 534.0], [68.5, 534.0], [68.6, 534.0], [68.7, 534.0], [68.8, 535.0], [68.9, 535.0], [69.0, 537.0], [69.1, 537.0], [69.2, 539.0], [69.3, 539.0], [69.4, 540.0], [69.5, 540.0], [69.6, 542.0], [69.7, 542.0], [69.8, 542.0], [69.9, 542.0], [70.0, 542.0], [70.1, 544.0], [70.2, 544.0], [70.3, 545.0], [70.4, 546.0], [70.5, 547.0], [70.6, 547.0], [70.7, 547.0], [70.8, 548.0], [70.9, 548.0], [71.0, 548.0], [71.1, 548.0], [71.2, 549.0], [71.3, 549.0], [71.4, 549.0], [71.5, 549.0], [71.6, 550.0], [71.7, 550.0], [71.8, 551.0], [71.9, 552.0], [72.0, 553.0], [72.1, 553.0], [72.2, 554.0], [72.3, 556.0], [72.4, 556.0], [72.5, 556.0], [72.6, 557.0], [72.7, 557.0], [72.8, 559.0], [72.9, 559.0], [73.0, 559.0], [73.1, 559.0], [73.2, 559.0], [73.3, 559.0], [73.4, 560.0], [73.5, 560.0], [73.6, 560.0], [73.7, 561.0], [73.8, 562.0], [73.9, 562.0], [74.0, 562.0], [74.1, 563.0], [74.2, 563.0], [74.3, 564.0], [74.4, 564.0], [74.5, 565.0], [74.6, 565.0], [74.7, 565.0], [74.8, 565.0], [74.9, 567.0], [75.0, 567.0], [75.1, 567.0], [75.2, 569.0], [75.3, 571.0], [75.4, 572.0], [75.5, 572.0], [75.6, 575.0], [75.7, 577.0], [75.8, 577.0], [75.9, 577.0], [76.0, 579.0], [76.1, 580.0], [76.2, 581.0], [76.3, 581.0], [76.4, 581.0], [76.5, 583.0], [76.6, 583.0], [76.7, 583.0], [76.8, 584.0], [76.9, 585.0], [77.0, 585.0], [77.1, 586.0], [77.2, 588.0], [77.3, 588.0], [77.4, 588.0], [77.5, 589.0], [77.6, 589.0], [77.7, 590.0], [77.8, 590.0], [77.9, 590.0], [78.0, 591.0], [78.1, 592.0], [78.2, 592.0], [78.3, 593.0], [78.4, 594.0], [78.5, 594.0], [78.6, 595.0], [78.7, 596.0], [78.8, 597.0], [78.9, 597.0], [79.0, 597.0], [79.1, 600.0], [79.2, 601.0], [79.3, 601.0], [79.4, 602.0], [79.5, 602.0], [79.6, 603.0], [79.7, 603.0], [79.8, 603.0], [79.9, 607.0], [80.0, 608.0], [80.1, 608.0], [80.2, 609.0], [80.3, 610.0], [80.4, 610.0], [80.5, 611.0], [80.6, 611.0], [80.7, 615.0], [80.8, 615.0], [80.9, 617.0], [81.0, 618.0], [81.1, 620.0], [81.2, 620.0], [81.3, 623.0], [81.4, 624.0], [81.5, 625.0], [81.6, 625.0], [81.7, 626.0], [81.8, 627.0], [81.9, 627.0], [82.0, 628.0], [82.1, 629.0], [82.2, 630.0], [82.3, 630.0], [82.4, 631.0], [82.5, 635.0], [82.6, 638.0], [82.7, 638.0], [82.8, 639.0], [82.9, 640.0], [83.0, 640.0], [83.1, 640.0], [83.2, 642.0], [83.3, 643.0], [83.4, 643.0], [83.5, 644.0], [83.6, 646.0], [83.7, 646.0], [83.8, 646.0], [83.9, 647.0], [84.0, 647.0], [84.1, 649.0], [84.2, 649.0], [84.3, 650.0], [84.4, 652.0], [84.5, 653.0], [84.6, 653.0], [84.7, 654.0], [84.8, 656.0], [84.9, 656.0], [85.0, 656.0], [85.1, 656.0], [85.2, 658.0], [85.3, 658.0], [85.4, 659.0], [85.5, 659.0], [85.6, 662.0], [85.7, 662.0], [85.8, 663.0], [85.9, 663.0], [86.0, 664.0], [86.1, 664.0], [86.2, 670.0], [86.3, 670.0], [86.4, 670.0], [86.5, 670.0], [86.6, 671.0], [86.7, 671.0], [86.8, 671.0], [86.9, 672.0], [87.0, 674.0], [87.1, 675.0], [87.2, 675.0], [87.3, 677.0], [87.4, 677.0], [87.5, 678.0], [87.6, 678.0], [87.7, 680.0], [87.8, 680.0], [87.9, 682.0], [88.0, 682.0], [88.1, 688.0], [88.2, 688.0], [88.3, 689.0], [88.4, 689.0], [88.5, 690.0], [88.6, 692.0], [88.7, 692.0], [88.8, 694.0], [88.9, 698.0], [89.0, 701.0], [89.1, 701.0], [89.2, 705.0], [89.3, 706.0], [89.4, 713.0], [89.5, 713.0], [89.6, 713.0], [89.7, 715.0], [89.8, 716.0], [89.9, 716.0], [90.0, 719.0], [90.1, 720.0], [90.2, 720.0], [90.3, 721.0], [90.4, 722.0], [90.5, 723.0], [90.6, 723.0], [90.7, 725.0], [90.8, 725.0], [90.9, 727.0], [91.0, 727.0], [91.1, 728.0], [91.2, 728.0], [91.3, 728.0], [91.4, 728.0], [91.5, 729.0], [91.6, 730.0], [91.7, 730.0], [91.8, 731.0], [91.9, 735.0], [92.0, 736.0], [92.1, 736.0], [92.2, 738.0], [92.3, 738.0], [92.4, 739.0], [92.5, 739.0], [92.6, 740.0], [92.7, 748.0], [92.8, 749.0], [92.9, 749.0], [93.0, 750.0], [93.1, 754.0], [93.2, 757.0], [93.3, 757.0], [93.4, 758.0], [93.5, 762.0], [93.6, 762.0], [93.7, 768.0], [93.8, 788.0], [93.9, 791.0], [94.0, 791.0], [94.1, 814.0], [94.2, 819.0], [94.3, 823.0], [94.4, 823.0], [94.5, 844.0], [94.6, 846.0], [94.7, 848.0], [94.8, 848.0], [94.9, 856.0], [95.0, 857.0], [95.1, 857.0], [95.2, 858.0], [95.3, 868.0], [95.4, 878.0], [95.5, 878.0], [95.6, 896.0], [95.7, 920.0], [95.8, 931.0], [95.9, 931.0], [96.0, 938.0], [96.1, 943.0], [96.2, 944.0], [96.3, 944.0], [96.4, 955.0], [96.5, 957.0], [96.6, 961.0], [96.7, 961.0], [96.8, 965.0], [96.9, 968.0], [97.0, 968.0], [97.1, 972.0], [97.2, 987.0], [97.3, 995.0], [97.4, 995.0], [97.5, 1005.0], [97.6, 1025.0], [97.7, 1043.0], [97.8, 1043.0], [97.9, 1076.0], [98.0, 1098.0], [98.1, 1121.0], [98.2, 1121.0], [98.3, 1153.0], [98.4, 1209.0], [98.5, 1209.0], [98.6, 1215.0], [98.7, 1219.0], [98.8, 1238.0], [98.9, 1238.0], [99.0, 1253.0], [99.1, 1358.0], [99.2, 1645.0], [99.3, 1645.0], [99.4, 1664.0], [99.5, 1667.0], [99.6, 2514.0], [99.7, 2514.0], [99.8, 2819.0], [99.9, 2860.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 169.0, "series": [{"data": [[600.0, 73.0], [2500.0, 1.0], [2800.0, 2.0], [700.0, 37.0], [200.0, 162.0], [800.0, 12.0], [900.0, 13.0], [1000.0, 5.0], [1100.0, 2.0], [300.0, 130.0], [1200.0, 5.0], [1300.0, 1.0], [400.0, 169.0], [100.0, 5.0], [1600.0, 3.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 466.0, "series": [{"data": [[0.0, 466.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 263.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60249908E12, "maxY": 1.0, "series": [{"data": [[1.6024992E12, 1.0], [1.60249938E12, 1.0], [1.60249908E12, 1.0], [1.60249926E12, 1.0], [1.60249914E12, 1.0], [1.60249932E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249938E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 477.3156462585032, "minX": 1.0, "maxY": 477.3156462585032, "series": [{"data": [[1.0, 477.3156462585032]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 477.3156462585032]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 733.9666666666667, "minX": 1.60249908E12, "maxY": 380711.75, "series": [{"data": [[1.6024992E12, 289120.0333333333], [1.60249938E12, 292356.75], [1.60249908E12, 380711.75], [1.60249926E12, 337928.9], [1.60249914E12, 267038.5833333333], [1.60249932E12, 268604.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6024992E12, 1081.0666666666666], [1.60249938E12, 1050.5666666666666], [1.60249908E12, 733.9666666666667], [1.60249926E12, 939.6833333333333], [1.60249914E12, 870.4333333333333], [1.60249932E12, 847.3166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249938E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 410.85517241379307, "minX": 1.60249908E12, "maxY": 538.5670103092781, "series": [{"data": [[1.6024992E12, 410.85517241379307], [1.60249938E12, 421.43971631205653], [1.60249908E12, 538.5670103092781], [1.60249926E12, 480.58399999999995], [1.60249914E12, 522.0869565217392], [1.60249932E12, 531.0357142857142]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249938E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 409.9241379310345, "minX": 1.60249908E12, "maxY": 537.1030927835052, "series": [{"data": [[1.6024992E12, 409.9241379310345], [1.60249938E12, 420.5744680851063], [1.60249908E12, 537.1030927835052], [1.60249926E12, 479.33599999999984], [1.60249914E12, 520.8956521739128], [1.60249932E12, 529.9464285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249938E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.013793103448275867, "minX": 1.60249908E12, "maxY": 0.3402061855670106, "series": [{"data": [[1.6024992E12, 0.013793103448275867], [1.60249938E12, 0.021276595744680847], [1.60249908E12, 0.3402061855670106], [1.60249926E12, 0.016000000000000007], [1.60249914E12, 0.034782608695652195], [1.60249932E12, 0.01785714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249938E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60249908E12, "maxY": 2860.0, "series": [{"data": [[1.6024992E12, 1664.0], [1.60249938E12, 1667.0], [1.60249908E12, 2819.0], [1.60249926E12, 2860.0], [1.60249914E12, 856.0], [1.60249932E12, 858.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6024992E12, 184.56999982595443], [1.60249938E12, 211.55599993228913], [1.60249908E12, 193.0], [1.60249926E12, 196.53599987983705], [1.60249914E12, 336.70399955749514], [1.60249932E12, 266.20699808716773]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6024992E12, 185.2270000696182], [1.60249938E12, 211.81160002708435], [1.60249908E12, 193.0], [1.60249926E12, 196.9896000480652], [1.60249914E12, 338.374400177002], [1.60249932E12, 273.4277007651329]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6024992E12, 184.93499991297722], [1.60249938E12, 211.69799996614455], [1.60249908E12, 193.0], [1.60249926E12, 196.7879999399185], [1.60249914E12, 337.63199977874757], [1.60249932E12, 270.21849904358385]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6024992E12, 183.0], [1.60249938E12, 211.0], [1.60249908E12, 193.0], [1.60249926E12, 196.0], [1.60249914E12, 336.0], [1.60249932E12, 265.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6024992E12, 312.0], [1.60249938E12, 317.0], [1.60249908E12, 414.0], [1.60249926E12, 405.0], [1.60249914E12, 477.0], [1.60249932E12, 531.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249938E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 222.0, "minX": 1.0, "maxY": 670.0, "series": [{"data": [[1.0, 670.0], [2.0, 485.5], [4.0, 274.0], [5.0, 222.0], [3.0, 376.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 221.5, "minX": 1.0, "maxY": 668.0, "series": [{"data": [[1.0, 668.0], [2.0, 485.0], [4.0, 274.0], [5.0, 221.5], [3.0, 375.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.60249908E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.6024992E12, 2.4166666666666665], [1.60249938E12, 2.3333333333333335], [1.60249908E12, 1.6333333333333333], [1.60249926E12, 2.0833333333333335], [1.60249914E12, 1.9166666666666667], [1.60249932E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249938E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60249908E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.6024992E12, 2.4166666666666665], [1.60249938E12, 2.35], [1.60249908E12, 1.6166666666666667], [1.60249926E12, 2.0833333333333335], [1.60249914E12, 1.9166666666666667], [1.60249932E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249938E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60249908E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.6024992E12, 2.4166666666666665], [1.60249938E12, 2.35], [1.60249908E12, 1.6166666666666667], [1.60249926E12, 2.0833333333333335], [1.60249914E12, 1.9166666666666667], [1.60249932E12, 1.8666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249938E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6166666666666667, "minX": 1.60249908E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.6024992E12, 2.4166666666666665], [1.60249938E12, 2.35], [1.60249908E12, 1.6166666666666667], [1.60249926E12, 2.0833333333333335], [1.60249914E12, 1.9166666666666667], [1.60249932E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249938E12, "title": "Total Transactions Per Second"}},
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

