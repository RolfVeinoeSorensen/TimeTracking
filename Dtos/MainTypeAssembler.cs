using System;
using System.Collections.Generic;
using System.Linq;
using EM.TimeTracking.Models;

namespace EM.TimeTracking.Dtos
{
    public static partial class MainTypeAssembler
    {
        static partial void OnDTO(this MainTypeRecord entity, MainTypeDto dto);
        static partial void OnEntity(this MainTypeDto dto, MainTypeRecord entity);
        public static MainTypeRecord ToEntity(this MainTypeDto dto)
        {
            if (dto == null) return null;

            var entity = new MainTypeRecord();

            entity.Id = dto.key;
            entity.Title = dto.title;

            dto.OnEntity(entity);

            return entity;
        }
        public static MainTypeDto ToDTO(this MainTypeRecord entity)
        {
            if (entity == null) return null;

            var dto = new MainTypeDto();

            dto.key = entity.Id;
            dto.title = entity.Title;

            entity.OnDTO(dto);

            return dto;
        }

        public static List<MainTypeRecord> ToEntities(this IEnumerable<MainTypeDto> dtos)
        {
            if (dtos == null) return null;

            return dtos.Select(e => e.ToEntity()).ToList();
        }

        public static List<MainTypeDto> ToDTOs(this IEnumerable<MainTypeRecord> entities)
        {
            if (entities == null) return null;

            return entities.Select(e => e.ToDTO()).ToList();
        }
    }
}