# QGIS Benchmark summary compare-featureinfo (20201014-023729)


compare different version of QGIS servers using the same settings

_run completed in 01h 55m 48s_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201014-023729_plot.html)

## Summary
| name               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock      | Global  |         96.2 |               0   |           347 |            0 |     7758.2 |     6532.8 |     3309.8 |      99.6 |      87   |      13   |          0 |
| qgis314-stock      | Global  |       7323.5 |            7509.7 |           347 |          347 |     6630.1 |     6447.1 |     3332.8 |      98.6 |      71.9 |      23.3 |        100 |
| qgis314-standalone | Global  |      19735   |           20406.3 |           347 |          347 |     6519.1 |     6317.8 |     3618.2 |      94.5 |      69.1 |      10.8 |        100 |
| qgis310-stock      | Global  |      40053.4 |           41518.7 |           347 |          347 |     6427.2 |     6257.5 |     3351.7 |      91.8 |      73.2 |      13.9 |        100 |

## Aggregated
| name                          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218      | somap   |         96.2 |               0   |           347 |            0 |     7758.2 |     6532.8 |     3309.8 |      99.6 |      87   |      13   |          0 |
| qgis314-stock > somap314      | somap   |       7323.5 |            7509.7 |           347 |          347 |     6630.1 |     6447.1 |     3332.8 |      98.6 |      71.9 |      23.3 |        100 |
| qgis314-standalone > somap314 | somap   |      19735   |           20406.3 |           347 |          347 |     6519.1 |     6317.8 |     3618.2 |      94.5 |      69.1 |      10.8 |        100 |
| qgis310-stock > somap310      | somap   |      40053.4 |           41518.7 |           347 |          347 |     6427.2 |     6257.5 |     3351.7 |      91.8 |      73.2 |      13.9 |        100 |

## Detail
| name                                                                                                                                                                       | group                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218 > featureinfo.txt](../results/details/compare-featureinfo/20201014-023729/qgis218-stock/somap218/featureinfo.txt/dashboard/index.html)           | somap > featureinfo.txt |         96.2 |               0   |           347 |            0 |          0 |       277.346 |              76 |           21 |         6899 |         460.4 |           916 |        4864.2 |   34.0664    |           2201.62      |         15.8801    |     7758.2 |     6532.8 |     3309.8 |      99.6 |      87   |      13   |
| [qgis314-stock > somap314 > featureinfo.txt](../results/details/compare-featureinfo/20201014-023729/qgis314-stock/somap314/featureinfo.txt/dashboard/index.html)           | somap > featureinfo.txt |       7323.5 |            7509.7 |           347 |          347 |        100 |     21105.1   |               1 |            0 |       120122 |      120043   |        120068 |      120117   |    0.448233  |              0.144014  |          0.208945  |     6630.1 |     6447.1 |     3332.8 |      98.6 |      71.9 |      23.3 |
| [qgis314-standalone > somap314 > featureinfo.txt](../results/details/compare-featureinfo/20201014-023729/qgis314-standalone/somap314/featureinfo.txt/dashboard/index.html) | somap > featureinfo.txt |      19735   |           20406.3 |           347 |          347 |        100 |     56873.3   |           34473 |        32593 |       215428 |      115493   |        149636 |      210947   |    0.168391  |              0.0271333 |          0.0807979 |     6519.1 |     6317.8 |     3618.2 |      94.5 |      69.1 |      10.8 |
| [qgis310-stock > somap310 > featureinfo.txt](../results/details/compare-featureinfo/20201014-023729/qgis310-stock/somap310/featureinfo.txt/dashboard/index.html)           | somap > featureinfo.txt |      40053.4 |           41518.7 |           347 |          347 |        100 |    115428     |          120060 |        39038 |       120118 |      120082   |        120084 |      120105   |    0.0850114 |              0.0278977 |          0.0396283 |     6427.2 |     6257.5 |     3351.7 |      91.8 |      73.2 |      13.9 |

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

  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218:
        - featureinfo.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310:
        - featureinfo.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314:
        - featureinfo.txt

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218-stock:
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
      somap218:
      - featureinfo.txt
    template: docker-compose-qgis-2
  qgis310-stock:
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
      somap310:
      - featureinfo.txt
    template: docker-compose-qgis-3-nginx
  qgis314-standalone:
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
    inherit: qgis314-stock
    path-prefix: ''
    projects:
      somap314:
      - featureinfo.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data
  qgis314-stock:
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
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314:
      - featureinfo.txt
    template: docker-compose-qgis-3-nginx

```