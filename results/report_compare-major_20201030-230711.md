# QGIS Benchmark summary compare-major (20201030-230711)


compare different version of QGIS servers using the same settings

_run completed in 00h 50m 30s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201030-230711_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                603.7 | +0.0%                        |         5794.2 | +0.0%                  |          1334.5 | +0.0%                   |           16 |        14281 |         11187 |            0 |    10840.4 |    6922.2  |     4418.2 |      97   |   72.7333 |      13   |          0 |
| qgis218 | Global  |                724.5 | +20.0%                       |         6989.7 | +20.6%                 |          1406.5 | +5.4%                   |          449 |        27852 |         11187 |            0 |    10810.1 |    7178.43 |     4310.1 |      99.8 |   97.8333 |      13.3 |          0 |
| qgis310 | Global  |                800.4 | +32.6%                       |         7777.9 | +34.2%                 |          1895   | +42.0%                  |          396 |        14509 |         11187 |            0 |    10760.8 |    7085.27 |     4433.4 |      93   |   73.6333 |      31.8 |          0 |
| qgis314 | Global  |                820.7 | +35.9%                       |         7965.3 | +37.5%                 |          2020   | +51.4%                  |          432 |        15107 |         11187 |            0 |    10615.4 |    7029.37 |     4369.1 |      97.5 |   73.5    |      34.5 |          0 |

## Aggregated
| name                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 62.3 | +0.0%                        |          560.3 | +0.0%                  |           675   | +0.0%                   |            8 |         4734 |           735 |            0 |     6681.2 |     6194.5 |     4725.9 |      93.7 |      71.5 |      38.9 |          0 |
| qgis218 > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 73.5 | +18.0%                       |          664.9 | +18.7%                 |           704   | +4.3%                   |          230 |         7979 |           735 |            0 |     6437.3 |     5993.5 |     5473.7 |      99.2 |      97.3 |      47.9 |          0 |
| qgis310 > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 80   | +28.4%                       |          736.3 | +31.4%                 |           875   | +29.6%                  |          184 |         3785 |           735 |            0 |     7204.2 |     6412.4 |     4714.2 |      93   |      73.3 |      35.2 |          0 |
| qgis314 > somap314_grundplanav_farbig | somap_grundplanav_farbig |                 83.5 | +34.0%                       |          771.2 | +37.6%                 |           973   | +44.1%                  |          206 |         4133 |           735 |            0 |     7042.6 |     6346.5 |     4759.1 |      96.8 |      73.3 |      38.8 |          0 |
| qgis316 > somap316_grundplanav_sw     | somap_grundplanav_sw     |                381.1 | +0.0%                        |         3717.5 | +0.0%                  |           536   | +0.0%                   |            5 |         6329 |          5190 |            0 |    10840.4 |     8941.4 |     5707.1 |      97   |      72.8 |      13   |          0 |
| qgis218 > somap218_grundplanav_sw     | somap_grundplanav_sw     |                507.1 | +33.1%                       |         4957.7 | +33.4%                 |           569.5 | +6.2%                   |          214 |        17086 |          5190 |            0 |    10810.1 |     9503.9 |     5792.8 |      99.8 |      98.2 |      13.3 |          0 |
| qgis310 > somap310_grundplanav_sw     | somap_grundplanav_sw     |                525.2 | +37.8%                       |         5171.4 | +39.1%                 |           838   | +56.3%                  |          182 |         7119 |          5190 |            0 |    10760.8 |     9205.8 |     6099   |      92.9 |      73.8 |      31.8 |          0 |
| qgis314 > somap314_grundplanav_sw     | somap_grundplanav_sw     |                540.5 | +41.8%                       |         5311.2 | +42.9%                 |           851   | +58.8%                  |          192 |         6776 |          5190 |            0 |    10615.4 |     9111   |     5965.2 |      96   |      73.8 |      36.9 |          0 |
| qgis218 > somap218_lk                 | somap_lk                 |                143.9 | +0.0%                        |         1367.1 | +0.0%                  |           133   | +7.7%                   |            5 |         2787 |          5262 |            0 |     7465.7 |     6037.9 |     4310.1 |      99.7 |      98   |      42.5 |          0 |
| qgis316 > somap316_lk                 | somap_lk                 |                160.3 | +11.4%                       |         1516.4 | +10.9%                 |           123.5 | +0.0%                   |            3 |         3218 |          5262 |            0 |     7354.4 |     5630.7 |     4418.2 |      88.3 |      73.9 |      42   |          0 |
| qgis310 > somap310_lk                 | somap_lk                 |                195.2 | +35.6%                       |         1870.2 | +36.8%                 |           182   | +47.4%                  |           30 |         3605 |          5262 |            0 |     7098.6 |     5637.6 |     4433.4 |      82.8 |      73.8 |      38.1 |          0 |
| qgis314 > somap314_lk                 | somap_lk                 |                196.7 | +36.7%                       |         1882.8 | +37.7%                 |           196   | +58.7%                  |           34 |         4198 |          5262 |            0 |     7576.1 |     5630.6 |     4369.1 |      97.5 |      73.4 |      34.5 |          0 |

