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
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 3049.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 186.0], [0.3, 187.0], [0.4, 187.0], [0.5, 190.0], [0.6, 191.0], [0.7, 193.0], [0.8, 193.0], [0.9, 195.0], [1.0, 196.0], [1.1, 196.0], [1.2, 196.0], [1.3, 196.0], [1.4, 197.0], [1.5, 197.0], [1.6, 197.0], [1.7, 197.0], [1.8, 198.0], [1.9, 198.0], [2.0, 198.0], [2.1, 199.0], [2.2, 199.0], [2.3, 199.0], [2.4, 199.0], [2.5, 201.0], [2.6, 201.0], [2.7, 201.0], [2.8, 202.0], [2.9, 204.0], [3.0, 204.0], [3.1, 204.0], [3.2, 205.0], [3.3, 205.0], [3.4, 205.0], [3.5, 208.0], [3.6, 208.0], [3.7, 209.0], [3.8, 209.0], [3.9, 210.0], [4.0, 210.0], [4.1, 211.0], [4.2, 211.0], [4.3, 212.0], [4.4, 212.0], [4.5, 213.0], [4.6, 213.0], [4.7, 215.0], [4.8, 216.0], [4.9, 216.0], [5.0, 216.0], [5.1, 217.0], [5.2, 217.0], [5.3, 217.0], [5.4, 218.0], [5.5, 219.0], [5.6, 223.0], [5.7, 223.0], [5.8, 224.0], [5.9, 227.0], [6.0, 231.0], [6.1, 231.0], [6.2, 233.0], [6.3, 234.0], [6.4, 234.0], [6.5, 234.0], [6.6, 234.0], [6.7, 239.0], [6.8, 239.0], [6.9, 242.0], [7.0, 242.0], [7.1, 243.0], [7.2, 243.0], [7.3, 244.0], [7.4, 244.0], [7.5, 246.0], [7.6, 246.0], [7.7, 246.0], [7.8, 251.0], [7.9, 252.0], [8.0, 252.0], [8.1, 252.0], [8.2, 257.0], [8.3, 259.0], [8.4, 259.0], [8.5, 260.0], [8.6, 261.0], [8.7, 261.0], [8.8, 261.0], [8.9, 261.0], [9.0, 261.0], [9.1, 261.0], [9.2, 262.0], [9.3, 263.0], [9.4, 263.0], [9.5, 263.0], [9.6, 263.0], [9.7, 264.0], [9.8, 264.0], [9.9, 264.0], [10.0, 264.0], [10.1, 264.0], [10.2, 264.0], [10.3, 264.0], [10.4, 265.0], [10.5, 266.0], [10.6, 266.0], [10.7, 266.0], [10.8, 266.0], [10.9, 266.0], [11.0, 266.0], [11.1, 267.0], [11.2, 267.0], [11.3, 267.0], [11.4, 267.0], [11.5, 268.0], [11.6, 268.0], [11.7, 268.0], [11.8, 269.0], [11.9, 269.0], [12.0, 269.0], [12.1, 269.0], [12.2, 269.0], [12.3, 270.0], [12.4, 271.0], [12.5, 271.0], [12.6, 271.0], [12.7, 271.0], [12.8, 273.0], [12.9, 273.0], [13.0, 273.0], [13.1, 273.0], [13.2, 274.0], [13.3, 274.0], [13.4, 274.0], [13.5, 274.0], [13.6, 274.0], [13.7, 274.0], [13.8, 274.0], [13.9, 274.0], [14.0, 274.0], [14.1, 275.0], [14.2, 275.0], [14.3, 275.0], [14.4, 275.0], [14.5, 275.0], [14.6, 276.0], [14.7, 276.0], [14.8, 276.0], [14.9, 276.0], [15.0, 277.0], [15.1, 277.0], [15.2, 277.0], [15.3, 277.0], [15.4, 277.0], [15.5, 277.0], [15.6, 278.0], [15.7, 278.0], [15.8, 278.0], [15.9, 278.0], [16.0, 278.0], [16.1, 278.0], [16.2, 279.0], [16.3, 279.0], [16.4, 279.0], [16.5, 279.0], [16.6, 279.0], [16.7, 279.0], [16.8, 280.0], [16.9, 280.0], [17.0, 280.0], [17.1, 280.0], [17.2, 280.0], [17.3, 281.0], [17.4, 281.0], [17.5, 281.0], [17.6, 281.0], [17.7, 281.0], [17.8, 281.0], [17.9, 282.0], [18.0, 283.0], [18.1, 283.0], [18.2, 283.0], [18.3, 283.0], [18.4, 283.0], [18.5, 283.0], [18.6, 283.0], [18.7, 283.0], [18.8, 283.0], [18.9, 283.0], [19.0, 283.0], [19.1, 284.0], [19.2, 284.0], [19.3, 284.0], [19.4, 285.0], [19.5, 285.0], [19.6, 285.0], [19.7, 285.0], [19.8, 285.0], [19.9, 286.0], [20.0, 286.0], [20.1, 286.0], [20.2, 286.0], [20.3, 287.0], [20.4, 287.0], [20.5, 288.0], [20.6, 288.0], [20.7, 288.0], [20.8, 288.0], [20.9, 288.0], [21.0, 288.0], [21.1, 289.0], [21.2, 289.0], [21.3, 289.0], [21.4, 290.0], [21.5, 290.0], [21.6, 290.0], [21.7, 290.0], [21.8, 290.0], [21.9, 290.0], [22.0, 290.0], [22.1, 290.0], [22.2, 290.0], [22.3, 290.0], [22.4, 290.0], [22.5, 291.0], [22.6, 291.0], [22.7, 291.0], [22.8, 291.0], [22.9, 292.0], [23.0, 292.0], [23.1, 292.0], [23.2, 292.0], [23.3, 292.0], [23.4, 292.0], [23.5, 292.0], [23.6, 293.0], [23.7, 295.0], [23.8, 295.0], [23.9, 295.0], [24.0, 295.0], [24.1, 296.0], [24.2, 296.0], [24.3, 296.0], [24.4, 296.0], [24.5, 297.0], [24.6, 297.0], [24.7, 297.0], [24.8, 297.0], [24.9, 297.0], [25.0, 297.0], [25.1, 298.0], [25.2, 298.0], [25.3, 298.0], [25.4, 299.0], [25.5, 302.0], [25.6, 303.0], [25.7, 303.0], [25.8, 303.0], [25.9, 305.0], [26.0, 306.0], [26.1, 306.0], [26.2, 306.0], [26.3, 306.0], [26.4, 306.0], [26.5, 306.0], [26.6, 307.0], [26.7, 308.0], [26.8, 308.0], [26.9, 310.0], [27.0, 312.0], [27.1, 312.0], [27.2, 312.0], [27.3, 312.0], [27.4, 312.0], [27.5, 315.0], [27.6, 315.0], [27.7, 318.0], [27.8, 321.0], [27.9, 321.0], [28.0, 321.0], [28.1, 321.0], [28.2, 322.0], [28.3, 322.0], [28.4, 322.0], [28.5, 324.0], [28.6, 327.0], [28.7, 327.0], [28.8, 330.0], [28.9, 330.0], [29.0, 330.0], [29.1, 330.0], [29.2, 331.0], [29.3, 334.0], [29.4, 334.0], [29.5, 334.0], [29.6, 336.0], [29.7, 337.0], [29.8, 339.0], [29.9, 339.0], [30.0, 341.0], [30.1, 342.0], [30.2, 342.0], [30.3, 342.0], [30.4, 347.0], [30.5, 348.0], [30.6, 348.0], [30.7, 350.0], [30.8, 351.0], [30.9, 352.0], [31.0, 352.0], [31.1, 352.0], [31.2, 353.0], [31.3, 354.0], [31.4, 354.0], [31.5, 354.0], [31.6, 356.0], [31.7, 356.0], [31.8, 357.0], [31.9, 357.0], [32.0, 359.0], [32.1, 359.0], [32.2, 360.0], [32.3, 361.0], [32.4, 362.0], [32.5, 362.0], [32.6, 362.0], [32.7, 363.0], [32.8, 363.0], [32.9, 363.0], [33.0, 364.0], [33.1, 364.0], [33.2, 365.0], [33.3, 365.0], [33.4, 365.0], [33.5, 365.0], [33.6, 365.0], [33.7, 366.0], [33.8, 367.0], [33.9, 367.0], [34.0, 367.0], [34.1, 367.0], [34.2, 367.0], [34.3, 368.0], [34.4, 368.0], [34.5, 368.0], [34.6, 368.0], [34.7, 369.0], [34.8, 369.0], [34.9, 369.0], [35.0, 369.0], [35.1, 369.0], [35.2, 370.0], [35.3, 370.0], [35.4, 370.0], [35.5, 370.0], [35.6, 370.0], [35.7, 371.0], [35.8, 371.0], [35.9, 371.0], [36.0, 371.0], [36.1, 372.0], [36.2, 372.0], [36.3, 372.0], [36.4, 373.0], [36.5, 374.0], [36.6, 374.0], [36.7, 374.0], [36.8, 375.0], [36.9, 375.0], [37.0, 375.0], [37.1, 376.0], [37.2, 376.0], [37.3, 376.0], [37.4, 376.0], [37.5, 376.0], [37.6, 376.0], [37.7, 376.0], [37.8, 376.0], [37.9, 377.0], [38.0, 377.0], [38.1, 377.0], [38.2, 377.0], [38.3, 377.0], [38.4, 377.0], [38.5, 377.0], [38.6, 377.0], [38.7, 377.0], [38.8, 378.0], [38.9, 378.0], [39.0, 378.0], [39.1, 379.0], [39.2, 379.0], [39.3, 379.0], [39.4, 379.0], [39.5, 379.0], [39.6, 379.0], [39.7, 379.0], [39.8, 380.0], [39.9, 380.0], [40.0, 380.0], [40.1, 380.0], [40.2, 381.0], [40.3, 381.0], [40.4, 381.0], [40.5, 381.0], [40.6, 381.0], [40.7, 381.0], [40.8, 381.0], [40.9, 381.0], [41.0, 381.0], [41.1, 382.0], [41.2, 382.0], [41.3, 382.0], [41.4, 382.0], [41.5, 382.0], [41.6, 382.0], [41.7, 383.0], [41.8, 383.0], [41.9, 383.0], [42.0, 383.0], [42.1, 383.0], [42.2, 383.0], [42.3, 383.0], [42.4, 384.0], [42.5, 384.0], [42.6, 384.0], [42.7, 384.0], [42.8, 384.0], [42.9, 385.0], [43.0, 385.0], [43.1, 385.0], [43.2, 385.0], [43.3, 386.0], [43.4, 386.0], [43.5, 386.0], [43.6, 386.0], [43.7, 386.0], [43.8, 386.0], [43.9, 386.0], [44.0, 386.0], [44.1, 386.0], [44.2, 386.0], [44.3, 387.0], [44.4, 387.0], [44.5, 387.0], [44.6, 387.0], [44.7, 388.0], [44.8, 388.0], [44.9, 388.0], [45.0, 388.0], [45.1, 388.0], [45.2, 390.0], [45.3, 390.0], [45.4, 391.0], [45.5, 391.0], [45.6, 392.0], [45.7, 392.0], [45.8, 392.0], [45.9, 392.0], [46.0, 392.0], [46.1, 392.0], [46.2, 393.0], [46.3, 393.0], [46.4, 393.0], [46.5, 393.0], [46.6, 393.0], [46.7, 393.0], [46.8, 393.0], [46.9, 394.0], [47.0, 395.0], [47.1, 396.0], [47.2, 396.0], [47.3, 396.0], [47.4, 396.0], [47.5, 396.0], [47.6, 396.0], [47.7, 397.0], [47.8, 397.0], [47.9, 397.0], [48.0, 397.0], [48.1, 397.0], [48.2, 398.0], [48.3, 398.0], [48.4, 398.0], [48.5, 398.0], [48.6, 398.0], [48.7, 398.0], [48.8, 399.0], [48.9, 399.0], [49.0, 399.0], [49.1, 399.0], [49.2, 400.0], [49.3, 401.0], [49.4, 401.0], [49.5, 401.0], [49.6, 401.0], [49.7, 402.0], [49.8, 403.0], [49.9, 403.0], [50.0, 403.0], [50.1, 403.0], [50.2, 403.0], [50.3, 403.0], [50.4, 403.0], [50.5, 404.0], [50.6, 404.0], [50.7, 404.0], [50.8, 405.0], [50.9, 407.0], [51.0, 407.0], [51.1, 407.0], [51.2, 407.0], [51.3, 407.0], [51.4, 407.0], [51.5, 408.0], [51.6, 408.0], [51.7, 408.0], [51.8, 410.0], [51.9, 410.0], [52.0, 411.0], [52.1, 411.0], [52.2, 412.0], [52.3, 413.0], [52.4, 418.0], [52.5, 418.0], [52.6, 419.0], [52.7, 419.0], [52.8, 419.0], [52.9, 419.0], [53.0, 419.0], [53.1, 422.0], [53.2, 423.0], [53.3, 423.0], [53.4, 423.0], [53.5, 424.0], [53.6, 424.0], [53.7, 424.0], [53.8, 424.0], [53.9, 425.0], [54.0, 425.0], [54.1, 427.0], [54.2, 428.0], [54.3, 428.0], [54.4, 428.0], [54.5, 428.0], [54.6, 430.0], [54.7, 430.0], [54.8, 430.0], [54.9, 430.0], [55.0, 433.0], [55.1, 433.0], [55.2, 436.0], [55.3, 436.0], [55.4, 436.0], [55.5, 436.0], [55.6, 437.0], [55.7, 437.0], [55.8, 437.0], [55.9, 437.0], [56.0, 439.0], [56.1, 439.0], [56.2, 441.0], [56.3, 441.0], [56.4, 441.0], [56.5, 441.0], [56.6, 442.0], [56.7, 442.0], [56.8, 442.0], [56.9, 442.0], [57.0, 442.0], [57.1, 443.0], [57.2, 443.0], [57.3, 443.0], [57.4, 443.0], [57.5, 444.0], [57.6, 445.0], [57.7, 446.0], [57.8, 446.0], [57.9, 446.0], [58.0, 446.0], [58.1, 446.0], [58.2, 446.0], [58.3, 447.0], [58.4, 447.0], [58.5, 447.0], [58.6, 447.0], [58.7, 449.0], [58.8, 450.0], [58.9, 450.0], [59.0, 450.0], [59.1, 450.0], [59.2, 451.0], [59.3, 451.0], [59.4, 452.0], [59.5, 452.0], [59.6, 452.0], [59.7, 452.0], [59.8, 454.0], [59.9, 456.0], [60.0, 456.0], [60.1, 456.0], [60.2, 456.0], [60.3, 456.0], [60.4, 456.0], [60.5, 457.0], [60.6, 457.0], [60.7, 459.0], [60.8, 459.0], [60.9, 461.0], [61.0, 461.0], [61.1, 461.0], [61.2, 461.0], [61.3, 465.0], [61.4, 467.0], [61.5, 468.0], [61.6, 468.0], [61.7, 471.0], [61.8, 473.0], [61.9, 473.0], [62.0, 473.0], [62.1, 473.0], [62.2, 473.0], [62.3, 473.0], [62.4, 473.0], [62.5, 474.0], [62.6, 475.0], [62.7, 475.0], [62.8, 476.0], [62.9, 478.0], [63.0, 481.0], [63.1, 481.0], [63.2, 482.0], [63.3, 485.0], [63.4, 485.0], [63.5, 485.0], [63.6, 492.0], [63.7, 493.0], [63.8, 493.0], [63.9, 496.0], [64.0, 497.0], [64.1, 498.0], [64.2, 498.0], [64.3, 499.0], [64.4, 500.0], [64.5, 502.0], [64.6, 502.0], [64.7, 507.0], [64.8, 508.0], [64.9, 510.0], [65.0, 510.0], [65.1, 511.0], [65.2, 511.0], [65.3, 511.0], [65.4, 514.0], [65.5, 514.0], [65.6, 515.0], [65.7, 515.0], [65.8, 515.0], [65.9, 518.0], [66.0, 519.0], [66.1, 519.0], [66.2, 520.0], [66.3, 520.0], [66.4, 521.0], [66.5, 521.0], [66.6, 523.0], [66.7, 523.0], [66.8, 523.0], [66.9, 524.0], [67.0, 526.0], [67.1, 527.0], [67.2, 527.0], [67.3, 527.0], [67.4, 529.0], [67.5, 529.0], [67.6, 529.0], [67.7, 529.0], [67.8, 529.0], [67.9, 530.0], [68.0, 530.0], [68.1, 530.0], [68.2, 531.0], [68.3, 531.0], [68.4, 531.0], [68.5, 532.0], [68.6, 532.0], [68.7, 532.0], [68.8, 532.0], [68.9, 535.0], [69.0, 535.0], [69.1, 535.0], [69.2, 537.0], [69.3, 537.0], [69.4, 537.0], [69.5, 537.0], [69.6, 537.0], [69.7, 539.0], [69.8, 539.0], [69.9, 539.0], [70.0, 539.0], [70.1, 540.0], [70.2, 540.0], [70.3, 541.0], [70.4, 542.0], [70.5, 542.0], [70.6, 542.0], [70.7, 542.0], [70.8, 543.0], [70.9, 543.0], [71.0, 543.0], [71.1, 544.0], [71.2, 546.0], [71.3, 547.0], [71.4, 547.0], [71.5, 548.0], [71.6, 549.0], [71.7, 549.0], [71.8, 549.0], [71.9, 550.0], [72.0, 550.0], [72.1, 550.0], [72.2, 550.0], [72.3, 551.0], [72.4, 551.0], [72.5, 551.0], [72.6, 552.0], [72.7, 552.0], [72.8, 553.0], [72.9, 553.0], [73.0, 554.0], [73.1, 556.0], [73.2, 557.0], [73.3, 557.0], [73.4, 557.0], [73.5, 558.0], [73.6, 558.0], [73.7, 558.0], [73.8, 559.0], [73.9, 560.0], [74.0, 560.0], [74.1, 561.0], [74.2, 561.0], [74.3, 563.0], [74.4, 563.0], [74.5, 563.0], [74.6, 563.0], [74.7, 564.0], [74.8, 564.0], [74.9, 564.0], [75.0, 565.0], [75.1, 565.0], [75.2, 566.0], [75.3, 566.0], [75.4, 566.0], [75.5, 566.0], [75.6, 569.0], [75.7, 572.0], [75.8, 573.0], [75.9, 573.0], [76.0, 574.0], [76.1, 575.0], [76.2, 575.0], [76.3, 575.0], [76.4, 577.0], [76.5, 577.0], [76.6, 578.0], [76.7, 578.0], [76.8, 578.0], [76.9, 580.0], [77.0, 580.0], [77.1, 580.0], [77.2, 581.0], [77.3, 582.0], [77.4, 582.0], [77.5, 583.0], [77.6, 583.0], [77.7, 584.0], [77.8, 584.0], [77.9, 587.0], [78.0, 588.0], [78.1, 588.0], [78.2, 588.0], [78.3, 589.0], [78.4, 590.0], [78.5, 590.0], [78.6, 594.0], [78.7, 596.0], [78.8, 598.0], [78.9, 598.0], [79.0, 599.0], [79.1, 601.0], [79.2, 604.0], [79.3, 604.0], [79.4, 607.0], [79.5, 609.0], [79.6, 610.0], [79.7, 610.0], [79.8, 610.0], [79.9, 611.0], [80.0, 617.0], [80.1, 617.0], [80.2, 620.0], [80.3, 621.0], [80.4, 621.0], [80.5, 623.0], [80.6, 624.0], [80.7, 625.0], [80.8, 625.0], [80.9, 625.0], [81.0, 626.0], [81.1, 626.0], [81.2, 626.0], [81.3, 630.0], [81.4, 631.0], [81.5, 631.0], [81.6, 631.0], [81.7, 633.0], [81.8, 633.0], [81.9, 633.0], [82.0, 634.0], [82.1, 634.0], [82.2, 635.0], [82.3, 635.0], [82.4, 635.0], [82.5, 635.0], [82.6, 636.0], [82.7, 636.0], [82.8, 638.0], [82.9, 641.0], [83.0, 643.0], [83.1, 643.0], [83.2, 643.0], [83.3, 645.0], [83.4, 645.0], [83.5, 649.0], [83.6, 650.0], [83.7, 650.0], [83.8, 650.0], [83.9, 651.0], [84.0, 652.0], [84.1, 652.0], [84.2, 652.0], [84.3, 658.0], [84.4, 658.0], [84.5, 660.0], [84.6, 660.0], [84.7, 660.0], [84.8, 662.0], [84.9, 662.0], [85.0, 662.0], [85.1, 663.0], [85.2, 664.0], [85.3, 664.0], [85.4, 665.0], [85.5, 666.0], [85.6, 666.0], [85.7, 666.0], [85.8, 667.0], [85.9, 668.0], [86.0, 668.0], [86.1, 668.0], [86.2, 671.0], [86.3, 672.0], [86.4, 673.0], [86.5, 673.0], [86.6, 673.0], [86.7, 675.0], [86.8, 675.0], [86.9, 675.0], [87.0, 676.0], [87.1, 681.0], [87.2, 681.0], [87.3, 681.0], [87.4, 681.0], [87.5, 683.0], [87.6, 683.0], [87.7, 684.0], [87.8, 686.0], [87.9, 691.0], [88.0, 691.0], [88.1, 693.0], [88.2, 699.0], [88.3, 699.0], [88.4, 699.0], [88.5, 706.0], [88.6, 708.0], [88.7, 708.0], [88.8, 709.0], [88.9, 712.0], [89.0, 712.0], [89.1, 712.0], [89.2, 713.0], [89.3, 713.0], [89.4, 715.0], [89.5, 715.0], [89.6, 716.0], [89.7, 717.0], [89.8, 718.0], [89.9, 718.0], [90.0, 719.0], [90.1, 719.0], [90.2, 719.0], [90.3, 720.0], [90.4, 720.0], [90.5, 720.0], [90.6, 720.0], [90.7, 720.0], [90.8, 720.0], [90.9, 722.0], [91.0, 722.0], [91.1, 723.0], [91.2, 725.0], [91.3, 726.0], [91.4, 726.0], [91.5, 729.0], [91.6, 729.0], [91.7, 729.0], [91.8, 732.0], [91.9, 737.0], [92.0, 737.0], [92.1, 737.0], [92.2, 744.0], [92.3, 750.0], [92.4, 752.0], [92.5, 752.0], [92.6, 754.0], [92.7, 764.0], [92.8, 765.0], [92.9, 765.0], [93.0, 769.0], [93.1, 772.0], [93.2, 772.0], [93.3, 772.0], [93.4, 773.0], [93.5, 792.0], [93.6, 792.0], [93.7, 794.0], [93.8, 811.0], [93.9, 812.0], [94.0, 812.0], [94.1, 815.0], [94.2, 829.0], [94.3, 832.0], [94.4, 832.0], [94.5, 838.0], [94.6, 841.0], [94.7, 845.0], [94.8, 845.0], [94.9, 847.0], [95.0, 853.0], [95.1, 853.0], [95.2, 855.0], [95.3, 860.0], [95.4, 879.0], [95.5, 879.0], [95.6, 905.0], [95.7, 918.0], [95.8, 934.0], [95.9, 934.0], [96.0, 939.0], [96.1, 941.0], [96.2, 946.0], [96.3, 946.0], [96.4, 948.0], [96.5, 954.0], [96.6, 967.0], [96.7, 967.0], [96.8, 975.0], [96.9, 984.0], [97.0, 984.0], [97.1, 989.0], [97.2, 1006.0], [97.3, 1022.0], [97.4, 1022.0], [97.5, 1107.0], [97.6, 1108.0], [97.7, 1111.0], [97.8, 1111.0], [97.9, 1142.0], [98.0, 1173.0], [98.1, 1224.0], [98.2, 1224.0], [98.3, 1233.0], [98.4, 1238.0], [98.5, 1238.0], [98.6, 1238.0], [98.7, 1242.0], [98.8, 1367.0], [98.9, 1367.0], [99.0, 1666.0], [99.1, 1739.0], [99.2, 1740.0], [99.3, 1740.0], [99.4, 2431.0], [99.5, 2826.0], [99.6, 2839.0], [99.7, 2839.0], [99.8, 2936.0], [99.9, 3049.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 174.0, "series": [{"data": [[600.0, 69.0], [2400.0, 1.0], [2800.0, 2.0], [700.0, 39.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 169.0], [800.0, 13.0], [900.0, 12.0], [1000.0, 2.0], [1100.0, 5.0], [300.0, 174.0], [1200.0, 5.0], [1300.0, 1.0], [400.0, 112.0], [100.0, 18.0], [1600.0, 1.0], [1700.0, 2.0], [500.0, 108.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 474.0, "series": [{"data": [[0.0, 474.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 253.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60249992E12, "maxY": 1.0, "series": [{"data": [[1.60250016E12, 1.0], [1.60250004E12, 1.0], [1.60250022E12, 1.0], [1.60249992E12, 1.0], [1.6025001E12, 1.0], [1.60250028E12, 1.0], [1.60249998E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60250028E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 477.56462585034024, "minX": 1.0, "maxY": 477.56462585034024, "series": [{"data": [[1.0, 477.56462585034024]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 477.56462585034024]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 105.93333333333334, "minX": 1.60249992E12, "maxY": 381387.0833333333, "series": [{"data": [[1.60250016E12, 300553.5833333333], [1.60250004E12, 264049.75], [1.60250022E12, 265388.2833333333], [1.60249992E12, 61193.1], [1.6025001E12, 336733.76666666666], [1.60250028E12, 226457.3], [1.60249998E12, 381387.0833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60250016E12, 954.4], [1.60250004E12, 853.95], [1.60250022E12, 914.85], [1.60249992E12, 105.93333333333334], [1.6025001E12, 1081.6666666666667], [1.60250028E12, 763.8333333333334], [1.60249998E12, 848.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60250028E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 410.448275862069, "minX": 1.60249992E12, "maxY": 556.3571428571428, "series": [{"data": [[1.60250016E12, 473.90551181102364], [1.60250004E12, 533.0353982300886], [1.60250022E12, 492.98347107438025], [1.60249992E12, 556.3571428571428], [1.6025001E12, 410.448275862069], [1.60250028E12, 411.00970873786423], [1.60249998E12, 547.339285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60250028E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 409.3862068965517, "minX": 1.60249992E12, "maxY": 554.6428571428572, "series": [{"data": [[1.60250016E12, 472.78740157480297], [1.60250004E12, 531.7168141592922], [1.60250022E12, 491.99173553719], [1.60249992E12, 554.6428571428572], [1.6025001E12, 409.3862068965517], [1.60250028E12, 410.0679611650486], [1.60249998E12, 546.0267857142857]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60250028E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006896551724137934, "minX": 1.60249992E12, "maxY": 2.5, "series": [{"data": [[1.60250016E12, 0.031496062992126], [1.60250004E12, 0.01769911504424779], [1.60250022E12, 0.01652892561983471], [1.60249992E12, 2.5], [1.6025001E12, 0.006896551724137934], [1.60250028E12, 0.00970873786407767], [1.60249998E12, 0.017857142857142856]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60250028E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 183.0, "minX": 1.60249992E12, "maxY": 3049.0, "series": [{"data": [[1.60250016E12, 1238.0], [1.60250004E12, 2431.0], [1.60250022E12, 860.0], [1.60249992E12, 2839.0], [1.6025001E12, 2936.0], [1.60250028E12, 1739.0], [1.60249998E12, 3049.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60250016E12, 186.15199996948243], [1.60250004E12, 352.05199994564055], [1.60250022E12, 277.09799997091295], [1.60249992E12, 208.0], [1.6025001E12, 196.62799993038178], [1.60250028E12, 183.0], [1.60249998E12, 190.0169999730587]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60250016E12, 186.26720001220704], [1.60250004E12, 352.25720002174376], [1.60250022E12, 277.20780001163484], [1.60249992E12, 208.0], [1.6025001E12, 196.8908000278473], [1.60250028E12, 183.53280017852782], [1.60249998E12, 190.1187000107765]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60250016E12, 186.21599998474122], [1.60250004E12, 352.16599997282026], [1.60250022E12, 277.1589999854565], [1.60249992E12, 208.0], [1.6025001E12, 196.77399996519088], [1.60250028E12, 183.0], [1.60249998E12, 190.07349998652936]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60250016E12, 186.0], [1.60250004E12, 352.0], [1.60250022E12, 277.0], [1.60249992E12, 208.0], [1.6025001E12, 196.0], [1.60250028E12, 183.0], [1.60249998E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60250016E12, 411.0], [1.60250004E12, 526.0], [1.60250022E12, 482.0], [1.60249992E12, 454.0], [1.6025001E12, 299.0], [1.60250028E12, 288.0], [1.60249998E12, 401.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60250028E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 278.5, "minX": 1.0, "maxY": 681.0, "series": [{"data": [[2.0, 498.5], [1.0, 681.0], [4.0, 278.5], [3.0, 369.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 278.5, "minX": 1.0, "maxY": 679.0, "series": [{"data": [[2.0, 497.0], [1.0, 679.0], [4.0, 278.5], [3.0, 369.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60249992E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60250016E12, 2.1], [1.60250004E12, 1.8833333333333333], [1.60250022E12, 2.033333333333333], [1.60249992E12, 0.25], [1.6025001E12, 2.4166666666666665], [1.60250028E12, 1.7], [1.60249998E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60250028E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60249992E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60250016E12, 2.1166666666666667], [1.60250004E12, 1.8833333333333333], [1.60250022E12, 2.0166666666666666], [1.60249992E12, 0.23333333333333334], [1.6025001E12, 2.4166666666666665], [1.60250028E12, 1.7166666666666666], [1.60249998E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60250028E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60249992E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60250016E12, 2.1166666666666667], [1.60250004E12, 1.8833333333333333], [1.60250022E12, 2.0166666666666666], [1.60249992E12, 0.23333333333333334], [1.6025001E12, 2.4166666666666665], [1.60250028E12, 1.7166666666666666], [1.60249998E12, 1.8666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60250028E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60249992E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.60250016E12, 2.1166666666666667], [1.60250004E12, 1.8833333333333333], [1.60250022E12, 2.0166666666666666], [1.60249992E12, 0.23333333333333334], [1.6025001E12, 2.4166666666666665], [1.60250028E12, 1.7166666666666666], [1.60249998E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60250028E12, "title": "Total Transactions Per Second"}},
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

