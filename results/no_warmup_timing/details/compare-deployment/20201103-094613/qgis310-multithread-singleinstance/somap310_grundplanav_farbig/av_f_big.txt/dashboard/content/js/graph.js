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
        data: {"result": {"minY": 821.0, "minX": 0.0, "maxY": 8642.0, "series": [{"data": [[0.0, 821.0], [0.1, 821.0], [0.2, 1032.0], [0.3, 1539.0], [0.4, 1539.0], [0.5, 1908.0], [0.6, 2287.0], [0.7, 2577.0], [0.8, 2577.0], [0.9, 2605.0], [1.0, 2674.0], [1.1, 2819.0], [1.2, 2819.0], [1.3, 2896.0], [1.4, 2917.0], [1.5, 2954.0], [1.6, 2954.0], [1.7, 3017.0], [1.8, 3075.0], [1.9, 3075.0], [2.0, 3146.0], [2.1, 3192.0], [2.2, 3210.0], [2.3, 3210.0], [2.4, 3233.0], [2.5, 3329.0], [2.6, 3348.0], [2.7, 3348.0], [2.8, 3348.0], [2.9, 3356.0], [3.0, 3361.0], [3.1, 3361.0], [3.2, 3365.0], [3.3, 3367.0], [3.4, 3367.0], [3.5, 3369.0], [3.6, 3370.0], [3.7, 3372.0], [3.8, 3372.0], [3.9, 3374.0], [4.0, 3376.0], [4.1, 3385.0], [4.2, 3385.0], [4.3, 3403.0], [4.4, 3406.0], [4.5, 3412.0], [4.6, 3412.0], [4.7, 3414.0], [4.8, 3431.0], [4.9, 3451.0], [5.0, 3451.0], [5.1, 3456.0], [5.2, 3467.0], [5.3, 3467.0], [5.4, 3475.0], [5.5, 3485.0], [5.6, 3490.0], [5.7, 3490.0], [5.8, 3495.0], [5.9, 3500.0], [6.0, 3505.0], [6.1, 3505.0], [6.2, 3511.0], [6.3, 3528.0], [6.4, 3532.0], [6.5, 3532.0], [6.6, 3546.0], [6.7, 3551.0], [6.8, 3551.0], [6.9, 3556.0], [7.0, 3561.0], [7.1, 3562.0], [7.2, 3562.0], [7.3, 3580.0], [7.4, 3587.0], [7.5, 3594.0], [7.6, 3594.0], [7.7, 3611.0], [7.8, 3623.0], [7.9, 3623.0], [8.0, 3623.0], [8.1, 3632.0], [8.2, 3634.0], [8.3, 3639.0], [8.4, 3639.0], [8.5, 3669.0], [8.6, 3676.0], [8.7, 3676.0], [8.8, 3679.0], [8.9, 3682.0], [9.0, 3682.0], [9.1, 3682.0], [9.2, 3683.0], [9.3, 3685.0], [9.4, 3687.0], [9.5, 3687.0], [9.6, 3691.0], [9.7, 3698.0], [9.8, 3699.0], [9.9, 3699.0], [10.0, 3699.0], [10.1, 3700.0], [10.2, 3700.0], [10.3, 3704.0], [10.4, 3706.0], [10.5, 3726.0], [10.6, 3726.0], [10.7, 3732.0], [10.8, 3743.0], [10.9, 3753.0], [11.0, 3753.0], [11.1, 3757.0], [11.2, 3757.0], [11.3, 3761.0], [11.4, 3761.0], [11.5, 3761.0], [11.6, 3763.0], [11.7, 3763.0], [11.8, 3774.0], [11.9, 3792.0], [12.0, 3794.0], [12.1, 3794.0], [12.2, 3797.0], [12.3, 3798.0], [12.4, 3799.0], [12.5, 3799.0], [12.6, 3801.0], [12.7, 3806.0], [12.8, 3807.0], [12.9, 3807.0], [13.0, 3810.0], [13.1, 3815.0], [13.2, 3815.0], [13.3, 3815.0], [13.4, 3825.0], [13.5, 3830.0], [13.6, 3830.0], [13.7, 3839.0], [13.8, 3852.0], [13.9, 3855.0], [14.0, 3855.0], [14.1, 3869.0], [14.2, 3870.0], [14.3, 3877.0], [14.4, 3877.0], [14.5, 3877.0], [14.6, 3880.0], [14.7, 3882.0], [14.8, 3882.0], [14.9, 3885.0], [15.0, 3885.0], [15.1, 3885.0], [15.2, 3888.0], [15.3, 3894.0], [15.4, 3928.0], [15.5, 3928.0], [15.6, 3941.0], [15.7, 3949.0], [15.8, 3950.0], [15.9, 3950.0], [16.0, 3958.0], [16.1, 3966.0], [16.2, 3973.0], [16.3, 3973.0], [16.4, 3978.0], [16.5, 3979.0], [16.6, 3980.0], [16.7, 3980.0], [16.8, 3994.0], [16.9, 4012.0], [17.0, 4012.0], [17.1, 4021.0], [17.2, 4029.0], [17.3, 4041.0], [17.4, 4041.0], [17.5, 4046.0], [17.6, 4050.0], [17.7, 4051.0], [17.8, 4051.0], [17.9, 4065.0], [18.0, 4067.0], [18.1, 4089.0], [18.2, 4089.0], [18.3, 4096.0], [18.4, 4098.0], [18.5, 4098.0], [18.6, 4099.0], [18.7, 4103.0], [18.8, 4109.0], [18.9, 4109.0], [19.0, 4114.0], [19.1, 4118.0], [19.2, 4125.0], [19.3, 4125.0], [19.4, 4136.0], [19.5, 4145.0], [19.6, 4146.0], [19.7, 4146.0], [19.8, 4154.0], [19.9, 4169.0], [20.0, 4169.0], [20.1, 4170.0], [20.2, 4187.0], [20.3, 4192.0], [20.4, 4192.0], [20.5, 4195.0], [20.6, 4195.0], [20.7, 4198.0], [20.8, 4198.0], [20.9, 4199.0], [21.0, 4200.0], [21.1, 4200.0], [21.2, 4200.0], [21.3, 4206.0], [21.4, 4214.0], [21.5, 4232.0], [21.6, 4232.0], [21.7, 4238.0], [21.8, 4239.0], [21.9, 4239.0], [22.0, 4252.0], [22.1, 4255.0], [22.2, 4260.0], [22.3, 4260.0], [22.4, 4261.0], [22.5, 4263.0], [22.6, 4263.0], [22.7, 4263.0], [22.8, 4266.0], [22.9, 4266.0], [23.0, 4267.0], [23.1, 4267.0], [23.2, 4280.0], [23.3, 4292.0], [23.4, 4292.0], [23.5, 4301.0], [23.6, 4311.0], [23.7, 4315.0], [23.8, 4315.0], [23.9, 4318.0], [24.0, 4318.0], [24.1, 4321.0], [24.2, 4321.0], [24.3, 4324.0], [24.4, 4329.0], [24.5, 4330.0], [24.6, 4330.0], [24.7, 4342.0], [24.8, 4344.0], [24.9, 4355.0], [25.0, 4355.0], [25.1, 4362.0], [25.2, 4363.0], [25.3, 4363.0], [25.4, 4376.0], [25.5, 4378.0], [25.6, 4390.0], [25.7, 4390.0], [25.8, 4397.0], [25.9, 4405.0], [26.0, 4424.0], [26.1, 4424.0], [26.2, 4444.0], [26.3, 4450.0], [26.4, 4457.0], [26.5, 4457.0], [26.6, 4458.0], [26.7, 4459.0], [26.8, 4459.0], [26.9, 4463.0], [27.0, 4463.0], [27.1, 4474.0], [27.2, 4474.0], [27.3, 4475.0], [27.4, 4475.0], [27.5, 4482.0], [27.6, 4482.0], [27.7, 4484.0], [27.8, 4491.0], [27.9, 4495.0], [28.0, 4495.0], [28.1, 4511.0], [28.2, 4522.0], [28.3, 4547.0], [28.4, 4547.0], [28.5, 4548.0], [28.6, 4554.0], [28.7, 4554.0], [28.8, 4573.0], [28.9, 4584.0], [29.0, 4590.0], [29.1, 4590.0], [29.2, 4604.0], [29.3, 4625.0], [29.4, 4627.0], [29.5, 4627.0], [29.6, 4639.0], [29.7, 4641.0], [29.8, 4643.0], [29.9, 4643.0], [30.0, 4643.0], [30.1, 4645.0], [30.2, 4645.0], [30.3, 4657.0], [30.4, 4658.0], [30.5, 4659.0], [30.6, 4659.0], [30.7, 4678.0], [30.8, 4685.0], [30.9, 4687.0], [31.0, 4687.0], [31.1, 4693.0], [31.2, 4697.0], [31.3, 4704.0], [31.4, 4704.0], [31.5, 4707.0], [31.6, 4737.0], [31.7, 4737.0], [31.8, 4749.0], [31.9, 4756.0], [32.0, 4759.0], [32.1, 4759.0], [32.2, 4767.0], [32.3, 4769.0], [32.4, 4772.0], [32.5, 4772.0], [32.6, 4772.0], [32.7, 4779.0], [32.8, 4782.0], [32.9, 4782.0], [33.0, 4786.0], [33.1, 4788.0], [33.2, 4795.0], [33.3, 4795.0], [33.4, 4796.0], [33.5, 4800.0], [33.6, 4800.0], [33.7, 4809.0], [33.8, 4813.0], [33.9, 4814.0], [34.0, 4814.0], [34.1, 4816.0], [34.2, 4817.0], [34.3, 4819.0], [34.4, 4819.0], [34.5, 4820.0], [34.6, 4829.0], [34.7, 4831.0], [34.8, 4831.0], [34.9, 4850.0], [35.0, 4852.0], [35.1, 4852.0], [35.2, 4880.0], [35.3, 4880.0], [35.4, 4882.0], [35.5, 4882.0], [35.6, 4887.0], [35.7, 4895.0], [35.8, 4904.0], [35.9, 4904.0], [36.0, 4909.0], [36.1, 4917.0], [36.2, 4918.0], [36.3, 4918.0], [36.4, 4924.0], [36.5, 4925.0], [36.6, 4931.0], [36.7, 4931.0], [36.8, 4936.0], [36.9, 4937.0], [37.0, 4937.0], [37.1, 4947.0], [37.2, 4951.0], [37.3, 4957.0], [37.4, 4957.0], [37.5, 4966.0], [37.6, 4968.0], [37.7, 4969.0], [37.8, 4969.0], [37.9, 4985.0], [38.0, 4998.0], [38.1, 5003.0], [38.2, 5003.0], [38.3, 5004.0], [38.4, 5007.0], [38.5, 5007.0], [38.6, 5012.0], [38.7, 5013.0], [38.8, 5016.0], [38.9, 5016.0], [39.0, 5019.0], [39.1, 5023.0], [39.2, 5031.0], [39.3, 5031.0], [39.4, 5044.0], [39.5, 5045.0], [39.6, 5048.0], [39.7, 5048.0], [39.8, 5051.0], [39.9, 5054.0], [40.0, 5059.0], [40.1, 5059.0], [40.2, 5074.0], [40.3, 5078.0], [40.4, 5078.0], [40.5, 5080.0], [40.6, 5088.0], [40.7, 5092.0], [40.8, 5092.0], [40.9, 5092.0], [41.0, 5098.0], [41.1, 5105.0], [41.2, 5105.0], [41.3, 5110.0], [41.4, 5117.0], [41.5, 5118.0], [41.6, 5118.0], [41.7, 5122.0], [41.8, 5133.0], [41.9, 5133.0], [42.0, 5141.0], [42.1, 5143.0], [42.2, 5162.0], [42.3, 5162.0], [42.4, 5168.0], [42.5, 5172.0], [42.6, 5175.0], [42.7, 5175.0], [42.8, 5179.0], [42.9, 5183.0], [43.0, 5189.0], [43.1, 5189.0], [43.2, 5193.0], [43.3, 5199.0], [43.4, 5199.0], [43.5, 5200.0], [43.6, 5203.0], [43.7, 5209.0], [43.8, 5209.0], [43.9, 5212.0], [44.0, 5213.0], [44.1, 5218.0], [44.2, 5218.0], [44.3, 5218.0], [44.4, 5223.0], [44.5, 5226.0], [44.6, 5226.0], [44.7, 5230.0], [44.8, 5230.0], [44.9, 5232.0], [45.0, 5232.0], [45.1, 5239.0], [45.2, 5240.0], [45.3, 5240.0], [45.4, 5240.0], [45.5, 5245.0], [45.6, 5248.0], [45.7, 5248.0], [45.8, 5248.0], [45.9, 5248.0], [46.0, 5249.0], [46.1, 5249.0], [46.2, 5250.0], [46.3, 5255.0], [46.4, 5258.0], [46.5, 5258.0], [46.6, 5260.0], [46.7, 5262.0], [46.8, 5262.0], [46.9, 5262.0], [47.0, 5267.0], [47.1, 5286.0], [47.2, 5286.0], [47.3, 5294.0], [47.4, 5298.0], [47.5, 5303.0], [47.6, 5303.0], [47.7, 5304.0], [47.8, 5305.0], [47.9, 5306.0], [48.0, 5306.0], [48.1, 5307.0], [48.2, 5310.0], [48.3, 5315.0], [48.4, 5315.0], [48.5, 5325.0], [48.6, 5327.0], [48.7, 5327.0], [48.8, 5337.0], [48.9, 5344.0], [49.0, 5344.0], [49.1, 5344.0], [49.2, 5345.0], [49.3, 5347.0], [49.4, 5347.0], [49.5, 5347.0], [49.6, 5347.0], [49.7, 5348.0], [49.8, 5350.0], [49.9, 5350.0], [50.0, 5352.0], [50.1, 5353.0], [50.2, 5353.0], [50.3, 5354.0], [50.4, 5365.0], [50.5, 5370.0], [50.6, 5370.0], [50.7, 5370.0], [50.8, 5374.0], [50.9, 5375.0], [51.0, 5375.0], [51.1, 5375.0], [51.2, 5378.0], [51.3, 5379.0], [51.4, 5379.0], [51.5, 5383.0], [51.6, 5384.0], [51.7, 5384.0], [51.8, 5386.0], [51.9, 5386.0], [52.0, 5389.0], [52.1, 5389.0], [52.2, 5391.0], [52.3, 5392.0], [52.4, 5399.0], [52.5, 5399.0], [52.6, 5400.0], [52.7, 5403.0], [52.8, 5403.0], [52.9, 5403.0], [53.0, 5405.0], [53.1, 5413.0], [53.2, 5413.0], [53.3, 5413.0], [53.4, 5418.0], [53.5, 5421.0], [53.6, 5421.0], [53.7, 5422.0], [53.8, 5424.0], [53.9, 5428.0], [54.0, 5428.0], [54.1, 5432.0], [54.2, 5437.0], [54.3, 5443.0], [54.4, 5443.0], [54.5, 5447.0], [54.6, 5448.0], [54.7, 5457.0], [54.8, 5457.0], [54.9, 5458.0], [55.0, 5460.0], [55.1, 5460.0], [55.2, 5475.0], [55.3, 5476.0], [55.4, 5477.0], [55.5, 5477.0], [55.6, 5480.0], [55.7, 5481.0], [55.8, 5489.0], [55.9, 5489.0], [56.0, 5489.0], [56.1, 5490.0], [56.2, 5495.0], [56.3, 5495.0], [56.4, 5507.0], [56.5, 5511.0], [56.6, 5511.0], [56.7, 5511.0], [56.8, 5514.0], [56.9, 5514.0], [57.0, 5514.0], [57.1, 5517.0], [57.2, 5519.0], [57.3, 5519.0], [57.4, 5519.0], [57.5, 5521.0], [57.6, 5533.0], [57.7, 5533.0], [57.8, 5533.0], [57.9, 5534.0], [58.0, 5539.0], [58.1, 5542.0], [58.2, 5542.0], [58.3, 5546.0], [58.4, 5551.0], [58.5, 5551.0], [58.6, 5553.0], [58.7, 5553.0], [58.8, 5558.0], [58.9, 5558.0], [59.0, 5559.0], [59.1, 5559.0], [59.2, 5561.0], [59.3, 5561.0], [59.4, 5561.0], [59.5, 5562.0], [59.6, 5571.0], [59.7, 5571.0], [59.8, 5572.0], [59.9, 5573.0], [60.0, 5573.0], [60.1, 5573.0], [60.2, 5574.0], [60.3, 5578.0], [60.4, 5578.0], [60.5, 5585.0], [60.6, 5591.0], [60.7, 5593.0], [60.8, 5593.0], [60.9, 5594.0], [61.0, 5596.0], [61.1, 5598.0], [61.2, 5598.0], [61.3, 5606.0], [61.4, 5607.0], [61.5, 5613.0], [61.6, 5613.0], [61.7, 5615.0], [61.8, 5631.0], [61.9, 5631.0], [62.0, 5635.0], [62.1, 5636.0], [62.2, 5650.0], [62.3, 5650.0], [62.4, 5657.0], [62.5, 5659.0], [62.6, 5660.0], [62.7, 5660.0], [62.8, 5666.0], [62.9, 5667.0], [63.0, 5672.0], [63.1, 5672.0], [63.2, 5675.0], [63.3, 5678.0], [63.4, 5678.0], [63.5, 5679.0], [63.6, 5681.0], [63.7, 5683.0], [63.8, 5683.0], [63.9, 5684.0], [64.0, 5686.0], [64.1, 5686.0], [64.2, 5686.0], [64.3, 5688.0], [64.4, 5691.0], [64.5, 5691.0], [64.6, 5691.0], [64.7, 5693.0], [64.8, 5696.0], [64.9, 5701.0], [65.0, 5701.0], [65.1, 5709.0], [65.2, 5710.0], [65.3, 5710.0], [65.4, 5711.0], [65.5, 5713.0], [65.6, 5714.0], [65.7, 5714.0], [65.8, 5715.0], [65.9, 5715.0], [66.0, 5719.0], [66.1, 5719.0], [66.2, 5719.0], [66.3, 5719.0], [66.4, 5723.0], [66.5, 5723.0], [66.6, 5724.0], [66.7, 5728.0], [66.8, 5728.0], [66.9, 5740.0], [67.0, 5741.0], [67.1, 5741.0], [67.2, 5741.0], [67.3, 5742.0], [67.4, 5747.0], [67.5, 5754.0], [67.6, 5754.0], [67.7, 5757.0], [67.8, 5767.0], [67.9, 5768.0], [68.0, 5768.0], [68.1, 5772.0], [68.2, 5776.0], [68.3, 5778.0], [68.4, 5778.0], [68.5, 5778.0], [68.6, 5780.0], [68.7, 5780.0], [68.8, 5783.0], [68.9, 5784.0], [69.0, 5785.0], [69.1, 5785.0], [69.2, 5786.0], [69.3, 5788.0], [69.4, 5789.0], [69.5, 5789.0], [69.6, 5801.0], [69.7, 5807.0], [69.8, 5807.0], [69.9, 5807.0], [70.0, 5810.0], [70.1, 5813.0], [70.2, 5813.0], [70.3, 5814.0], [70.4, 5815.0], [70.5, 5817.0], [70.6, 5817.0], [70.7, 5820.0], [70.8, 5823.0], [70.9, 5824.0], [71.0, 5824.0], [71.1, 5825.0], [71.2, 5828.0], [71.3, 5832.0], [71.4, 5832.0], [71.5, 5833.0], [71.6, 5833.0], [71.7, 5833.0], [71.8, 5835.0], [71.9, 5836.0], [72.0, 5837.0], [72.1, 5837.0], [72.2, 5837.0], [72.3, 5840.0], [72.4, 5842.0], [72.5, 5842.0], [72.6, 5843.0], [72.7, 5844.0], [72.8, 5846.0], [72.9, 5846.0], [73.0, 5847.0], [73.1, 5847.0], [73.2, 5847.0], [73.3, 5847.0], [73.4, 5848.0], [73.5, 5853.0], [73.6, 5853.0], [73.7, 5857.0], [73.8, 5860.0], [73.9, 5862.0], [74.0, 5862.0], [74.1, 5863.0], [74.2, 5863.0], [74.3, 5866.0], [74.4, 5866.0], [74.5, 5873.0], [74.6, 5874.0], [74.7, 5874.0], [74.8, 5874.0], [74.9, 5875.0], [75.0, 5887.0], [75.1, 5887.0], [75.2, 5888.0], [75.3, 5893.0], [75.4, 5895.0], [75.5, 5895.0], [75.6, 5901.0], [75.7, 5907.0], [75.8, 5908.0], [75.9, 5908.0], [76.0, 5909.0], [76.1, 5912.0], [76.2, 5921.0], [76.3, 5921.0], [76.4, 5925.0], [76.5, 5925.0], [76.6, 5932.0], [76.7, 5932.0], [76.8, 5933.0], [76.9, 5935.0], [77.0, 5935.0], [77.1, 5936.0], [77.2, 5938.0], [77.3, 5938.0], [77.4, 5938.0], [77.5, 5939.0], [77.6, 5939.0], [77.7, 5950.0], [77.8, 5950.0], [77.9, 5952.0], [78.0, 5954.0], [78.1, 5956.0], [78.2, 5956.0], [78.3, 5960.0], [78.4, 5963.0], [78.5, 5963.0], [78.6, 5964.0], [78.7, 5964.0], [78.8, 5973.0], [78.9, 5973.0], [79.0, 5978.0], [79.1, 5978.0], [79.2, 5979.0], [79.3, 5979.0], [79.4, 5983.0], [79.5, 5987.0], [79.6, 5989.0], [79.7, 5989.0], [79.8, 5992.0], [79.9, 5998.0], [80.0, 6023.0], [80.1, 6023.0], [80.2, 6028.0], [80.3, 6035.0], [80.4, 6035.0], [80.5, 6043.0], [80.6, 6044.0], [80.7, 6050.0], [80.8, 6050.0], [80.9, 6053.0], [81.0, 6067.0], [81.1, 6070.0], [81.2, 6070.0], [81.3, 6071.0], [81.4, 6078.0], [81.5, 6080.0], [81.6, 6080.0], [81.7, 6083.0], [81.8, 6086.0], [81.9, 6086.0], [82.0, 6094.0], [82.1, 6098.0], [82.2, 6099.0], [82.3, 6099.0], [82.4, 6100.0], [82.5, 6101.0], [82.6, 6106.0], [82.7, 6106.0], [82.8, 6112.0], [82.9, 6113.0], [83.0, 6113.0], [83.1, 6113.0], [83.2, 6126.0], [83.3, 6142.0], [83.4, 6142.0], [83.5, 6145.0], [83.6, 6150.0], [83.7, 6151.0], [83.8, 6151.0], [83.9, 6157.0], [84.0, 6159.0], [84.1, 6171.0], [84.2, 6171.0], [84.3, 6178.0], [84.4, 6180.0], [84.5, 6188.0], [84.6, 6188.0], [84.7, 6195.0], [84.8, 6195.0], [84.9, 6198.0], [85.0, 6198.0], [85.1, 6205.0], [85.2, 6210.0], [85.3, 6210.0], [85.4, 6216.0], [85.5, 6221.0], [85.6, 6224.0], [85.7, 6224.0], [85.8, 6236.0], [85.9, 6242.0], [86.0, 6245.0], [86.1, 6245.0], [86.2, 6245.0], [86.3, 6262.0], [86.4, 6273.0], [86.5, 6273.0], [86.6, 6275.0], [86.7, 6277.0], [86.8, 6277.0], [86.9, 6280.0], [87.0, 6284.0], [87.1, 6290.0], [87.2, 6290.0], [87.3, 6292.0], [87.4, 6293.0], [87.5, 6299.0], [87.6, 6299.0], [87.7, 6309.0], [87.8, 6317.0], [87.9, 6326.0], [88.0, 6326.0], [88.1, 6358.0], [88.2, 6389.0], [88.3, 6424.0], [88.4, 6424.0], [88.5, 6462.0], [88.6, 6471.0], [88.7, 6471.0], [88.8, 6483.0], [88.9, 6508.0], [89.0, 6515.0], [89.1, 6515.0], [89.2, 6516.0], [89.3, 6539.0], [89.4, 6543.0], [89.5, 6543.0], [89.6, 6573.0], [89.7, 6612.0], [89.8, 6651.0], [89.9, 6651.0], [90.0, 6663.0], [90.1, 6728.0], [90.2, 6728.0], [90.3, 6734.0], [90.4, 6744.0], [90.5, 6744.0], [90.6, 6744.0], [90.7, 6752.0], [90.8, 6769.0], [90.9, 6774.0], [91.0, 6774.0], [91.1, 6848.0], [91.2, 6916.0], [91.3, 6981.0], [91.4, 6981.0], [91.5, 6981.0], [91.6, 7039.0], [91.7, 7039.0], [91.8, 7095.0], [91.9, 7096.0], [92.0, 7110.0], [92.1, 7110.0], [92.2, 7126.0], [92.3, 7139.0], [92.4, 7162.0], [92.5, 7162.0], [92.6, 7199.0], [92.7, 7230.0], [92.8, 7234.0], [92.9, 7234.0], [93.0, 7254.0], [93.1, 7280.0], [93.2, 7296.0], [93.3, 7296.0], [93.4, 7308.0], [93.5, 7369.0], [93.6, 7369.0], [93.7, 7382.0], [93.8, 7412.0], [93.9, 7433.0], [94.0, 7433.0], [94.1, 7473.0], [94.2, 7484.0], [94.3, 7488.0], [94.4, 7488.0], [94.5, 7544.0], [94.6, 7573.0], [94.7, 7585.0], [94.8, 7585.0], [94.9, 7590.0], [95.0, 7601.0], [95.1, 7601.0], [95.2, 7645.0], [95.3, 7649.0], [95.4, 7651.0], [95.5, 7651.0], [95.6, 7653.0], [95.7, 7666.0], [95.8, 7674.0], [95.9, 7674.0], [96.0, 7679.0], [96.1, 7688.0], [96.2, 7739.0], [96.3, 7739.0], [96.4, 7741.0], [96.5, 7746.0], [96.6, 7770.0], [96.7, 7770.0], [96.8, 7781.0], [96.9, 7783.0], [97.0, 7783.0], [97.1, 7834.0], [97.2, 7873.0], [97.3, 7892.0], [97.4, 7892.0], [97.5, 7909.0], [97.6, 7940.0], [97.7, 7945.0], [97.8, 7945.0], [97.9, 7988.0], [98.0, 7994.0], [98.1, 8079.0], [98.2, 8079.0], [98.3, 8081.0], [98.4, 8083.0], [98.5, 8083.0], [98.6, 8111.0], [98.7, 8162.0], [98.8, 8164.0], [98.9, 8164.0], [99.0, 8172.0], [99.1, 8307.0], [99.2, 8319.0], [99.3, 8319.0], [99.4, 8415.0], [99.5, 8472.0], [99.6, 8519.0], [99.7, 8519.0], [99.8, 8626.0], [99.9, 8642.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 44.0, "series": [{"data": [[800.0, 1.0], [1000.0, 1.0], [1500.0, 1.0], [1900.0, 1.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2800.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 13.0], [3200.0, 2.0], [3400.0, 12.0], [3500.0, 13.0], [3700.0, 18.0], [3600.0, 18.0], [3800.0, 21.0], [3900.0, 11.0], [4000.0, 13.0], [4100.0, 17.0], [4300.0, 18.0], [4200.0, 18.0], [4400.0, 16.0], [4600.0, 16.0], [4500.0, 8.0], [4800.0, 17.0], [4700.0, 16.0], [5100.0, 17.0], [4900.0, 17.0], [5000.0, 22.0], [5300.0, 37.0], [5200.0, 30.0], [5400.0, 28.0], [5500.0, 36.0], [5600.0, 27.0], [5800.0, 44.0], [5700.0, 34.0], [6100.0, 20.0], [5900.0, 33.0], [6000.0, 17.0], [6200.0, 19.0], [6300.0, 5.0], [6400.0, 4.0], [6500.0, 6.0], [6600.0, 3.0], [6700.0, 7.0], [6900.0, 3.0], [6800.0, 1.0], [7000.0, 3.0], [7100.0, 5.0], [7400.0, 5.0], [7300.0, 3.0], [7200.0, 5.0], [7500.0, 4.0], [7600.0, 9.0], [7700.0, 6.0], [7800.0, 3.0], [7900.0, 5.0], [8000.0, 3.0], [8100.0, 4.0], [8400.0, 2.0], [8500.0, 1.0], [8300.0, 2.0], [8600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 733.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 733.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.60439868E12, "maxY": 12.0, "series": [{"data": [[1.60439886E12, 12.0], [1.60439868E12, 12.0], [1.6043988E12, 12.0], [1.60439898E12, 11.0], [1.60439892E12, 12.0], [1.60439874E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439898E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3367.0, "minX": 1.0, "maxY": 5274.792817679552, "series": [{"data": [[8.0, 3797.0], [4.0, 3885.0], [2.0, 3869.0], [1.0, 4238.0], [9.0, 3761.0], [10.0, 3370.0], [5.0, 3894.0], [11.0, 3367.0], [12.0, 5274.792817679552], [6.0, 3794.0], [3.0, 3882.0], [7.0, 3806.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5252.5346938775465]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 484.3333333333333, "minX": 1.60439868E12, "maxY": 409335.36666666664, "series": [{"data": [[1.60439886E12, 318689.01666666666], [1.60439868E12, 409335.36666666664], [1.6043988E12, 347450.01666666666], [1.60439898E12, 181991.13333333333], [1.60439892E12, 281034.1666666667], [1.60439874E12, 297302.51666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439886E12, 979.8333333333334], [1.60439868E12, 848.55], [1.6043988E12, 1146.9], [1.60439898E12, 484.3333333333333], [1.60439892E12, 1103.6833333333334], [1.60439874E12, 959.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439898E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4731.701298701301, "minX": 1.60439868E12, "maxY": 5633.669291338584, "series": [{"data": [[1.60439886E12, 5452.430769230772], [1.60439868E12, 5627.651785714288], [1.6043988E12, 4731.701298701301], [1.60439898E12, 5235.62121212121], [1.60439892E12, 5012.267123287668], [1.60439874E12, 5633.669291338584]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439898E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4730.623376623375, "minX": 1.60439868E12, "maxY": 5632.220472440944, "series": [{"data": [[1.60439886E12, 5451.207692307691], [1.60439868E12, 5626.107142857144], [1.6043988E12, 4730.623376623375], [1.60439898E12, 5234.242424242423], [1.60439892E12, 5011.232876712329], [1.60439874E12, 5632.220472440944]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439898E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08904109589041097, "minX": 1.60439868E12, "maxY": 1.2142857142857144, "series": [{"data": [[1.60439886E12, 0.10769230769230768], [1.60439868E12, 1.2142857142857144], [1.6043988E12, 0.10389610389610393], [1.60439898E12, 0.25757575757575757], [1.60439892E12, 0.08904109589041097], [1.60439874E12, 0.141732283464567]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439898E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 821.0, "minX": 1.60439868E12, "maxY": 8642.0, "series": [{"data": [[1.60439886E12, 7746.0], [1.60439868E12, 8642.0], [1.6043988E12, 7909.0], [1.60439898E12, 7412.0], [1.60439892E12, 6326.0], [1.60439874E12, 6573.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439886E12, 3157.4559980010986], [1.60439868E12, 824.5869943153858], [1.6043988E12, 2588.0599989652633], [1.60439898E12, 3367.0], [1.60439892E12, 3353.490999404192], [1.60439874E12, 4361.887991790772]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439886E12, 3165.0016007995605], [1.60439868E12, 846.0457022738457], [1.6043988E12, 2591.9660004138946], [1.60439898E12, 3367.0], [1.60439892E12, 3355.740100238323], [1.60439874E12, 4392.8768032836915]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439886E12, 3161.647999000549], [1.60439868E12, 836.5084971576929], [1.6043988E12, 2590.2299994826317], [1.60439898E12, 3367.0], [1.60439892E12, 3354.740499702096], [1.60439874E12, 4379.103995895386]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439886E12, 3146.0], [1.60439868E12, 821.0], [1.6043988E12, 2577.0], [1.60439898E12, 3367.0], [1.60439892E12, 3348.0], [1.60439874E12, 4321.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439886E12, 5605.5], [1.60439868E12, 5558.0], [1.6043988E12, 4547.5], [1.60439898E12, 5228.0], [1.60439892E12, 5385.0], [1.60439874E12, 5701.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439898E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3986.5, "minX": 1.0, "maxY": 5837.0, "series": [{"data": [[2.0, 5602.0], [1.0, 5837.0], [4.0, 3986.5], [5.0, 4001.0], [3.0, 5095.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3986.0, "minX": 1.0, "maxY": 5835.0, "series": [{"data": [[2.0, 5601.0], [1.0, 5835.0], [4.0, 3986.0], [5.0, 4001.0], [3.0, 5094.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.60439868E12, "maxY": 2.566666666666667, "series": [{"data": [[1.60439886E12, 2.1666666666666665], [1.60439868E12, 2.066666666666667], [1.6043988E12, 2.566666666666667], [1.60439898E12, 0.9], [1.60439892E12, 2.433333333333333], [1.60439874E12, 2.1166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439898E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.60439868E12, "maxY": 2.566666666666667, "series": [{"data": [[1.60439886E12, 2.1666666666666665], [1.60439868E12, 1.8666666666666667], [1.6043988E12, 2.566666666666667], [1.60439898E12, 1.1], [1.60439892E12, 2.433333333333333], [1.60439874E12, 2.1166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439898E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.60439868E12, "maxY": 2.566666666666667, "series": [{"data": [[1.60439886E12, 2.1666666666666665], [1.60439868E12, 1.8666666666666667], [1.6043988E12, 2.566666666666667], [1.60439898E12, 1.1], [1.60439892E12, 2.433333333333333], [1.60439874E12, 2.1166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439898E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.60439868E12, "maxY": 2.566666666666667, "series": [{"data": [[1.60439886E12, 2.1666666666666665], [1.60439868E12, 1.8666666666666667], [1.6043988E12, 2.566666666666667], [1.60439898E12, 1.1], [1.60439892E12, 2.433333333333333], [1.60439874E12, 2.1166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439898E12, "title": "Total Transactions Per Second"}},
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