## Detail
| name                                                                                                                                                                           | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-230711/qgis316/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 62.3 | +0.0%                        |          560.3 | +0.0%                  |           675   | +0.0%                   |           735 |            0 |          0 |       762.317 |            8 |         4734 |        1383.2 |       1613.6  |       2939.08 |     12.9433  |                1893.96 |            5.69886 |     6681.2 |     6194.5 |     4725.9 |      93.7 |      71.5 |      38.9 |
| [qgis218 > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-230711/qgis218/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 73.5 | +18.0%                       |          664.9 | +18.7%                 |           704   | +4.3%                   |           735 |            0 |          0 |       904.612 |          230 |         7979 |        1572.4 |       1925.6  |       3184.28 |     10.8329  |                1895.69 |            4.76964 |     6437.3 |     5993.5 |     5473.7 |      99.2 |      97.3 |      47.9 |
| [qgis310 > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-230711/qgis310/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 80   | +28.4%                       |          736.3 | +31.4%                 |           875   | +29.6%                  |           735 |            0 |          0 |      1001.75  |          184 |         3785 |        1699   |       1993.4  |       3030.64 |      9.854   |                1442.1  |            4.33865 |     7204.2 |     6412.4 |     4714.2 |      93   |      73.3 |      35.2 |
| [qgis314 > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201030-230711/qgis314/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 83.5 | +34.0%                       |          771.2 | +37.6%                 |           973   | +44.1%                  |           735 |            0 |          0 |      1049.3   |          206 |         4133 |        1664.6 |       1897.8  |       2871.08 |      9.41149 |                1377.28 |            4.14381 |     7042.6 |     6346.5 |     4759.1 |      96.8 |      73.3 |      38.8 |
| [qgis316 > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-230711/qgis316/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                381.1 | +0.0%                        |         3717.5 | +0.0%                  |           536   | +0.0%                   |          5190 |            0 |          0 |       716.278 |            5 |         6329 |        1571   |       2022.8  |       3042.09 |     13.837   |                3745.28 |            6.02639 |    10840.4 |     8941.4 |     5707.1 |      97   |      72.8 |      13   |
| [qgis218 > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-230711/qgis218/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                507.1 | +33.1%                       |         4957.7 | +33.4%                 |           569.5 | +6.2%                   |          5190 |            0 |          0 |       955.243 |          214 |        17086 |        2170.9 |       2681.25 |       5211.71 |     10.3583  |                3225.19 |            4.51132 |    10810.1 |     9503.9 |     5792.8 |      99.8 |      98.2 |      13.3 |
| [qgis310 > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-230711/qgis310/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                525.2 | +37.8%                       |         5171.4 | +39.1%                 |           838   | +56.3%                  |          5190 |            0 |          0 |       996.418 |          182 |         7119 |        1833.9 |       2269.85 |       3244.36 |      9.99395 |                2704.8  |            4.35265 |    10760.8 |     9205.8 |     6099   |      92.9 |      73.8 |      31.8 |
| [qgis314 > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201030-230711/qgis314/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                540.5 | +41.8%                       |         5311.2 | +42.9%                 |           851   | +58.8%                  |          5190 |            0 |          0 |      1023.35  |          192 |         6776 |        1906.9 |       2364.35 |       3282.81 |      9.71283 |                2628.65 |            4.23021 |    10615.4 |     9111   |     5965.2 |      96   |      73.8 |      36.9 |
| [qgis218 > somap218_lk > lk_big.txt](../results/details/compare-major/20201030-230711/qgis218/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                143.9 | +0.0%                        |         1367.1 | +0.0%                  |           133   | +7.7%                   |          5262 |            0 |          0 |       259.804 |            5 |         2787 |         698   |        978.85 |       1697.22 |     38.1971  |                1944.65 |           19.3489  |     7465.7 |     6037.9 |     4310.1 |      99.7 |      98   |      42.5 |
| [qgis316 > somap316_lk > lk_big.txt](../results/details/compare-major/20201030-230711/qgis316/somap316_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                160.3 | +11.4%                       |         1516.4 | +10.9%                 |           123.5 | +0.0%                   |          5262 |            0 |          0 |       288.175 |            3 |         3218 |         759.7 |       1045.1  |       1898.37 |     34.1569  |                1616.18 |           17.3023  |     7354.4 |     5630.7 |     4418.2 |      88.3 |      73.9 |      42   |
| [qgis310 > somap310_lk > lk_big.txt](../results/details/compare-major/20201030-230711/qgis310/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                195.2 | +35.6%                       |         1870.2 | +36.8%                 |           182   | +47.4%                  |          5262 |            0 |          0 |       355.42  |           30 |         3605 |         896   |       1193.55 |       1909.37 |     27.8135  |                1316.59 |           14.089   |     7098.6 |     5637.6 |     4433.4 |      82.8 |      73.8 |      38.1 |
| [qgis314 > somap314_lk > lk_big.txt](../results/details/compare-major/20201030-230711/qgis314/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                196.7 | +36.7%                       |         1882.8 | +37.7%                 |           196   | +58.7%                  |          5262 |            0 |          0 |       357.819 |           34 |         4198 |         850.7 |       1164    |       1910.44 |     27.585   |                1305.19 |           13.9733  |     7576.1 |     5630.6 |     4369.1 |      97.5 |      73.4 |      34.5 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```