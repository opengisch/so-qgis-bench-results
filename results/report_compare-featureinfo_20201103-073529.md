# QGIS Benchmark summary compare-featureinfo (20201103-073529)


compare different version of QGIS servers using the same settings

_run completed in 00h 03m 27s_

_Sample size per configuration 347_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201103-073529_plot.html)

## Summary
| name               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316            | Global  |                 19.1 | +0.0%                        |           66.4 | +0.9%                  |           407.5 | +228.6%                 |           58 |          690 |              0.5 |           347 |            0 |     2332.1 |    2325.55 |     2303.4 |      28.4 |     18.2  |       9   |          0 |
| qgis218            | Global  |                 19.6 | +2.6%                        |           65.8 | +0.0%                  |           124   | +0.0%                   |           55 |         6399 |              2.4 |           347 |            0 |     2734.2 |    2550.85 |     2306.3 |      95.3 |     57.15 |      10.8 |          0 |
| qgis316-standalone | Global  |                 19.7 | +3.1%                        |           68.4 | +3.9%                  |           413   | +233.1%                 |           70 |          821 |              0.5 |           347 |            0 |     2337.5 |    2326.4  |     2313.6 |      30.1 |     19.9  |      10.3 |          0 |
| qgis310            | Global  |                 55.9 | +192.7%                      |          424.7 | +545.0%                |          2773.5 | +2136.7%                |          496 |         3044 |              0.5 |           347 |            0 |     2347.3 |    2315.3  |     2307.8 |      29.1 |     15    |      10.3 |          0 |

## Aggregated
| name                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_grundplanav_farbig            | somap_grundplanav_farbig |                  9.8 | +0.0%                        |           33.9 | +0.0%                  |            56   | +0.0%                   |           34 |         3349 |              2.2 |           149 |            0 |     2734.2 |     2711.2 |     2671.7 |      95.3 |      73.4 |      31   |          0 |
| qgis316 > somap316_grundplanav_farbig            | somap_grundplanav_farbig |                 10.3 | +5.1%                        |           41.4 | +22.0%                 |           281   | +401.8%                 |            9 |          498 |              0.3 |           149 |            0 |     2332.1 |     2321.5 |     2303.4 |      28.4 |      20.7 |      15.8 |          0 |
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 10.7 | +9.2%                        |           43.4 | +28.0%                 |           289   | +416.1%                 |           32 |          567 |              0.3 |           149 |            0 |     2337.5 |     2331.3 |     2323.5 |      25.9 |      19.6 |      14.7 |          0 |
| qgis310 > somap310_grundplanav_farbig            | somap_grundplanav_farbig |                 38.6 | +293.9%                      |          317.3 | +834.8%                |          2214   | +3853.6%                |          286 |         2431 |              0.3 |           149 |            0 |     2347.3 |     2317.7 |     2308   |      29.1 |      14.8 |      12.6 |          0 |
| qgis316 > somap316_lk                            | somap_lk                 |                  8.8 | +0.0%                        |           25   | +0.1%                  |           126.5 | +86.0%                  |           49 |          192 |              0.2 |           198 |            0 |     2331.5 |     2329.6 |     2327.8 |      22.4 |      15.7 |       9   |          0 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |                  9   | +2.3%                        |           25   | +0.0%                  |           124   | +82.4%                  |           38 |          254 |              0.2 |           198 |            0 |     2329.4 |     2321.5 |     2313.6 |      30.1 |      20.2 |      10.3 |          0 |
| qgis218 > somap218_lk                            | somap_lk                 |                  9.8 | +11.4%                       |           31.9 | +27.7%                 |            68   | +0.0%                   |           21 |         3050 |              0.2 |           198 |            0 |     2521.1 |     2390.5 |     2306.3 |      86.8 |      40.9 |      10.8 |          0 |
| qgis310 > somap310_lk                            | somap_lk                 |                 17.3 | +96.6%                       |          107.4 | +330.0%                |           559.5 | +722.8%                 |          210 |          613 |              0.2 |           198 |            0 |     2327.9 |     2312.9 |     2307.8 |      21.6 |      15.2 |      10.3 |          0 |

