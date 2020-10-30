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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 7751.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 8.0], [0.3, 12.0], [0.4, 14.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 17.0], [0.9, 19.0], [1.0, 21.0], [1.1, 24.0], [1.2, 27.0], [1.3, 28.0], [1.4, 30.0], [1.5, 31.0], [1.6, 33.0], [1.7, 36.0], [1.8, 37.0], [1.9, 39.0], [2.0, 40.0], [2.1, 41.0], [2.2, 44.0], [2.3, 47.0], [2.4, 51.0], [2.5, 52.0], [2.6, 55.0], [2.7, 59.0], [2.8, 65.0], [2.9, 70.0], [3.0, 75.0], [3.1, 79.0], [3.2, 81.0], [3.3, 83.0], [3.4, 84.0], [3.5, 89.0], [3.6, 94.0], [3.7, 105.0], [3.8, 109.0], [3.9, 117.0], [4.0, 119.0], [4.1, 120.0], [4.2, 122.0], [4.3, 125.0], [4.4, 126.0], [4.5, 128.0], [4.6, 129.0], [4.7, 130.0], [4.8, 132.0], [4.9, 133.0], [5.0, 134.0], [5.1, 136.0], [5.2, 137.0], [5.3, 137.0], [5.4, 137.0], [5.5, 138.0], [5.6, 139.0], [5.7, 139.0], [5.8, 140.0], [5.9, 140.0], [6.0, 141.0], [6.1, 141.0], [6.2, 142.0], [6.3, 142.0], [6.4, 143.0], [6.5, 144.0], [6.6, 145.0], [6.7, 145.0], [6.8, 146.0], [6.9, 147.0], [7.0, 147.0], [7.1, 148.0], [7.2, 148.0], [7.3, 149.0], [7.4, 150.0], [7.5, 151.0], [7.6, 152.0], [7.7, 153.0], [7.8, 154.0], [7.9, 154.0], [8.0, 155.0], [8.1, 155.0], [8.2, 156.0], [8.3, 156.0], [8.4, 156.0], [8.5, 157.0], [8.6, 158.0], [8.7, 159.0], [8.8, 159.0], [8.9, 159.0], [9.0, 160.0], [9.1, 161.0], [9.2, 162.0], [9.3, 163.0], [9.4, 164.0], [9.5, 164.0], [9.6, 164.0], [9.7, 165.0], [9.8, 166.0], [9.9, 166.0], [10.0, 166.0], [10.1, 167.0], [10.2, 168.0], [10.3, 168.0], [10.4, 168.0], [10.5, 169.0], [10.6, 170.0], [10.7, 170.0], [10.8, 171.0], [10.9, 171.0], [11.0, 172.0], [11.1, 172.0], [11.2, 173.0], [11.3, 173.0], [11.4, 174.0], [11.5, 174.0], [11.6, 175.0], [11.7, 176.0], [11.8, 176.0], [11.9, 177.0], [12.0, 177.0], [12.1, 178.0], [12.2, 178.0], [12.3, 179.0], [12.4, 179.0], [12.5, 179.0], [12.6, 180.0], [12.7, 180.0], [12.8, 181.0], [12.9, 181.0], [13.0, 182.0], [13.1, 182.0], [13.2, 183.0], [13.3, 183.0], [13.4, 183.0], [13.5, 184.0], [13.6, 184.0], [13.7, 185.0], [13.8, 185.0], [13.9, 186.0], [14.0, 187.0], [14.1, 187.0], [14.2, 188.0], [14.3, 189.0], [14.4, 190.0], [14.5, 190.0], [14.6, 191.0], [14.7, 191.0], [14.8, 192.0], [14.9, 192.0], [15.0, 193.0], [15.1, 193.0], [15.2, 194.0], [15.3, 195.0], [15.4, 195.0], [15.5, 196.0], [15.6, 196.0], [15.7, 196.0], [15.8, 197.0], [15.9, 198.0], [16.0, 198.0], [16.1, 199.0], [16.2, 200.0], [16.3, 200.0], [16.4, 201.0], [16.5, 201.0], [16.6, 202.0], [16.7, 203.0], [16.8, 203.0], [16.9, 204.0], [17.0, 204.0], [17.1, 205.0], [17.2, 206.0], [17.3, 207.0], [17.4, 207.0], [17.5, 207.0], [17.6, 208.0], [17.7, 209.0], [17.8, 209.0], [17.9, 210.0], [18.0, 210.0], [18.1, 211.0], [18.2, 212.0], [18.3, 212.0], [18.4, 213.0], [18.5, 214.0], [18.6, 214.0], [18.7, 214.0], [18.8, 215.0], [18.9, 215.0], [19.0, 216.0], [19.1, 217.0], [19.2, 217.0], [19.3, 217.0], [19.4, 218.0], [19.5, 219.0], [19.6, 219.0], [19.7, 219.0], [19.8, 220.0], [19.9, 220.0], [20.0, 221.0], [20.1, 222.0], [20.2, 223.0], [20.3, 223.0], [20.4, 223.0], [20.5, 224.0], [20.6, 224.0], [20.7, 225.0], [20.8, 225.0], [20.9, 225.0], [21.0, 226.0], [21.1, 226.0], [21.2, 227.0], [21.3, 227.0], [21.4, 228.0], [21.5, 228.0], [21.6, 228.0], [21.7, 229.0], [21.8, 230.0], [21.9, 230.0], [22.0, 231.0], [22.1, 231.0], [22.2, 232.0], [22.3, 233.0], [22.4, 233.0], [22.5, 234.0], [22.6, 234.0], [22.7, 235.0], [22.8, 236.0], [22.9, 236.0], [23.0, 236.0], [23.1, 236.0], [23.2, 237.0], [23.3, 238.0], [23.4, 239.0], [23.5, 240.0], [23.6, 240.0], [23.7, 241.0], [23.8, 242.0], [23.9, 242.0], [24.0, 242.0], [24.1, 243.0], [24.2, 243.0], [24.3, 244.0], [24.4, 244.0], [24.5, 244.0], [24.6, 244.0], [24.7, 245.0], [24.8, 245.0], [24.9, 246.0], [25.0, 246.0], [25.1, 247.0], [25.2, 248.0], [25.3, 248.0], [25.4, 249.0], [25.5, 250.0], [25.6, 250.0], [25.7, 250.0], [25.8, 251.0], [25.9, 251.0], [26.0, 252.0], [26.1, 252.0], [26.2, 252.0], [26.3, 252.0], [26.4, 253.0], [26.5, 253.0], [26.6, 253.0], [26.7, 254.0], [26.8, 254.0], [26.9, 255.0], [27.0, 255.0], [27.1, 255.0], [27.2, 256.0], [27.3, 256.0], [27.4, 257.0], [27.5, 257.0], [27.6, 258.0], [27.7, 258.0], [27.8, 258.0], [27.9, 259.0], [28.0, 259.0], [28.1, 260.0], [28.2, 260.0], [28.3, 261.0], [28.4, 261.0], [28.5, 261.0], [28.6, 262.0], [28.7, 262.0], [28.8, 262.0], [28.9, 263.0], [29.0, 263.0], [29.1, 264.0], [29.2, 264.0], [29.3, 265.0], [29.4, 265.0], [29.5, 265.0], [29.6, 266.0], [29.7, 266.0], [29.8, 267.0], [29.9, 267.0], [30.0, 267.0], [30.1, 267.0], [30.2, 268.0], [30.3, 268.0], [30.4, 269.0], [30.5, 270.0], [30.6, 270.0], [30.7, 270.0], [30.8, 271.0], [30.9, 271.0], [31.0, 272.0], [31.1, 272.0], [31.2, 272.0], [31.3, 273.0], [31.4, 274.0], [31.5, 274.0], [31.6, 274.0], [31.7, 275.0], [31.8, 275.0], [31.9, 275.0], [32.0, 276.0], [32.1, 276.0], [32.2, 276.0], [32.3, 277.0], [32.4, 277.0], [32.5, 278.0], [32.6, 278.0], [32.7, 278.0], [32.8, 279.0], [32.9, 279.0], [33.0, 280.0], [33.1, 280.0], [33.2, 280.0], [33.3, 280.0], [33.4, 281.0], [33.5, 281.0], [33.6, 281.0], [33.7, 282.0], [33.8, 282.0], [33.9, 282.0], [34.0, 283.0], [34.1, 283.0], [34.2, 283.0], [34.3, 284.0], [34.4, 284.0], [34.5, 284.0], [34.6, 285.0], [34.7, 285.0], [34.8, 285.0], [34.9, 286.0], [35.0, 286.0], [35.1, 287.0], [35.2, 287.0], [35.3, 287.0], [35.4, 287.0], [35.5, 288.0], [35.6, 288.0], [35.7, 289.0], [35.8, 289.0], [35.9, 289.0], [36.0, 289.0], [36.1, 290.0], [36.2, 290.0], [36.3, 290.0], [36.4, 290.0], [36.5, 291.0], [36.6, 291.0], [36.7, 291.0], [36.8, 292.0], [36.9, 292.0], [37.0, 292.0], [37.1, 293.0], [37.2, 293.0], [37.3, 294.0], [37.4, 294.0], [37.5, 295.0], [37.6, 295.0], [37.7, 296.0], [37.8, 296.0], [37.9, 297.0], [38.0, 297.0], [38.1, 297.0], [38.2, 297.0], [38.3, 298.0], [38.4, 298.0], [38.5, 298.0], [38.6, 299.0], [38.7, 299.0], [38.8, 299.0], [38.9, 300.0], [39.0, 300.0], [39.1, 301.0], [39.2, 301.0], [39.3, 302.0], [39.4, 302.0], [39.5, 302.0], [39.6, 303.0], [39.7, 303.0], [39.8, 304.0], [39.9, 304.0], [40.0, 304.0], [40.1, 304.0], [40.2, 305.0], [40.3, 305.0], [40.4, 306.0], [40.5, 307.0], [40.6, 307.0], [40.7, 307.0], [40.8, 308.0], [40.9, 308.0], [41.0, 308.0], [41.1, 309.0], [41.2, 309.0], [41.3, 310.0], [41.4, 311.0], [41.5, 311.0], [41.6, 312.0], [41.7, 312.0], [41.8, 313.0], [41.9, 314.0], [42.0, 314.0], [42.1, 314.0], [42.2, 315.0], [42.3, 315.0], [42.4, 316.0], [42.5, 317.0], [42.6, 317.0], [42.7, 318.0], [42.8, 319.0], [42.9, 319.0], [43.0, 320.0], [43.1, 320.0], [43.2, 321.0], [43.3, 321.0], [43.4, 321.0], [43.5, 322.0], [43.6, 322.0], [43.7, 323.0], [43.8, 323.0], [43.9, 324.0], [44.0, 324.0], [44.1, 325.0], [44.2, 325.0], [44.3, 325.0], [44.4, 326.0], [44.5, 326.0], [44.6, 326.0], [44.7, 327.0], [44.8, 327.0], [44.9, 328.0], [45.0, 328.0], [45.1, 329.0], [45.2, 330.0], [45.3, 330.0], [45.4, 330.0], [45.5, 331.0], [45.6, 331.0], [45.7, 331.0], [45.8, 332.0], [45.9, 332.0], [46.0, 332.0], [46.1, 332.0], [46.2, 333.0], [46.3, 334.0], [46.4, 334.0], [46.5, 334.0], [46.6, 335.0], [46.7, 335.0], [46.8, 335.0], [46.9, 336.0], [47.0, 337.0], [47.1, 337.0], [47.2, 338.0], [47.3, 338.0], [47.4, 339.0], [47.5, 339.0], [47.6, 340.0], [47.7, 340.0], [47.8, 341.0], [47.9, 341.0], [48.0, 342.0], [48.1, 342.0], [48.2, 342.0], [48.3, 343.0], [48.4, 343.0], [48.5, 344.0], [48.6, 344.0], [48.7, 344.0], [48.8, 345.0], [48.9, 345.0], [49.0, 346.0], [49.1, 346.0], [49.2, 347.0], [49.3, 347.0], [49.4, 348.0], [49.5, 348.0], [49.6, 348.0], [49.7, 349.0], [49.8, 350.0], [49.9, 350.0], [50.0, 351.0], [50.1, 351.0], [50.2, 352.0], [50.3, 352.0], [50.4, 353.0], [50.5, 353.0], [50.6, 353.0], [50.7, 354.0], [50.8, 355.0], [50.9, 355.0], [51.0, 356.0], [51.1, 356.0], [51.2, 357.0], [51.3, 357.0], [51.4, 358.0], [51.5, 359.0], [51.6, 359.0], [51.7, 360.0], [51.8, 360.0], [51.9, 360.0], [52.0, 361.0], [52.1, 361.0], [52.2, 362.0], [52.3, 362.0], [52.4, 362.0], [52.5, 363.0], [52.6, 363.0], [52.7, 364.0], [52.8, 364.0], [52.9, 365.0], [53.0, 365.0], [53.1, 365.0], [53.2, 366.0], [53.3, 366.0], [53.4, 367.0], [53.5, 367.0], [53.6, 368.0], [53.7, 368.0], [53.8, 369.0], [53.9, 370.0], [54.0, 370.0], [54.1, 370.0], [54.2, 370.0], [54.3, 371.0], [54.4, 371.0], [54.5, 372.0], [54.6, 372.0], [54.7, 372.0], [54.8, 373.0], [54.9, 374.0], [55.0, 374.0], [55.1, 375.0], [55.2, 375.0], [55.3, 375.0], [55.4, 376.0], [55.5, 376.0], [55.6, 377.0], [55.7, 377.0], [55.8, 378.0], [55.9, 379.0], [56.0, 379.0], [56.1, 379.0], [56.2, 380.0], [56.3, 380.0], [56.4, 381.0], [56.5, 381.0], [56.6, 382.0], [56.7, 383.0], [56.8, 383.0], [56.9, 384.0], [57.0, 384.0], [57.1, 384.0], [57.2, 385.0], [57.3, 385.0], [57.4, 385.0], [57.5, 386.0], [57.6, 386.0], [57.7, 387.0], [57.8, 387.0], [57.9, 387.0], [58.0, 388.0], [58.1, 389.0], [58.2, 389.0], [58.3, 390.0], [58.4, 390.0], [58.5, 391.0], [58.6, 391.0], [58.7, 392.0], [58.8, 392.0], [58.9, 392.0], [59.0, 393.0], [59.1, 393.0], [59.2, 393.0], [59.3, 394.0], [59.4, 394.0], [59.5, 395.0], [59.6, 395.0], [59.7, 396.0], [59.8, 397.0], [59.9, 397.0], [60.0, 398.0], [60.1, 398.0], [60.2, 399.0], [60.3, 400.0], [60.4, 400.0], [60.5, 401.0], [60.6, 402.0], [60.7, 402.0], [60.8, 402.0], [60.9, 403.0], [61.0, 404.0], [61.1, 404.0], [61.2, 404.0], [61.3, 405.0], [61.4, 405.0], [61.5, 406.0], [61.6, 407.0], [61.7, 407.0], [61.8, 408.0], [61.9, 408.0], [62.0, 408.0], [62.1, 409.0], [62.2, 410.0], [62.3, 410.0], [62.4, 411.0], [62.5, 411.0], [62.6, 412.0], [62.7, 413.0], [62.8, 413.0], [62.9, 414.0], [63.0, 414.0], [63.1, 414.0], [63.2, 415.0], [63.3, 416.0], [63.4, 416.0], [63.5, 417.0], [63.6, 417.0], [63.7, 419.0], [63.8, 419.0], [63.9, 420.0], [64.0, 420.0], [64.1, 421.0], [64.2, 422.0], [64.3, 422.0], [64.4, 423.0], [64.5, 423.0], [64.6, 424.0], [64.7, 424.0], [64.8, 424.0], [64.9, 426.0], [65.0, 426.0], [65.1, 426.0], [65.2, 427.0], [65.3, 428.0], [65.4, 429.0], [65.5, 430.0], [65.6, 431.0], [65.7, 431.0], [65.8, 432.0], [65.9, 433.0], [66.0, 433.0], [66.1, 434.0], [66.2, 434.0], [66.3, 435.0], [66.4, 436.0], [66.5, 437.0], [66.6, 437.0], [66.7, 438.0], [66.8, 438.0], [66.9, 439.0], [67.0, 439.0], [67.1, 440.0], [67.2, 441.0], [67.3, 442.0], [67.4, 442.0], [67.5, 443.0], [67.6, 444.0], [67.7, 444.0], [67.8, 445.0], [67.9, 446.0], [68.0, 446.0], [68.1, 447.0], [68.2, 448.0], [68.3, 448.0], [68.4, 449.0], [68.5, 449.0], [68.6, 450.0], [68.7, 450.0], [68.8, 451.0], [68.9, 451.0], [69.0, 452.0], [69.1, 452.0], [69.2, 453.0], [69.3, 454.0], [69.4, 455.0], [69.5, 455.0], [69.6, 456.0], [69.7, 457.0], [69.8, 457.0], [69.9, 458.0], [70.0, 458.0], [70.1, 459.0], [70.2, 460.0], [70.3, 462.0], [70.4, 462.0], [70.5, 463.0], [70.6, 464.0], [70.7, 465.0], [70.8, 465.0], [70.9, 465.0], [71.0, 466.0], [71.1, 466.0], [71.2, 468.0], [71.3, 468.0], [71.4, 469.0], [71.5, 470.0], [71.6, 470.0], [71.7, 471.0], [71.8, 471.0], [71.9, 472.0], [72.0, 472.0], [72.1, 473.0], [72.2, 474.0], [72.3, 474.0], [72.4, 475.0], [72.5, 476.0], [72.6, 476.0], [72.7, 478.0], [72.8, 479.0], [72.9, 480.0], [73.0, 480.0], [73.1, 481.0], [73.2, 481.0], [73.3, 482.0], [73.4, 483.0], [73.5, 484.0], [73.6, 485.0], [73.7, 486.0], [73.8, 486.0], [73.9, 487.0], [74.0, 489.0], [74.1, 490.0], [74.2, 490.0], [74.3, 491.0], [74.4, 492.0], [74.5, 493.0], [74.6, 493.0], [74.7, 494.0], [74.8, 494.0], [74.9, 495.0], [75.0, 496.0], [75.1, 497.0], [75.2, 498.0], [75.3, 499.0], [75.4, 500.0], [75.5, 500.0], [75.6, 501.0], [75.7, 501.0], [75.8, 503.0], [75.9, 504.0], [76.0, 504.0], [76.1, 505.0], [76.2, 506.0], [76.3, 506.0], [76.4, 507.0], [76.5, 507.0], [76.6, 508.0], [76.7, 508.0], [76.8, 509.0], [76.9, 510.0], [77.0, 510.0], [77.1, 510.0], [77.2, 511.0], [77.3, 513.0], [77.4, 514.0], [77.5, 515.0], [77.6, 517.0], [77.7, 518.0], [77.8, 519.0], [77.9, 520.0], [78.0, 521.0], [78.1, 522.0], [78.2, 523.0], [78.3, 523.0], [78.4, 525.0], [78.5, 526.0], [78.6, 527.0], [78.7, 528.0], [78.8, 528.0], [78.9, 529.0], [79.0, 530.0], [79.1, 532.0], [79.2, 534.0], [79.3, 535.0], [79.4, 536.0], [79.5, 536.0], [79.6, 537.0], [79.7, 538.0], [79.8, 539.0], [79.9, 541.0], [80.0, 542.0], [80.1, 542.0], [80.2, 543.0], [80.3, 544.0], [80.4, 545.0], [80.5, 546.0], [80.6, 548.0], [80.7, 549.0], [80.8, 549.0], [80.9, 550.0], [81.0, 551.0], [81.1, 552.0], [81.2, 553.0], [81.3, 554.0], [81.4, 555.0], [81.5, 556.0], [81.6, 557.0], [81.7, 558.0], [81.8, 558.0], [81.9, 559.0], [82.0, 560.0], [82.1, 561.0], [82.2, 564.0], [82.3, 565.0], [82.4, 566.0], [82.5, 567.0], [82.6, 569.0], [82.7, 570.0], [82.8, 571.0], [82.9, 572.0], [83.0, 574.0], [83.1, 575.0], [83.2, 576.0], [83.3, 577.0], [83.4, 579.0], [83.5, 580.0], [83.6, 581.0], [83.7, 581.0], [83.8, 582.0], [83.9, 583.0], [84.0, 586.0], [84.1, 587.0], [84.2, 589.0], [84.3, 591.0], [84.4, 593.0], [84.5, 595.0], [84.6, 596.0], [84.7, 597.0], [84.8, 598.0], [84.9, 599.0], [85.0, 600.0], [85.1, 602.0], [85.2, 603.0], [85.3, 606.0], [85.4, 607.0], [85.5, 608.0], [85.6, 609.0], [85.7, 610.0], [85.8, 611.0], [85.9, 613.0], [86.0, 615.0], [86.1, 616.0], [86.2, 617.0], [86.3, 619.0], [86.4, 620.0], [86.5, 622.0], [86.6, 623.0], [86.7, 624.0], [86.8, 627.0], [86.9, 629.0], [87.0, 632.0], [87.1, 633.0], [87.2, 635.0], [87.3, 636.0], [87.4, 638.0], [87.5, 639.0], [87.6, 640.0], [87.7, 642.0], [87.8, 646.0], [87.9, 647.0], [88.0, 649.0], [88.1, 651.0], [88.2, 653.0], [88.3, 656.0], [88.4, 658.0], [88.5, 661.0], [88.6, 661.0], [88.7, 663.0], [88.8, 663.0], [88.9, 664.0], [89.0, 668.0], [89.1, 668.0], [89.2, 670.0], [89.3, 673.0], [89.4, 673.0], [89.5, 677.0], [89.6, 678.0], [89.7, 682.0], [89.8, 685.0], [89.9, 688.0], [90.0, 693.0], [90.1, 695.0], [90.2, 699.0], [90.3, 702.0], [90.4, 705.0], [90.5, 709.0], [90.6, 713.0], [90.7, 716.0], [90.8, 719.0], [90.9, 722.0], [91.0, 723.0], [91.1, 726.0], [91.2, 729.0], [91.3, 732.0], [91.4, 736.0], [91.5, 740.0], [91.6, 744.0], [91.7, 746.0], [91.8, 748.0], [91.9, 753.0], [92.0, 754.0], [92.1, 758.0], [92.2, 764.0], [92.3, 766.0], [92.4, 770.0], [92.5, 773.0], [92.6, 778.0], [92.7, 783.0], [92.8, 788.0], [92.9, 791.0], [93.0, 798.0], [93.1, 802.0], [93.2, 805.0], [93.3, 812.0], [93.4, 821.0], [93.5, 825.0], [93.6, 830.0], [93.7, 837.0], [93.8, 844.0], [93.9, 847.0], [94.0, 854.0], [94.1, 859.0], [94.2, 865.0], [94.3, 871.0], [94.4, 877.0], [94.5, 889.0], [94.6, 894.0], [94.7, 902.0], [94.8, 915.0], [94.9, 928.0], [95.0, 937.0], [95.1, 942.0], [95.2, 950.0], [95.3, 965.0], [95.4, 980.0], [95.5, 990.0], [95.6, 1009.0], [95.7, 1016.0], [95.8, 1023.0], [95.9, 1036.0], [96.0, 1046.0], [96.1, 1063.0], [96.2, 1078.0], [96.3, 1104.0], [96.4, 1128.0], [96.5, 1143.0], [96.6, 1167.0], [96.7, 1178.0], [96.8, 1187.0], [96.9, 1206.0], [97.0, 1240.0], [97.1, 1254.0], [97.2, 1292.0], [97.3, 1316.0], [97.4, 1375.0], [97.5, 1424.0], [97.6, 1447.0], [97.7, 1474.0], [97.8, 1505.0], [97.9, 1570.0], [98.0, 1608.0], [98.1, 1652.0], [98.2, 1692.0], [98.3, 1724.0], [98.4, 1750.0], [98.5, 1802.0], [98.6, 1816.0], [98.7, 1876.0], [98.8, 1951.0], [98.9, 2000.0], [99.0, 2104.0], [99.1, 2220.0], [99.2, 2282.0], [99.3, 2536.0], [99.4, 3071.0], [99.5, 3612.0], [99.6, 4005.0], [99.7, 4148.0], [99.8, 4388.0], [99.9, 6181.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1178.0, "series": [{"data": [[0.0, 191.0], [600.0, 276.0], [700.0, 146.0], [800.0, 84.0], [900.0, 45.0], [1000.0, 38.0], [1100.0, 31.0], [1200.0, 19.0], [1300.0, 12.0], [1400.0, 16.0], [1500.0, 10.0], [100.0, 646.0], [1600.0, 12.0], [1700.0, 15.0], [1800.0, 11.0], [1900.0, 9.0], [2000.0, 6.0], [2100.0, 5.0], [2200.0, 6.0], [2400.0, 4.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 1.0], [3000.0, 3.0], [3100.0, 2.0], [200.0, 1178.0], [3300.0, 1.0], [3400.0, 1.0], [3600.0, 2.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 5.0], [4300.0, 3.0], [4100.0, 3.0], [4500.0, 3.0], [300.0, 1114.0], [6100.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [400.0, 783.0], [6600.0, 1.0], [6900.0, 1.0], [7200.0, 1.0], [7700.0, 1.0], [500.0, 496.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 115.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3919.0, "series": [{"data": [[0.0, 3919.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1156.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 115.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.900221729490024, "minX": 1.60405428E12, "maxY": 10.0, "series": [{"data": [[1.60405446E12, 10.0], [1.60405428E12, 9.998671978751657], [1.6040544E12, 10.0], [1.60405452E12, 9.900221729490024], [1.60405434E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405452E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.0, "maxY": 530.0, "series": [{"data": [[8.0, 254.0], [4.0, 282.0], [2.0, 513.0], [1.0, 417.0], [9.0, 530.0], [10.0, 436.2718146718153], [5.0, 290.0], [6.0, 290.0], [3.0, 338.0], [7.0, 408.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991136801541433, 436.17341040462475]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3140.516666666667, "minX": 1.60405428E12, "maxY": 1.0066115266666668E7, "series": [{"data": [[1.60405446E12, 9048545.083333334], [1.60405428E12, 5313151.733333333], [1.6040544E12, 1.0066115266666668E7], [1.60405452E12, 3156841.3833333333], [1.60405434E12, 8392846.133333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60405446E12, 8827.316666666668], [1.60405428E12, 4972.25], [1.6040544E12, 10195.6], [1.60405452E12, 3140.516666666667], [1.60405434E12, 8008.083333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405452E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 382.7605321507762, "minX": 1.60405428E12, "maxY": 505.8559322033895, "series": [{"data": [[1.60405446E12, 471.1278890600927], [1.60405428E12, 393.6892430278878], [1.6040544E12, 388.74867374005345], [1.60405452E12, 382.7605321507762], [1.60405434E12, 505.8559322033895]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405452E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 379.1596452328162, "minX": 1.60405428E12, "maxY": 501.6406779661017, "series": [{"data": [[1.60405446E12, 467.2758089368261], [1.60405428E12, 389.10358565737073], [1.6040544E12, 384.9628647214851], [1.60405452E12, 379.1596452328162], [1.60405434E12, 501.6406779661017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405452E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006163328197226498, "minX": 1.60405428E12, "maxY": 0.12483399734395756, "series": [{"data": [[1.60405446E12, 0.006163328197226498], [1.60405428E12, 0.12483399734395756], [1.6040544E12, 0.01326259946949602], [1.60405452E12, 0.008869179600886916], [1.60405434E12, 0.0076271186440677995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405452E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60405428E12, "maxY": 7751.0, "series": [{"data": [[1.60405446E12, 6994.0], [1.60405428E12, 3468.0], [1.6040544E12, 4388.0], [1.60405452E12, 3922.0], [1.60405434E12, 7751.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60405446E12, 14.0], [1.60405428E12, 115.28799856185913], [1.6040544E12, 22.742998920679092], [1.60405452E12, 33.33999946117401], [1.60405434E12, 14.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60405446E12, 14.0], [1.60405428E12, 119.32300035953521], [1.6040544E12, 25.87820028781891], [1.60405452E12, 35.374000215530394], [1.60405434E12, 14.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60405446E12, 14.0], [1.60405428E12, 117.81499955058098], [1.6040544E12, 24.670999640226363], [1.60405452E12, 34.469999730587006], [1.60405434E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60405446E12, 3.0], [1.60405428E12, 19.0], [1.6040544E12, 8.0], [1.60405452E12, 28.0], [1.60405434E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60405446E12, 381.0], [1.60405428E12, 326.0], [1.6040544E12, 331.0], [1.60405452E12, 335.0], [1.60405434E12, 383.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405452E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 236.0, "minX": 4.0, "maxY": 3601.5, "series": [{"data": [[32.0, 275.5], [33.0, 272.5], [35.0, 257.0], [34.0, 257.0], [36.0, 236.0], [39.0, 247.5], [38.0, 252.0], [4.0, 3601.5], [5.0, 417.0], [6.0, 573.5], [7.0, 1134.0], [8.0, 636.0], [9.0, 292.0], [10.0, 977.5], [11.0, 596.0], [12.0, 292.0], [13.0, 414.0], [14.0, 337.0], [15.0, 441.0], [16.0, 429.0], [17.0, 437.0], [18.0, 441.0], [19.0, 359.0], [20.0, 433.0], [21.0, 434.5], [22.0, 398.0], [23.0, 392.5], [24.0, 368.0], [25.0, 353.0], [26.0, 348.5], [27.0, 336.0], [28.0, 316.5], [29.0, 322.0], [30.0, 293.0], [31.0, 287.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 235.0, "minX": 4.0, "maxY": 3601.0, "series": [{"data": [[32.0, 273.5], [33.0, 270.0], [35.0, 257.0], [34.0, 256.5], [36.0, 235.0], [39.0, 247.0], [38.0, 250.5], [4.0, 3601.0], [5.0, 415.0], [6.0, 570.5], [7.0, 1133.0], [8.0, 625.5], [9.0, 292.0], [10.0, 975.0], [11.0, 596.0], [12.0, 286.0], [13.0, 400.0], [14.0, 334.0], [15.0, 435.0], [16.0, 421.5], [17.0, 436.0], [18.0, 441.0], [19.0, 356.5], [20.0, 427.5], [21.0, 422.0], [22.0, 392.0], [23.0, 388.0], [24.0, 362.0], [25.0, 351.0], [26.0, 347.0], [27.0, 332.0], [28.0, 310.5], [29.0, 319.0], [30.0, 289.5], [31.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.35, "minX": 1.60405428E12, "maxY": 25.133333333333333, "series": [{"data": [[1.60405446E12, 21.633333333333333], [1.60405428E12, 12.716666666666667], [1.6040544E12, 25.133333333333333], [1.60405452E12, 7.35], [1.60405434E12, 19.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405452E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60405428E12, "maxY": 25.133333333333333, "series": [{"data": [[1.60405446E12, 21.633333333333333], [1.60405428E12, 12.55], [1.6040544E12, 25.133333333333333], [1.60405452E12, 7.516666666666667], [1.60405434E12, 19.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60405452E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60405428E12, "maxY": 25.133333333333333, "series": [{"data": [[1.60405446E12, 21.633333333333333], [1.60405428E12, 12.55], [1.6040544E12, 25.133333333333333], [1.60405452E12, 7.516666666666667], [1.60405434E12, 19.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405452E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.516666666666667, "minX": 1.60405428E12, "maxY": 25.133333333333333, "series": [{"data": [[1.60405446E12, 21.633333333333333], [1.60405428E12, 12.55], [1.6040544E12, 25.133333333333333], [1.60405452E12, 7.516666666666667], [1.60405434E12, 19.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60405452E12, "title": "Total Transactions Per Second"}},
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

