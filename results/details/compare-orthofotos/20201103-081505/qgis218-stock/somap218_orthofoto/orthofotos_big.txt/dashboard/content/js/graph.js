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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 8111.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 9.0], [0.3, 11.0], [0.4, 13.0], [0.5, 14.0], [0.6, 14.0], [0.7, 14.0], [0.8, 16.0], [0.9, 18.0], [1.0, 18.0], [1.1, 21.0], [1.2, 24.0], [1.3, 26.0], [1.4, 27.0], [1.5, 28.0], [1.6, 30.0], [1.7, 33.0], [1.8, 34.0], [1.9, 37.0], [2.0, 39.0], [2.1, 41.0], [2.2, 43.0], [2.3, 45.0], [2.4, 51.0], [2.5, 52.0], [2.6, 58.0], [2.7, 62.0], [2.8, 66.0], [2.9, 71.0], [3.0, 73.0], [3.1, 79.0], [3.2, 85.0], [3.3, 90.0], [3.4, 93.0], [3.5, 97.0], [3.6, 100.0], [3.7, 107.0], [3.8, 109.0], [3.9, 115.0], [4.0, 121.0], [4.1, 124.0], [4.2, 126.0], [4.3, 129.0], [4.4, 130.0], [4.5, 131.0], [4.6, 132.0], [4.7, 133.0], [4.8, 135.0], [4.9, 137.0], [5.0, 138.0], [5.1, 139.0], [5.2, 140.0], [5.3, 141.0], [5.4, 142.0], [5.5, 143.0], [5.6, 144.0], [5.7, 144.0], [5.8, 145.0], [5.9, 145.0], [6.0, 146.0], [6.1, 147.0], [6.2, 147.0], [6.3, 148.0], [6.4, 149.0], [6.5, 149.0], [6.6, 150.0], [6.7, 150.0], [6.8, 151.0], [6.9, 151.0], [7.0, 152.0], [7.1, 153.0], [7.2, 153.0], [7.3, 154.0], [7.4, 155.0], [7.5, 155.0], [7.6, 156.0], [7.7, 156.0], [7.8, 157.0], [7.9, 157.0], [8.0, 158.0], [8.1, 158.0], [8.2, 158.0], [8.3, 159.0], [8.4, 160.0], [8.5, 161.0], [8.6, 161.0], [8.7, 162.0], [8.8, 162.0], [8.9, 163.0], [9.0, 164.0], [9.1, 164.0], [9.2, 165.0], [9.3, 165.0], [9.4, 166.0], [9.5, 166.0], [9.6, 167.0], [9.7, 167.0], [9.8, 168.0], [9.9, 169.0], [10.0, 169.0], [10.1, 170.0], [10.2, 170.0], [10.3, 171.0], [10.4, 171.0], [10.5, 172.0], [10.6, 172.0], [10.7, 172.0], [10.8, 173.0], [10.9, 173.0], [11.0, 174.0], [11.1, 175.0], [11.2, 175.0], [11.3, 176.0], [11.4, 176.0], [11.5, 177.0], [11.6, 178.0], [11.7, 178.0], [11.8, 179.0], [11.9, 180.0], [12.0, 180.0], [12.1, 180.0], [12.2, 181.0], [12.3, 182.0], [12.4, 182.0], [12.5, 182.0], [12.6, 183.0], [12.7, 183.0], [12.8, 183.0], [12.9, 184.0], [13.0, 184.0], [13.1, 185.0], [13.2, 186.0], [13.3, 186.0], [13.4, 187.0], [13.5, 187.0], [13.6, 188.0], [13.7, 188.0], [13.8, 189.0], [13.9, 190.0], [14.0, 190.0], [14.1, 191.0], [14.2, 191.0], [14.3, 192.0], [14.4, 192.0], [14.5, 193.0], [14.6, 193.0], [14.7, 194.0], [14.8, 194.0], [14.9, 195.0], [15.0, 195.0], [15.1, 195.0], [15.2, 196.0], [15.3, 197.0], [15.4, 197.0], [15.5, 197.0], [15.6, 198.0], [15.7, 198.0], [15.8, 199.0], [15.9, 200.0], [16.0, 200.0], [16.1, 201.0], [16.2, 202.0], [16.3, 202.0], [16.4, 203.0], [16.5, 204.0], [16.6, 204.0], [16.7, 205.0], [16.8, 206.0], [16.9, 207.0], [17.0, 207.0], [17.1, 208.0], [17.2, 208.0], [17.3, 209.0], [17.4, 209.0], [17.5, 210.0], [17.6, 211.0], [17.7, 212.0], [17.8, 212.0], [17.9, 213.0], [18.0, 213.0], [18.1, 213.0], [18.2, 214.0], [18.3, 214.0], [18.4, 215.0], [18.5, 215.0], [18.6, 216.0], [18.7, 217.0], [18.8, 217.0], [18.9, 217.0], [19.0, 218.0], [19.1, 219.0], [19.2, 219.0], [19.3, 219.0], [19.4, 220.0], [19.5, 220.0], [19.6, 221.0], [19.7, 221.0], [19.8, 222.0], [19.9, 222.0], [20.0, 223.0], [20.1, 223.0], [20.2, 224.0], [20.3, 224.0], [20.4, 224.0], [20.5, 225.0], [20.6, 225.0], [20.7, 226.0], [20.8, 227.0], [20.9, 227.0], [21.0, 227.0], [21.1, 228.0], [21.2, 228.0], [21.3, 229.0], [21.4, 230.0], [21.5, 230.0], [21.6, 231.0], [21.7, 231.0], [21.8, 232.0], [21.9, 232.0], [22.0, 233.0], [22.1, 234.0], [22.2, 234.0], [22.3, 235.0], [22.4, 235.0], [22.5, 236.0], [22.6, 236.0], [22.7, 236.0], [22.8, 237.0], [22.9, 237.0], [23.0, 238.0], [23.1, 238.0], [23.2, 239.0], [23.3, 240.0], [23.4, 240.0], [23.5, 241.0], [23.6, 242.0], [23.7, 242.0], [23.8, 242.0], [23.9, 243.0], [24.0, 243.0], [24.1, 243.0], [24.2, 244.0], [24.3, 245.0], [24.4, 246.0], [24.5, 246.0], [24.6, 246.0], [24.7, 247.0], [24.8, 248.0], [24.9, 248.0], [25.0, 249.0], [25.1, 249.0], [25.2, 250.0], [25.3, 250.0], [25.4, 251.0], [25.5, 251.0], [25.6, 251.0], [25.7, 252.0], [25.8, 253.0], [25.9, 253.0], [26.0, 254.0], [26.1, 254.0], [26.2, 254.0], [26.3, 255.0], [26.4, 255.0], [26.5, 256.0], [26.6, 256.0], [26.7, 256.0], [26.8, 257.0], [26.9, 257.0], [27.0, 258.0], [27.1, 258.0], [27.2, 258.0], [27.3, 259.0], [27.4, 259.0], [27.5, 259.0], [27.6, 260.0], [27.7, 260.0], [27.8, 260.0], [27.9, 261.0], [28.0, 262.0], [28.1, 262.0], [28.2, 263.0], [28.3, 263.0], [28.4, 264.0], [28.5, 265.0], [28.6, 265.0], [28.7, 265.0], [28.8, 266.0], [28.9, 267.0], [29.0, 267.0], [29.1, 268.0], [29.2, 268.0], [29.3, 268.0], [29.4, 269.0], [29.5, 269.0], [29.6, 269.0], [29.7, 270.0], [29.8, 270.0], [29.9, 271.0], [30.0, 271.0], [30.1, 272.0], [30.2, 272.0], [30.3, 273.0], [30.4, 274.0], [30.5, 274.0], [30.6, 275.0], [30.7, 275.0], [30.8, 275.0], [30.9, 275.0], [31.0, 276.0], [31.1, 276.0], [31.2, 277.0], [31.3, 277.0], [31.4, 277.0], [31.5, 278.0], [31.6, 278.0], [31.7, 278.0], [31.8, 279.0], [31.9, 279.0], [32.0, 280.0], [32.1, 280.0], [32.2, 281.0], [32.3, 281.0], [32.4, 281.0], [32.5, 282.0], [32.6, 282.0], [32.7, 282.0], [32.8, 283.0], [32.9, 283.0], [33.0, 284.0], [33.1, 284.0], [33.2, 285.0], [33.3, 285.0], [33.4, 285.0], [33.5, 286.0], [33.6, 286.0], [33.7, 286.0], [33.8, 287.0], [33.9, 287.0], [34.0, 287.0], [34.1, 288.0], [34.2, 288.0], [34.3, 288.0], [34.4, 288.0], [34.5, 289.0], [34.6, 290.0], [34.7, 290.0], [34.8, 290.0], [34.9, 290.0], [35.0, 291.0], [35.1, 291.0], [35.2, 292.0], [35.3, 292.0], [35.4, 292.0], [35.5, 292.0], [35.6, 293.0], [35.7, 293.0], [35.8, 294.0], [35.9, 294.0], [36.0, 295.0], [36.1, 295.0], [36.2, 295.0], [36.3, 296.0], [36.4, 296.0], [36.5, 296.0], [36.6, 297.0], [36.7, 297.0], [36.8, 297.0], [36.9, 298.0], [37.0, 298.0], [37.1, 298.0], [37.2, 299.0], [37.3, 299.0], [37.4, 299.0], [37.5, 299.0], [37.6, 300.0], [37.7, 300.0], [37.8, 300.0], [37.9, 300.0], [38.0, 301.0], [38.1, 301.0], [38.2, 302.0], [38.3, 302.0], [38.4, 303.0], [38.5, 303.0], [38.6, 304.0], [38.7, 304.0], [38.8, 304.0], [38.9, 305.0], [39.0, 305.0], [39.1, 305.0], [39.2, 305.0], [39.3, 306.0], [39.4, 306.0], [39.5, 306.0], [39.6, 307.0], [39.7, 307.0], [39.8, 307.0], [39.9, 308.0], [40.0, 309.0], [40.1, 309.0], [40.2, 309.0], [40.3, 310.0], [40.4, 311.0], [40.5, 311.0], [40.6, 312.0], [40.7, 312.0], [40.8, 312.0], [40.9, 312.0], [41.0, 313.0], [41.1, 313.0], [41.2, 314.0], [41.3, 314.0], [41.4, 315.0], [41.5, 315.0], [41.6, 316.0], [41.7, 316.0], [41.8, 316.0], [41.9, 317.0], [42.0, 317.0], [42.1, 318.0], [42.2, 318.0], [42.3, 319.0], [42.4, 319.0], [42.5, 319.0], [42.6, 320.0], [42.7, 320.0], [42.8, 320.0], [42.9, 321.0], [43.0, 322.0], [43.1, 322.0], [43.2, 323.0], [43.3, 323.0], [43.4, 323.0], [43.5, 324.0], [43.6, 325.0], [43.7, 325.0], [43.8, 326.0], [43.9, 326.0], [44.0, 327.0], [44.1, 327.0], [44.2, 328.0], [44.3, 328.0], [44.4, 329.0], [44.5, 330.0], [44.6, 330.0], [44.7, 331.0], [44.8, 331.0], [44.9, 331.0], [45.0, 331.0], [45.1, 332.0], [45.2, 332.0], [45.3, 333.0], [45.4, 334.0], [45.5, 334.0], [45.6, 334.0], [45.7, 335.0], [45.8, 335.0], [45.9, 335.0], [46.0, 336.0], [46.1, 336.0], [46.2, 337.0], [46.3, 337.0], [46.4, 338.0], [46.5, 338.0], [46.6, 338.0], [46.7, 339.0], [46.8, 339.0], [46.9, 339.0], [47.0, 340.0], [47.1, 340.0], [47.2, 341.0], [47.3, 341.0], [47.4, 341.0], [47.5, 342.0], [47.6, 342.0], [47.7, 342.0], [47.8, 343.0], [47.9, 343.0], [48.0, 343.0], [48.1, 344.0], [48.2, 344.0], [48.3, 345.0], [48.4, 345.0], [48.5, 346.0], [48.6, 346.0], [48.7, 346.0], [48.8, 347.0], [48.9, 347.0], [49.0, 348.0], [49.1, 348.0], [49.2, 349.0], [49.3, 349.0], [49.4, 349.0], [49.5, 350.0], [49.6, 350.0], [49.7, 350.0], [49.8, 351.0], [49.9, 351.0], [50.0, 352.0], [50.1, 352.0], [50.2, 353.0], [50.3, 353.0], [50.4, 354.0], [50.5, 354.0], [50.6, 355.0], [50.7, 355.0], [50.8, 356.0], [50.9, 356.0], [51.0, 356.0], [51.1, 357.0], [51.2, 358.0], [51.3, 358.0], [51.4, 359.0], [51.5, 359.0], [51.6, 360.0], [51.7, 360.0], [51.8, 361.0], [51.9, 362.0], [52.0, 362.0], [52.1, 363.0], [52.2, 363.0], [52.3, 363.0], [52.4, 364.0], [52.5, 365.0], [52.6, 365.0], [52.7, 366.0], [52.8, 366.0], [52.9, 367.0], [53.0, 367.0], [53.1, 367.0], [53.2, 367.0], [53.3, 368.0], [53.4, 368.0], [53.5, 369.0], [53.6, 370.0], [53.7, 371.0], [53.8, 372.0], [53.9, 372.0], [54.0, 372.0], [54.1, 373.0], [54.2, 373.0], [54.3, 374.0], [54.4, 374.0], [54.5, 375.0], [54.6, 375.0], [54.7, 375.0], [54.8, 375.0], [54.9, 376.0], [55.0, 376.0], [55.1, 377.0], [55.2, 378.0], [55.3, 378.0], [55.4, 379.0], [55.5, 380.0], [55.6, 380.0], [55.7, 380.0], [55.8, 381.0], [55.9, 381.0], [56.0, 382.0], [56.1, 382.0], [56.2, 382.0], [56.3, 382.0], [56.4, 383.0], [56.5, 383.0], [56.6, 384.0], [56.7, 384.0], [56.8, 385.0], [56.9, 385.0], [57.0, 386.0], [57.1, 386.0], [57.2, 386.0], [57.3, 387.0], [57.4, 387.0], [57.5, 388.0], [57.6, 388.0], [57.7, 389.0], [57.8, 390.0], [57.9, 391.0], [58.0, 391.0], [58.1, 392.0], [58.2, 393.0], [58.3, 393.0], [58.4, 394.0], [58.5, 394.0], [58.6, 395.0], [58.7, 396.0], [58.8, 396.0], [58.9, 397.0], [59.0, 398.0], [59.1, 398.0], [59.2, 399.0], [59.3, 399.0], [59.4, 400.0], [59.5, 400.0], [59.6, 400.0], [59.7, 401.0], [59.8, 402.0], [59.9, 402.0], [60.0, 402.0], [60.1, 403.0], [60.2, 404.0], [60.3, 404.0], [60.4, 404.0], [60.5, 405.0], [60.6, 406.0], [60.7, 406.0], [60.8, 406.0], [60.9, 407.0], [61.0, 407.0], [61.1, 407.0], [61.2, 408.0], [61.3, 410.0], [61.4, 411.0], [61.5, 411.0], [61.6, 412.0], [61.7, 412.0], [61.8, 413.0], [61.9, 413.0], [62.0, 414.0], [62.1, 414.0], [62.2, 415.0], [62.3, 416.0], [62.4, 416.0], [62.5, 417.0], [62.6, 417.0], [62.7, 417.0], [62.8, 418.0], [62.9, 419.0], [63.0, 419.0], [63.1, 420.0], [63.2, 421.0], [63.3, 421.0], [63.4, 422.0], [63.5, 423.0], [63.6, 423.0], [63.7, 424.0], [63.8, 424.0], [63.9, 425.0], [64.0, 426.0], [64.1, 426.0], [64.2, 427.0], [64.3, 427.0], [64.4, 428.0], [64.5, 429.0], [64.6, 429.0], [64.7, 429.0], [64.8, 430.0], [64.9, 430.0], [65.0, 431.0], [65.1, 432.0], [65.2, 433.0], [65.3, 433.0], [65.4, 434.0], [65.5, 434.0], [65.6, 434.0], [65.7, 435.0], [65.8, 435.0], [65.9, 436.0], [66.0, 436.0], [66.1, 437.0], [66.2, 437.0], [66.3, 438.0], [66.4, 439.0], [66.5, 439.0], [66.6, 440.0], [66.7, 440.0], [66.8, 441.0], [66.9, 442.0], [67.0, 442.0], [67.1, 443.0], [67.2, 443.0], [67.3, 444.0], [67.4, 445.0], [67.5, 445.0], [67.6, 446.0], [67.7, 446.0], [67.8, 447.0], [67.9, 448.0], [68.0, 449.0], [68.1, 450.0], [68.2, 451.0], [68.3, 451.0], [68.4, 452.0], [68.5, 452.0], [68.6, 453.0], [68.7, 453.0], [68.8, 454.0], [68.9, 454.0], [69.0, 455.0], [69.1, 455.0], [69.2, 456.0], [69.3, 457.0], [69.4, 457.0], [69.5, 458.0], [69.6, 459.0], [69.7, 459.0], [69.8, 460.0], [69.9, 461.0], [70.0, 462.0], [70.1, 462.0], [70.2, 463.0], [70.3, 464.0], [70.4, 464.0], [70.5, 464.0], [70.6, 465.0], [70.7, 465.0], [70.8, 466.0], [70.9, 467.0], [71.0, 467.0], [71.1, 468.0], [71.2, 469.0], [71.3, 469.0], [71.4, 470.0], [71.5, 471.0], [71.6, 472.0], [71.7, 473.0], [71.8, 473.0], [71.9, 473.0], [72.0, 474.0], [72.1, 475.0], [72.2, 475.0], [72.3, 476.0], [72.4, 477.0], [72.5, 477.0], [72.6, 478.0], [72.7, 479.0], [72.8, 479.0], [72.9, 481.0], [73.0, 481.0], [73.1, 482.0], [73.2, 482.0], [73.3, 483.0], [73.4, 484.0], [73.5, 485.0], [73.6, 485.0], [73.7, 486.0], [73.8, 486.0], [73.9, 487.0], [74.0, 488.0], [74.1, 489.0], [74.2, 490.0], [74.3, 490.0], [74.4, 491.0], [74.5, 492.0], [74.6, 492.0], [74.7, 493.0], [74.8, 493.0], [74.9, 493.0], [75.0, 494.0], [75.1, 494.0], [75.2, 494.0], [75.3, 496.0], [75.4, 497.0], [75.5, 498.0], [75.6, 499.0], [75.7, 500.0], [75.8, 501.0], [75.9, 502.0], [76.0, 502.0], [76.1, 504.0], [76.2, 505.0], [76.3, 505.0], [76.4, 506.0], [76.5, 506.0], [76.6, 507.0], [76.7, 509.0], [76.8, 509.0], [76.9, 511.0], [77.0, 511.0], [77.1, 512.0], [77.2, 513.0], [77.3, 513.0], [77.4, 515.0], [77.5, 516.0], [77.6, 516.0], [77.7, 517.0], [77.8, 519.0], [77.9, 520.0], [78.0, 520.0], [78.1, 521.0], [78.2, 523.0], [78.3, 524.0], [78.4, 524.0], [78.5, 526.0], [78.6, 527.0], [78.7, 527.0], [78.8, 528.0], [78.9, 529.0], [79.0, 531.0], [79.1, 532.0], [79.2, 534.0], [79.3, 535.0], [79.4, 536.0], [79.5, 537.0], [79.6, 538.0], [79.7, 539.0], [79.8, 540.0], [79.9, 542.0], [80.0, 543.0], [80.1, 545.0], [80.2, 545.0], [80.3, 546.0], [80.4, 548.0], [80.5, 548.0], [80.6, 550.0], [80.7, 550.0], [80.8, 551.0], [80.9, 552.0], [81.0, 552.0], [81.1, 553.0], [81.2, 554.0], [81.3, 555.0], [81.4, 556.0], [81.5, 557.0], [81.6, 558.0], [81.7, 560.0], [81.8, 561.0], [81.9, 561.0], [82.0, 562.0], [82.1, 563.0], [82.2, 565.0], [82.3, 566.0], [82.4, 568.0], [82.5, 569.0], [82.6, 570.0], [82.7, 571.0], [82.8, 574.0], [82.9, 575.0], [83.0, 575.0], [83.1, 577.0], [83.2, 577.0], [83.3, 578.0], [83.4, 580.0], [83.5, 580.0], [83.6, 581.0], [83.7, 582.0], [83.8, 584.0], [83.9, 585.0], [84.0, 586.0], [84.1, 588.0], [84.2, 589.0], [84.3, 591.0], [84.4, 592.0], [84.5, 593.0], [84.6, 594.0], [84.7, 596.0], [84.8, 597.0], [84.9, 597.0], [85.0, 599.0], [85.1, 600.0], [85.2, 601.0], [85.3, 603.0], [85.4, 605.0], [85.5, 607.0], [85.6, 609.0], [85.7, 611.0], [85.8, 612.0], [85.9, 613.0], [86.0, 615.0], [86.1, 616.0], [86.2, 617.0], [86.3, 618.0], [86.4, 619.0], [86.5, 621.0], [86.6, 623.0], [86.7, 626.0], [86.8, 627.0], [86.9, 629.0], [87.0, 632.0], [87.1, 633.0], [87.2, 634.0], [87.3, 636.0], [87.4, 637.0], [87.5, 639.0], [87.6, 640.0], [87.7, 643.0], [87.8, 644.0], [87.9, 649.0], [88.0, 650.0], [88.1, 652.0], [88.2, 654.0], [88.3, 655.0], [88.4, 657.0], [88.5, 660.0], [88.6, 661.0], [88.7, 664.0], [88.8, 665.0], [88.9, 666.0], [89.0, 669.0], [89.1, 670.0], [89.2, 673.0], [89.3, 674.0], [89.4, 676.0], [89.5, 679.0], [89.6, 681.0], [89.7, 682.0], [89.8, 685.0], [89.9, 688.0], [90.0, 691.0], [90.1, 693.0], [90.2, 695.0], [90.3, 700.0], [90.4, 702.0], [90.5, 705.0], [90.6, 709.0], [90.7, 712.0], [90.8, 715.0], [90.9, 717.0], [91.0, 722.0], [91.1, 723.0], [91.2, 727.0], [91.3, 731.0], [91.4, 735.0], [91.5, 739.0], [91.6, 743.0], [91.7, 747.0], [91.8, 748.0], [91.9, 751.0], [92.0, 758.0], [92.1, 762.0], [92.2, 765.0], [92.3, 767.0], [92.4, 769.0], [92.5, 771.0], [92.6, 774.0], [92.7, 778.0], [92.8, 784.0], [92.9, 787.0], [93.0, 790.0], [93.1, 792.0], [93.2, 798.0], [93.3, 807.0], [93.4, 811.0], [93.5, 816.0], [93.6, 820.0], [93.7, 827.0], [93.8, 836.0], [93.9, 842.0], [94.0, 854.0], [94.1, 861.0], [94.2, 868.0], [94.3, 879.0], [94.4, 888.0], [94.5, 896.0], [94.6, 901.0], [94.7, 907.0], [94.8, 918.0], [94.9, 932.0], [95.0, 949.0], [95.1, 969.0], [95.2, 978.0], [95.3, 992.0], [95.4, 1002.0], [95.5, 1010.0], [95.6, 1021.0], [95.7, 1032.0], [95.8, 1053.0], [95.9, 1078.0], [96.0, 1096.0], [96.1, 1126.0], [96.2, 1135.0], [96.3, 1157.0], [96.4, 1176.0], [96.5, 1201.0], [96.6, 1225.0], [96.7, 1252.0], [96.8, 1268.0], [96.9, 1295.0], [97.0, 1334.0], [97.1, 1357.0], [97.2, 1417.0], [97.3, 1450.0], [97.4, 1460.0], [97.5, 1490.0], [97.6, 1502.0], [97.7, 1519.0], [97.8, 1541.0], [97.9, 1573.0], [98.0, 1613.0], [98.1, 1645.0], [98.2, 1691.0], [98.3, 1724.0], [98.4, 1755.0], [98.5, 1793.0], [98.6, 1836.0], [98.7, 1903.0], [98.8, 1932.0], [98.9, 1953.0], [99.0, 2073.0], [99.1, 2197.0], [99.2, 2363.0], [99.3, 2499.0], [99.4, 2820.0], [99.5, 3502.0], [99.6, 4099.0], [99.7, 4321.0], [99.8, 4979.0], [99.9, 6988.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1131.0, "series": [{"data": [[0.0, 186.0], [600.0, 272.0], [700.0, 152.0], [800.0, 70.0], [900.0, 41.0], [1000.0, 36.0], [1100.0, 23.0], [1200.0, 24.0], [1300.0, 11.0], [1400.0, 21.0], [1500.0, 21.0], [1600.0, 13.0], [1700.0, 15.0], [1800.0, 9.0], [1900.0, 14.0], [2000.0, 5.0], [2100.0, 4.0], [2300.0, 5.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3200.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 2.0], [4100.0, 2.0], [4300.0, 2.0], [4200.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [6900.0, 2.0], [6800.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [7700.0, 1.0], [8100.0, 1.0], [100.0, 638.0], [200.0, 1126.0], [300.0, 1131.0], [400.0, 844.0], [500.0, 489.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 126.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3929.0, "series": [{"data": [[0.0, 3929.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1135.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 126.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.916201117318439, "minX": 1.6043913E12, "maxY": 10.0, "series": [{"data": [[1.60439142E12, 10.0], [1.60439136E12, 10.0], [1.60439154E12, 9.916201117318439], [1.60439148E12, 10.0], [1.6043913E12, 9.99022346368714]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439154E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 307.0, "minX": 1.0, "maxY": 820.0, "series": [{"data": [[8.0, 501.75], [4.0, 506.0], [2.0, 398.0], [1.0, 418.0], [9.0, 508.5], [10.0, 441.3301139656167], [5.0, 342.0], [6.0, 820.0], [3.0, 406.0], [7.0, 307.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.989980732177239, 441.4233140655098]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3741.05, "minX": 1.6043913E12, "maxY": 1.0298595583333334E7, "series": [{"data": [[1.60439142E12, 1.0298595583333334E7], [1.60439136E12, 8217030.166666667], [1.60439154E12, 3628195.8666666667], [1.60439148E12, 8697400.933333334], [1.6043913E12, 5136275.616666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439142E12, 10204.0], [1.60439136E12, 7925.5], [1.60439154E12, 3741.05], [1.60439148E12, 8534.433333333332], [1.6043913E12, 4738.783333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439154E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 382.8449720670393, "minX": 1.6043913E12, "maxY": 510.0700256191289, "series": [{"data": [[1.60439142E12, 390.9033112582776], [1.60439136E12, 510.0700256191289], [1.60439154E12, 415.3258845437618], [1.60439148E12, 482.7101910828026], [1.6043913E12, 382.8449720670393]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439154E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 378.4064245810056, "minX": 1.6043913E12, "maxY": 505.8411614005121, "series": [{"data": [[1.60439142E12, 386.7834437086095], [1.60439136E12, 505.8411614005121], [1.60439154E12, 411.60335195530763], [1.60439148E12, 479.1090764331205], [1.6043913E12, 378.4064245810056]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439154E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006369426751592363, "minX": 1.6043913E12, "maxY": 0.13268156424581015, "series": [{"data": [[1.60439142E12, 0.009271523178807958], [1.60439136E12, 0.007685738684884714], [1.60439154E12, 0.009310986964618252], [1.60439148E12, 0.006369426751592363], [1.6043913E12, 0.13268156424581015]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439154E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.6043913E12, "maxY": 8111.0, "series": [{"data": [[1.60439142E12, 4020.0], [1.60439136E12, 8111.0], [1.60439154E12, 5204.0], [1.60439148E12, 7774.0], [1.6043913E12, 3502.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439142E12, 33.59899963974953], [1.60439136E12, 14.0], [1.60439154E12, 47.89399910211563], [1.60439148E12, 14.0], [1.6043913E12, 122.90599965810776]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439142E12, 34.0], [1.60439136E12, 14.0], [1.60439154E12, 49.32620005130768], [1.60439148E12, 14.0], [1.6043913E12, 124.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439142E12, 34.0], [1.60439136E12, 14.0], [1.60439154E12, 49.1109999358654], [1.60439148E12, 14.0], [1.6043913E12, 123.62299982905388]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439142E12, 5.0], [1.60439136E12, 3.0], [1.60439154E12, 33.0], [1.60439148E12, 2.0], [1.6043913E12, 32.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439142E12, 342.0], [1.60439136E12, 370.0], [1.60439154E12, 359.0], [1.60439148E12, 375.0], [1.6043913E12, 323.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439154E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 176.5, "minX": 2.0, "maxY": 2210.0, "series": [{"data": [[33.0, 280.0], [32.0, 266.0], [2.0, 176.5], [34.0, 278.5], [35.0, 224.0], [36.0, 278.5], [37.0, 219.0], [3.0, 2210.0], [4.0, 840.0], [5.0, 1491.5], [8.0, 663.0], [9.0, 524.0], [11.0, 271.5], [12.0, 671.0], [13.0, 457.0], [14.0, 563.5], [15.0, 465.5], [16.0, 401.0], [17.0, 389.0], [18.0, 449.0], [19.0, 454.5], [20.0, 443.5], [21.0, 431.5], [22.0, 425.0], [23.0, 403.0], [24.0, 375.0], [25.0, 362.0], [26.0, 348.5], [27.0, 336.0], [28.0, 321.0], [29.0, 299.0], [30.0, 317.0], [31.0, 297.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 176.5, "minX": 2.0, "maxY": 2208.5, "series": [{"data": [[33.0, 279.0], [32.0, 263.0], [2.0, 176.5], [34.0, 276.5], [35.0, 220.0], [36.0, 275.0], [37.0, 219.0], [3.0, 2208.5], [4.0, 839.5], [5.0, 1491.0], [8.0, 661.5], [9.0, 524.0], [11.0, 270.0], [12.0, 661.5], [13.0, 456.0], [14.0, 553.5], [15.0, 462.5], [16.0, 397.5], [17.0, 389.0], [18.0, 445.5], [19.0, 452.0], [20.0, 440.0], [21.0, 427.0], [22.0, 417.5], [23.0, 397.0], [24.0, 370.0], [25.0, 354.5], [26.0, 343.5], [27.0, 329.0], [28.0, 316.5], [29.0, 297.5], [30.0, 313.5], [31.0, 292.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.783333333333333, "minX": 1.6043913E12, "maxY": 25.166666666666668, "series": [{"data": [[1.60439142E12, 25.166666666666668], [1.60439136E12, 19.516666666666666], [1.60439154E12, 8.783333333333333], [1.60439148E12, 20.933333333333334], [1.6043913E12, 12.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439154E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.95, "minX": 1.6043913E12, "maxY": 25.166666666666668, "series": [{"data": [[1.60439142E12, 25.166666666666668], [1.60439136E12, 19.516666666666666], [1.60439154E12, 8.95], [1.60439148E12, 20.933333333333334], [1.6043913E12, 11.933333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439154E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.95, "minX": 1.6043913E12, "maxY": 25.166666666666668, "series": [{"data": [[1.60439142E12, 25.166666666666668], [1.60439136E12, 19.516666666666666], [1.60439154E12, 8.95], [1.60439148E12, 20.933333333333334], [1.6043913E12, 11.933333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439154E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.95, "minX": 1.6043913E12, "maxY": 25.166666666666668, "series": [{"data": [[1.60439142E12, 25.166666666666668], [1.60439136E12, 19.516666666666666], [1.60439154E12, 8.95], [1.60439148E12, 20.933333333333334], [1.6043913E12, 11.933333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439154E12, "title": "Total Transactions Per Second"}},
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