## Detail
| name                                                                                                                                                                                                                   | group                                         |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-073529/qgis218/somap218_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                  9.8 | +0.0%                        |           33.9 | +0.0%                  |            56   | +0.0%                   |           149 |            0 |          0 |       227.779 |           34 |         3349 |         365   |        887.5  |       2857    |     36.7176  |              547.215   |           18.2779  |              2.2 |     2734.2 |     2711.2 |     2671.7 |      95.3 |      73.4 |      31   |
| [qgis316 > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-073529/qgis316/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                 10.3 | +5.1%                        |           41.4 | +22.0%                 |           281   | +401.8%                 |           149 |            0 |          0 |       277.919 |            9 |          498 |         417   |        426    |        491    |     32.5825  |               59.1451  |           16.2195  |              0.3 |     2332.1 |     2321.5 |     2303.4 |      28.4 |      20.7 |      15.8 |
| [qgis316-standalone > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-073529/qgis316-standalone/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html) | somap_grundplanav_farbig > featureinfo_av.txt |                 10.7 | +9.2%                        |           43.4 | +28.0%                 |           289   | +416.1%                 |           149 |            0 |          0 |       291.57  |           32 |          567 |         458   |        478    |        528.5  |     31.2304  |               53.6694  |           15.9734  |              0.3 |     2337.5 |     2331.3 |     2323.5 |      25.9 |      19.6 |      14.7 |
| [qgis310 > somap310_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201103-073529/qgis310/somap310_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |                 38.6 | +293.9%                      |          317.3 | +834.8%                |          2214   | +3853.6%                |           149 |            0 |          0 |      2129.34  |          286 |         2431 |        2367   |       2391.5  |       2424.5  |      4.49811 |                8.17394 |            2.23915 |              0.3 |     2347.3 |     2317.7 |     2308   |      29.1 |      14.8 |      12.6 |
| [qgis316 > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-073529/qgis316/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  8.8 | +0.0%                        |           25   | +0.1%                  |           126.5 | +86.0%                  |           198 |            0 |          0 |       126.313 |           49 |          192 |         165.1 |        171.05 |        182.1  |     68.1583  |               63.0325  |           32.0481  |              0.2 |     2331.5 |     2329.6 |     2327.8 |      22.4 |      15.7 |       9   |
| [qgis316-standalone > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-073529/qgis316-standalone/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                 | somap_lk > featureinfo_lk.txt                 |                  9   | +2.3%                        |           25   | +0.0%                  |           124   | +82.4%                  |           198 |            0 |          0 |       126.136 |           38 |          254 |         158   |        167    |        247.07 |     68.9655  |               56.7746  |           33.3705  |              0.2 |     2329.4 |     2321.5 |     2313.6 |      30.1 |      20.2 |      10.3 |
| [qgis218 > somap218_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-073529/qgis218/somap218_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                  9.8 | +11.4%                       |           31.9 | +27.7%                 |            68   | +0.0%                   |           198 |            0 |          0 |       161.126 |           21 |         3050 |         141.3 |        417.8  |       3034.16 |     52.5478  |               57.3803  |           24.708   |              0.2 |     2521.1 |     2390.5 |     2306.3 |      86.8 |      40.9 |      10.8 |
| [qgis310 > somap310_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201103-073529/qgis310/somap310_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |                 17.3 | +96.6%                       |          107.4 | +330.0%                |           559.5 | +722.8%                 |           198 |            0 |          0 |       542.354 |          210 |          613 |         596.1 |        603    |        612.01 |     17.4819  |               16.2013  |            8.21999 |              0.2 |     2327.9 |     2312.9 |     2307.8 |      21.6 |      15.2 |      10.3 |

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
      QGIS_REPLICAS: '1'
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
        - featureinfo_lk.txt
      somap218_grundplanav_farbig:
        - featureinfo_av.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - featureinfo_lk.txt
      somap310_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - featureinfo_lk.txt
      somap316_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

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
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - featureinfo_av.txt
      somap218_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - featureinfo_av.txt
      somap310_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ''
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```