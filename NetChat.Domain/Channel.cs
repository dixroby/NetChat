using System;
using System.ComponentModel.DataAnnotations;

namespace NetChat.Domain
{
    public class Channel
    {
        [Key]
        public Guid ChannelId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}