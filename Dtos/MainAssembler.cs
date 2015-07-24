using System.Collections.Generic;
using System.Linq;
using EM.TimeTracking.Models;

namespace EM.TimeTracking.Dtos
{
    public static partial class MainAssembler
    {
        static partial void OnDTO(this MainRecord entity, MainDto dto);
        static partial void OnEntity(this MainDto dto, MainRecord entity);
        public static MainRecord ToEntity(this MainDto dto)
        {
            if (dto == null) return null;

            var entity = new MainRecord();

            entity.Id = dto.key;
            entity.ParentId = dto.parentId;
            entity.Title = dto.title;
            entity.MainTypeRecord = dto.mainType.ToEntity();

            dto.OnEntity(entity);

            return entity;
        }
        public static MainDto ToDTO(this MainRecord entity)
        {
            if (entity == null) return null;

            var dto = new MainDto();

            dto.key = entity.Id;
            dto.title = entity.Title;
            dto.mainType = entity.MainTypeRecord.ToDTO();

            entity.OnDTO(dto);

            return dto;
        }

        public static List<MainRecord> ToEntities(this IEnumerable<MainDto> dtos)
        {
            if (dtos == null) return null;

            return dtos.Select(e => e.ToEntity()).ToList();
        }

        public static List<MainDto> ToDTOs(this IEnumerable<MainRecord> entities)
        {
            if (entities == null) return null;

            return entities.Select(e => e.ToDTO()).ToList();
        }
    }
}