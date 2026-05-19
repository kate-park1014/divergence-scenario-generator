export const scenario_snowy_astrielle_echoes_02 = {
	"scenario_id": "snowy_astrielle_echoes_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "세계는 해방되었으나, 아직 혼돈에 잠겨 있었다.",
						"english": "The world was freed, yet still steeped in chaos.",
						"japanese": "世界は解放されたが、未だ混沌の中にあった。",
						"chinese": "世界被解放了，但仍旧沉浸在混沌之中。",
						"french": "Le monde fut libéré, mais restait plongé dans le chaos.",
						"spanish": "El mundo fue liberado, pero aún estaba sumido en el caos.",
						"vietnamese": "Thế giới đã được giải phóng, nhưng vẫn chìm trong hỗn loạn.",
						"thai": "โลกได้รับการปลดปล่อย แต่ยังคงจมอยู่ในความสับสนวุ่นวาย",
						"hindi": "दुनिया आज़ाद हो गई थी, फिर भी अराजकता में डूबी हुई थी।"
					}
				},
				{
					"content": {
						"korean": "아스트리엘, 괜찮아? 안색이 너무 안 좋아.",
						"english": "Astriel, are you okay? You look terrible.",
						"japanese": "アストリエル、大丈夫？顔色がすごく悪いよ。",
						"chinese": "阿斯特里尔，你还好吗？你的脸色非常不好。",
						"french": "Astriel, ça va ? Tu as très mauvaise mine.",
						"spanish": "Astriel, ¿estás bien? Te ves muy mal.",
						"vietnamese": "Astriel, cậu không sao chứ? Sắc mặt cậu tệ quá.",
						"thai": "แอสเทรียล ไม่เป็นไรใช่ไหม? ดูท่าทางไม่ค่อยดีเลย",
						"hindi": "एस्ट्रेल, तुम ठीक हो? तुम्हारा चेहरा बहुत खराब लग रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…꿈이 너무 생생해. 그 남자, 제라드….",
						"english": "...The dream was too vivid. That man, Gerard...",
						"japanese": "…夢が鮮明すぎる。あの男、ジェラード…。",
						"chinese": "……梦境太真实了。那个男人，杰拉德……。",
						"french": "...Le rêve était trop vif. Cet homme, Gérard...",
						"spanish": "...El sueño fue demasiado vívido. Ese hombre, Gerard...",
						"vietnamese": "Giấc mơ quá sống động. Người đàn ông đó, Gerard...",
						"thai": "...ความฝันมันชัดเจนเกินไป ผู้ชายคนนั้น เจอราร์ด...",
						"hindi": "...सपना बहुत जीवंत था। वह आदमी, जेरार्ड..."
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그 꿈, 저도 조사 중입니다. 고대 문헌에서 단서를 찾았어요.",
						"english": "I'm investigating that dream too. I found clues in ancient texts.",
						"japanese": "その夢、私も調査中です。古代文献で手がかりを見つけました。",
						"chinese": "那个梦，我也正在调查。我在古代文献中找到了线索。",
						"french": "Ce rêve, je l'enquête aussi. J'ai trouvé des indices dans les textes anciens.",
						"spanish": "Ese sueño, yo también lo estoy investigando. Encontré pistas en textos antiguos.",
						"vietnamese": "Giấc mơ đó, tôi cũng đang điều tra. Tôi đã tìm thấy manh mối trong các văn bản cổ.",
						"thai": "ฝันนั้น ผมก็กำลังสืบสวนอยู่ พบเบาะแสในเอกสารโบราณแล้ว",
						"hindi": "उस सपने की मैं भी जांच कर रहा हूं। मुझे प्राचीन ग्रंथों में सुराग मिले हैं।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "제라드? 그 녀석은 사라졌잖아!",
						"english": "Gerard? He disappeared!",
						"japanese": "ジェラード？あの野郎は消えたはずだ！",
						"chinese": "杰拉德？那家伙不是消失了吗！",
						"french": "Gérard ? Ce type a disparu !",
						"spanish": "Gerard? ¡Ese tipo desapareció!",
						"vietnamese": "Gerard? Tên đó đã biến mất rồi mà!",
						"thai": "เจอราร์ด? ไอ้หมอนั่นหายตัวไปแล้วนี่!",
						"hindi": "जेरार्ड? वह तो गायब हो गया था!"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "하지만 원소의 정수와 연결된 기록이… 심상치 않습니다.",
						"english": "But records linked to the essence of elements... are unusual.",
						"japanese": "しかし、元素の精髄に繋がる記録が…尋常ではありません。",
						"chinese": "但是与元素精华相关的记录……非同寻常。",
						"french": "Mais les registres liés à l'essence des éléments... sont troublants.",
						"spanish": "Pero los registros vinculados a la esencia de los elementos... son inusuales.",
						"vietnamese": "Nhưng những ghi chép liên quan đến tinh hoa nguyên tố... thật bất thường.",
						"thai": "แต่บันทึกที่เชื่อมโยงกับแก่นแท้ของธาตุ...ไม่ธรรมดาเลย",
						"hindi": "लेकिन तत्वों के सार से जुड़े रिकॉर्ड... असामान्य हैं।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 문헌 보세요. 세계 곳곳에서 발견되는… 특이한 얼음 결정체들.",
						"english": "Look at this document. Unusual ice crystals... found across the world.",
						"japanese": "この文献を見てください。世界各地で発見される…特異な氷の結晶体。",
						"chinese": "看这份文献。世界各地发现的……奇特的冰晶体。",
						"french": "Regardez ce document. Des cristaux de glace inhabituels… découverts partout dans le monde.",
						"spanish": "Miren este documento. Cristales de hielo inusuales… encontrados por todo el mundo.",
						"vietnamese": "Hãy xem tài liệu này. Những tinh thể băng kỳ lạ… được tìm thấy khắp nơi trên thế giới.",
						"thai": "ดูเอกสารนี้สิ ผลึกน้ำแข็งประหลาด… ที่พบทั่วโลกเลยนะ",
						"hindi": "इस दस्तावेज़ को देखो। दुनिया भर में पाए जाने वाले… अजीब बर्फीले क्रिस्टल।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "설마, 단순한 돌멩이가 아니란 거야?",
						"english": "Surely, you don't mean they're not just simple rocks?",
						"japanese": "まさか、ただの石ころじゃないって言うの？",
						"chinese": "难道说，它们不是普通的石头？",
						"french": "Vous ne voulez pas dire qu'il ne s'agit pas de simples roches, n'est-ce pas ?",
						"spanish": "¿No querrás decir que no son simples rocas?",
						"vietnamese": "Chẳng lẽ, chúng không phải chỉ là những viên đá bình thường?",
						"thai": "อย่าบอกนะว่า… นี่ไม่ใช่แค่ก้อนหินธรรมดา?",
						"hindi": "कहीं ऐसा तो नहीं कि ये सिर्फ़ पत्थर नहीं हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "네. 고대 존재의 파편이자, 제라드의 흔적과 연결되어 있습니다.",
						"english": "Yes. They are fragments of an ancient being, connected to Zerard's traces.",
						"japanese": "はい。それは古代存在の破片であり、ゼラードの痕跡と繋がっています。",
						"chinese": "是的。它们是古代存在的碎片，与杰拉德的踪迹相关联。",
						"french": "Oui. Ce sont des fragments d'un être ancien, liés aux traces de Zerard.",
						"spanish": "Sí. Son fragmentos de un ser antiguo, conectados a las huellas de Zerard.",
						"vietnamese": "Đúng vậy. Chúng là mảnh vỡ của một thực thể cổ đại, liên kết với dấu vết của Zerard.",
						"thai": "ใช่แล้วครับ มันคือเศษเสี้ยวของสิ่งมีชีวิตโบราณ ที่เชื่อมโยงกับร่องรอยของซีราร์ด",
						"hindi": "हाँ। वे एक प्राचीन अस्तित्व के टुकड़े हैं, जो ज़रार्ड के निशान से जुड़े हैं।"
					}
				},
				{
					"content": {
						"korean": "그럼 제라드가 돌아온다는 거야? 말도 안 돼!",
						"english": "So Zerard is returning? Unbelievable!",
						"japanese": "じゃあゼラードが戻ってくるって言うの？ありえない！",
						"chinese": "那杰拉德要回来了？这不可能！",
						"french": "Alors Zerard revient ? C'est incroyable !",
						"spanish": "¿Entonces Zerard está regresando? ¡Es imposible!",
						"vietnamese": "Vậy là Zerard sẽ trở lại sao? Thật vô lý!",
						"thai": "งั้นซีราร์ดจะกลับมาเหรอ? เป็นไปไม่ได้!",
						"hindi": "तो ज़रार्ड वापस आ रहा है? नामुमकिन!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직은… 가정일 뿐입니다. 하지만 방심해선 안 됩니다.",
						"english": "For now... it's just a hypothesis. But we mustn't let our guard down.",
						"japanese": "まだ…仮説に過ぎません。しかし、油断は禁物です。",
						"chinese": "目前…这只是个假设。但我们不能放松警惕。",
						"french": "Pour l'instant... ce n'est qu'une hypothèse. Mais nous ne devons pas baisser notre garde.",
						"spanish": "Por ahora… es solo una hipótesis. Pero no debemos bajar la guardia.",
						"vietnamese": "Hiện tại… đó chỉ là một giả thuyết. Nhưng chúng ta không thể lơ là.",
						"thai": "ตอนนี้… เป็นแค่การคาดเดาเท่านั้นครับ แต่เราก็ประมาทไม่ได้",
						"hindi": "अभी के लिए… यह सिर्फ़ एक परिकल्पना है। लेकिन हमें लापरवाह नहीं होना चाहिए।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"content": {
						"korean": "아스트리엘의 상태가 더 나빠지는 것 같습니다.",
						"english": "Astriel's condition seems to be worsening.",
						"japanese": "アストリエルの状態がさらに悪化しているようです。",
						"chinese": "阿斯特丽尔的情况似乎在恶化。",
						"french": "L'état d'Astriel semble s'aggraver.",
						"spanish": "La condición de Astriel parece estar empeorando.",
						"vietnamese": "Tình trạng của Astriel có vẻ đang xấu đi.",
						"thai": "อาการของแอสเทรียลดูเหมือนจะแย่ลงเรื่อยๆ",
						"hindi": "एस्ट्रीयल की हालत बिगड़ती जा रही है।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "맞아. 가끔 다른 사람 같아. 목소리도 변하고…",
						"english": "True. Sometimes she's like a different person. Her voice changes too...",
						"japanese": "そうね。時々、別人みたい。声も変わって…",
						"chinese": "没错。她有时像变了个人。声音也变了…",
						"french": "C'est vrai. Parfois, elle est comme une autre personne. Sa voix change aussi…",
						"spanish": "Cierto. A veces parece otra persona. Su voz también cambia…",
						"vietnamese": "Đúng vậy. Đôi khi cô ấy như một người khác. Giọng nói cũng thay đổi…",
						"thai": "จริงด้วย บางทีก็เหมือนคนละคน เสียงก็เปลี่ยนไป…",
						"hindi": "सही है। कभी-कभी वह एक अलग इंसान लगती है। उसकी आवाज़ भी बदल जाती है…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "고대 마법 기록에 따르면, 특정 존재의 잔재가 살아있는 자를 숙주 삼아…",
						"english": "According to ancient magic records, the remnants of a specific being take a living host...",
						"japanese": "古代の魔法記録によると、特定の存在の残滓が生きている者を宿主とし…",
						"chinese": "根据古代魔法记录，特定存在的残余会以活体为宿主…",
						"french": "Selon d'anciens registres magiques, les vestiges d'un être spécifique prennent un hôte vivant…",
						"spanish": "Según los registros de magia antigua, los restos de un ser específico toman un huésped vivo…",
						"vietnamese": "Theo ghi chép ma thuật cổ đại, tàn dư của một thực thể nhất định sẽ lấy vật chủ sống…",
						"thai": "ตามบันทึกเวทมนตร์โบราณ เศษซากของสิ่งมีชีวิตบางอย่างจะใช้สิ่งมีชีวิตเป็นร่างสถิต…",
						"hindi": "प्राचीन जादू के रिकॉर्ड के अनुसार, एक विशेष प्राणी के अवशेष एक जीवित मेज़बान को अपनाते हैं…"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "설마… 아스트리엘이 제라드의 숙주가 된다는 말이야?",
						"english": "Surely... you don't mean Astriel is becoming Zerard's host?",
						"japanese": "まさか…アストリエルがゼラードの宿主になるって言うの？",
						"chinese": "难道说……阿斯特丽尔会成为杰拉德的宿主？",
						"french": "Vous ne voulez pas dire… qu'Astriel est en train de devenir l'hôte de Zerard ?",
						"spanish": "¿No querrás decir… que Astriel se está convirtiendo en la anfitriona de Zerard?",
						"vietnamese": "Chẳng lẽ… Astriel sẽ trở thành vật chủ của Zerard?",
						"thai": "อย่าบอกนะว่า… แอสเทรียลกำลังจะกลายเป็นร่างสถิตของซีราร์ด?",
						"hindi": "कहीं ऐसा तो नहीं… कि एस्ट्रीयल ज़रार्ड का मेज़बान बन रही है?"
					}
				},
				{
					"content": {
						"korean": "가능성을 배제할 수 없습니다. 그녀의 몸 안에서… 무언가가 반응하고 있어요.",
						"english": "We cannot rule out the possibility. Inside her body... something is reacting.",
						"japanese": "その可能性は排除できません。彼女の体内で…何かが反応しています。",
						"chinese": "我们不能排除这种可能性。在她体内……有什么东西正在产生反应。",
						"french": "Nous ne pouvons pas exclure cette possibilité. À l'intérieur de son corps… quelque chose réagit.",
						"spanish": "No podemos descartar esa posibilidad. Dentro de su cuerpo… algo está reaccionando.",
						"vietnamese": "Chúng ta không thể loại trừ khả năng đó. Bên trong cơ thể cô ấy… có thứ gì đó đang phản ứng.",
						"thai": "เราตัดความเป็นไปได้นั้นทิ้งไม่ได้ครับ ในร่างกายของเธอ… มีบางอย่างกำลังตอบสนองอยู่",
						"hindi": "हम इस संभावना को खारिज नहीं कर सकते। उसके शरीर के अंदर… कुछ प्रतिक्रिया कर रहा है।"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 기록을 보십시오. '두 번째 얼음 심장'에 대한 언급입니다.",
						"english": "Look at this record. It mentions 'The Second Ice Heart'.",
						"japanese": "この記録を見てください。「第二の氷の心臓」について言及されています。",
						"chinese": "看看这份记录。里面提到了“第二颗冰之心”。",
						"french": "Regardez ce document. Il mentionne le « Deuxième Cœur de Glace ».",
						"spanish": "Mira este registro. Menciona el \"Segundo Corazón de Hielo\".",
						"vietnamese": "Hãy xem ghi chép này. Nó nhắc đến 'Trái tim băng giá thứ hai'.",
						"thai": "ดูบันทึกนี้สิ มันกล่าวถึง 'หัวใจน้ำแข็งดวงที่สอง'",
						"hindi": "इस अभिलेख को देखें। इसमें 'दूसरा बर्फीला हृदय' का उल्लेख है।"
					}
				},
				{
					"content": {
						"korean": "두 번째 얼음 심장? 그게 뭔데? 제라드랑 관련 있어?",
						"english": "The Second Ice Heart? What is that? Is it related to Gerard?",
						"japanese": "第二の氷の心臓？それは何だ？ジェラールと関係があるのか？",
						"chinese": "第二颗冰之心？那是什么？和杰拉德有关吗？",
						"french": "Le Deuxième Cœur de Glace ? Qu'est-ce que c'est ? Est-ce lié à Gérard ?",
						"spanish": "¿El Segundo Corazón de Hielo? ¿Qué es eso? ¿Está relacionado con Gerard?",
						"vietnamese": "Trái tim băng giá thứ hai? Đó là gì? Có liên quan đến Gerard không?",
						"thai": "หัวใจน้ำแข็งดวงที่สองเหรอ? มันคืออะไร? เกี่ยวกับเจอราร์ดหรือเปล่า?",
						"hindi": "दूसरा बर्फीला हृदय? वो क्या है? क्या ये जेरार्ड से संबंधित है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "세계의 균형을 유지하고 동시에 파괴할 수 있는 힘을 가졌다는… 기록입니다.",
						"english": "It's a record... of a power capable of maintaining and simultaneously destroying the world's balance.",
						"japanese": "世界の均衡を保ち、同時に破壊することもできる力を持つと…記録されています。",
						"chinese": "记录上说，它拥有维持世界平衡，同时也能将其摧毁的力量。",
						"french": "C'est un document… mentionnant un pouvoir capable de maintenir et de détruire simultanément l'équilibre du monde.",
						"spanish": "Es un registro... de un poder capaz de mantener y, al mismo tiempo, destruir el equilibrio del mundo.",
						"vietnamese": "Đó là ghi chép... về một sức mạnh có thể duy trì và đồng thời phá hủy sự cân bằng của thế giới.",
						"thai": "มันคือบันทึก... ถึงพลังที่สามารถรักษาสมดุลของโลกและทำลายมันได้พร้อมกัน",
						"hindi": "यह एक अभिलेख है... ऐसी शक्ति का जो दुनिया का संतुलन बनाए रखने और साथ ही उसे नष्ट करने में सक्षम है।"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "파괴라고? 그럼 아스트리엘이 정말 위험하다는 거야?",
						"english": "Destruction? So Astriel is truly in danger?",
						"japanese": "破壊だと？じゃあ、アストリエルは本当に危険だというのか？",
						"chinese": "摧毁？那么阿斯特丽尔真的有危险了？",
						"french": "Destruction ? Alors Astriel est vraiment en danger ?",
						"spanish": "¿Destrucción? ¿Entonces Astriel está realmente en peligro?",
						"vietnamese": "Phá hủy ư? Vậy Astriel thực sự đang gặp nguy hiểm sao?",
						"thai": "ทำลายงั้นเหรอ? งั้นแอสเทรียลก็ตกอยู่ในอันตรายจริงๆ สินะ?",
						"hindi": "विनाश? तो क्या एस्ट्रियल वाकई खतरे में है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "제라드가 다시 나타난다면… 그녀가 핵심이 될 수도 있습니다.",
						"english": "If Gerard reappears... she could become the key.",
						"japanese": "もしジェラールが再び現れるなら…彼女が鍵となるかもしれません。",
						"chinese": "如果杰拉德再次出现……她可能会成为关键。",
						"french": "Si Gérard réapparaît… elle pourrait devenir la clé.",
						"spanish": "Si Gerard reaparece... ella podría ser la clave.",
						"vietnamese": "Nếu Gerard xuất hiện trở lại... cô ấy có thể trở thành chìa khóa.",
						"thai": "ถ้าเจอราร์ดปรากฏตัวอีกครั้ง... เธออาจเป็นกุญแจสำคัญ",
						"hindi": "अगर जेरार्ड फिर से प्रकट हुआ... तो वह मुख्य हो सकती है।"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 무슨 수를 써서라도 막아야 해!",
						"english": "No! We must stop him, no matter the cost!",
						"japanese": "ダメだ！何としても止めなければならない！",
						"chinese": "不！无论如何都得阻止他！",
						"french": "Non ! Il faut l'arrêter à tout prix !",
						"spanish": "¡No! ¡Debemos detenerlo a toda costa!",
						"vietnamese": "Không! Phải ngăn chặn bằng mọi giá!",
						"thai": "ไม่นะ! ต้องหยุดมันให้ได้ไม่ว่าจะด้วยวิธีใดก็ตาม!",
						"hindi": "नहीं! हमें उसे हर हाल में रोकना होगा!"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "불길한 그림자가 방을 가득 채웠다.",
						"english": "An ominous shadow filled the room.",
						"japanese": "不吉な影が部屋を満たした。",
						"chinese": "不祥的阴影笼罩了整个房间。",
						"french": "Une ombre sinistre envahit la pièce.",
						"spanish": "Una sombra siniestra llenó la habitación.",
						"vietnamese": "Một cái bóng đáng sợ bao trùm căn phòng.",
						"thai": "เงาลางร้ายปกคลุมทั่วห้อง",
						"hindi": "एक अशुभ परछाई ने कमरा भर दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "왔구나. 제라드의 그림자를 쫓는 어리석은 자들.",
						"english": "You've come. Foolish ones, chasing Gerard's shadow.",
						"japanese": "来たか。ジェラールの影を追う愚か者どもめ。",
						"chinese": "你们来了。追逐杰拉德影子的愚蠢之人。",
						"french": "Vous voilà. Insensés, à courir après l'ombre de Gérard.",
						"spanish": "Habéis venido. Necios, persiguiendo la sombra de Gerard.",
						"vietnamese": "Các ngươi đã đến. Những kẻ ngu ngốc đuổi theo bóng của Gerard.",
						"thai": "มาแล้วสินะ พวกคนโง่ที่ไล่ตามเงาของเจอราร์ด",
						"hindi": "तुम आ गए। मूर्खों, जेरार्ड की परछाई का पीछा करते हुए।"
					}
				},
				{
					"content": {
						"korean": "너는 누구냐! 제라드와 무슨 관계지?",
						"english": "Who are you?! What is your connection to Gerard?",
						"japanese": "貴様は何者だ！ジェラールとどういう関係だ？",
						"chinese": "你是谁？！和杰拉德有什么关系？",
						"french": "Qui es-tu ?! Quel est ton lien avec Gérard ?",
						"spanish": "¡¿Quién eres?! ¿Qué relación tienes con Gerard?",
						"vietnamese": "Ngươi là ai?! Ngươi có liên quan gì đến Gerard?",
						"thai": "แกเป็นใคร! เกี่ยวข้องอะไรกับเจอราร์ด?",
						"hindi": "तुम कौन हो! जेरार्ड से तुम्हारा क्या संबंध है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는… 그저 그의 뜻을 따를 뿐. 너희는 방해가 될 뿐이다.",
						"english": "I merely... follow his will. You are nothing but an obstruction.",
						"japanese": "私は…ただ彼の意志に従うのみ。お前たちは邪魔なだけだ。",
						"chinese": "我只是……追随他的旨意。你们不过是障碍。",
						"french": "Je ne fais que… suivre sa volonté. Vous n'êtes qu'une entrave.",
						"spanish": "Yo solo... sigo su voluntad. Vosotros sois solo un estorbo.",
						"vietnamese": "Ta chỉ... tuân theo ý muốn của hắn. Các ngươi chỉ là chướng ngại mà thôi.",
						"thai": "ข้าเพียงแค่... ทำตามเจตจำนงของเขา พวกเจ้าเป็นแค่อุปสรรคเท่านั้น",
						"hindi": "मैं बस... उसकी इच्छा का पालन करता हूँ। तुम बस एक बाधा हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜! 우리가 직접 끝낼 거야!",
						"english": "Out of the way! We'll finish this ourselves!",
						"japanese": "どけ！俺たちが直接終わらせる！",
						"chinese": "让开！我们自己来解决！",
						"french": "Écartez-vous ! Nous allons en finir nous-mêmes !",
						"spanish": "¡Quítense! ¡Lo terminaremos nosotros mismos!",
						"vietnamese": "Tránh ra! Tụi ta sẽ tự tay kết thúc chuyện này!",
						"thai": "หลีกไป! เราจะจัดการเอง!",
						"hindi": "हट जाओ! हम इसे खुद खत्म करेंगे!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 미숙한… 힘으로는… 막을 수 없어…",
						"english": "Ugh... Such raw... power... cannot be stopped...",
						"japanese": "くっ…未熟な…力では…止められない…",
						"chinese": "呃啊…凭这…稚嫩的力量…无法阻止…",
						"french": "Urgh… Une telle… force… ne peut être arrêtée…",
						"spanish": "Ugh... Con un poder... tan inmaduro... no se puede detener...",
						"vietnamese": "Khụ… Sức mạnh… non nớt… không thể ngăn cản…",
						"thai": "อึก... พลัง... ที่อ่อนด้อย... ไม่อาจหยุดได้...",
						"hindi": "उफ़… इस अपरिपक्व… शक्ति से… रोका नहीं जा सकता…"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제라드의 부활은… 정해진 운명….",
						"english": "Gerard's revival is... a predestined fate...",
						"japanese": "ジェラードの復活は…定められた運命…。",
						"chinese": "杰拉德的复活…是注定的命运…",
						"french": "La résurrection de Gerard est… un destin inéluctable…",
						"spanish": "El resurgimiento de Gerard es… un destino sellado…",
						"vietnamese": "Sự hồi sinh của Gerard là… định mệnh đã an bài…",
						"thai": "การคืนชีพของเจอราร์ดคือ... ชะตากรรมที่ถูกกำหนดไว้แล้ว...",
						"hindi": "जेरार्ड का पुनरुत्थान… एक पूर्वनिश्चित भाग्य है…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "제라드! 어디 있는 거야! 당장 나와!",
						"english": "Gerard! Where are you?! Show yourself, now!",
						"japanese": "ジェラード！どこだ！今すぐ出てこい！",
						"chinese": "杰拉德！你在哪！快出来！",
						"french": "Gerard ! Où es-tu ?! Montre-toi, tout de suite !",
						"spanish": "¡Gerard! ¿Dónde estás? ¡Sal ahora mismo!",
						"vietnamese": "Gerard! Ngươi đang ở đâu! Mau xuất hiện đi!",
						"thai": "เจอราร์ด! แกอยู่ที่ไหน! ออกมาเดี๋ยวนี้!",
						"hindi": "जेरार्ड! तुम कहाँ हो! अभी सामने आओ!"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그림자 의회의 잔당들이 원소의 정수를 모으고 있다는… 소문이 사실인가 봅니다.",
						"english": "It seems the rumors are true... the remnants of the Shadow Council are gathering elemental essences.",
						"japanese": "影の評議会の残党が元素の精髄を集めているという…噂は本当のようです。",
						"chinese": "看来…关于暗影议会残党正在收集元素精粹的传闻…是真的。",
						"french": "Il semblerait que les rumeurs soient vraies… les vestiges du Conseil de l'Ombre rassemblent des essences élémentaires.",
						"spanish": "Parece que los rumores son ciertos… los remanentes del Consejo Sombrío están reuniendo esencias elementales.",
						"vietnamese": "Có vẻ như tin đồn về việc tàn dư của Hội đồng Bóng tối đang thu thập tinh chất nguyên tố… là sự thật.",
						"thai": "ดูเหมือนว่าข่าวลือที่ว่ากลุ่มที่เหลือของสภาเงากำลังรวบรวมแก่นแท้แห่งธาตุ... จะเป็นเรื่องจริง",
						"hindi": "लगता है कि परछाई परिषद के बचे हुए सदस्य मौलिक तत्वों का सार इकट्ठा कर रहे हैं… यह अफवाह सच है।"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "'두 번째 얼음 심장'의 비밀은 아직 드러나지 않았다.",
						"english": "The secret of 'The Second Ice Heart' has yet to be revealed.",
						"japanese": "『第二の氷の心臓』の秘密はまだ明かされていない。",
						"chinese": "‘第二颗冰之心’的秘密尚未揭露。",
						"french": "Le secret du 'Deuxième Cœur de Glace' n'a pas encore été révélé.",
						"spanish": "El secreto del 'Segundo Corazón de Hielo' aún no ha sido revelado.",
						"vietnamese": "Bí mật của 'Trái Tim Băng Giá Thứ Hai' vẫn chưa được tiết lộ.",
						"thai": "ความลับของ 'หัวใจน้ำแข็งดวงที่สอง' ยังไม่ถูกเปิดเผย",
						"hindi": "'दूसरे बर्फ़ीले दिल' का रहस्य अभी तक उजागर नहीं हुआ है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들. 너희의 의지는… 그림자에 삼켜질 것이다.",
						"english": "Insignificant beings. Your will... shall be swallowed by the shadows.",
						"japanese": "取るに足らない者たち。お前たちの意志は…影に飲み込まれるだろう。",
						"chinese": "微不足道的存在。你们的意志…将被阴影吞噬。",
						"french": "Créatures insignifiantes. Votre volonté… sera engloutie par les ombres.",
						"spanish": "Seres insignificantes. Vuestra voluntad… será tragada por las sombras.",
						"vietnamese": "Lũ tầm thường. Ý chí của các ngươi… sẽ bị bóng tối nuốt chửng.",
						"thai": "พวกไร้ค่า. เจตจำนงของพวกเจ้า... จะถูกกลืนกินโดยเงามืด",
						"hindi": "तुच्छ प्राणी। तुम्हारी इच्छा… अंधकार में समा जाएगी।"
					}
				},
				{
					"content": {
						"korean": "젠장… 여기서 끝낼 순 없어! 다시 싸울 거야!",
						"english": "Damn it... It can't end here! I'll fight again!",
						"japanese": "くそ…ここで終わらせるわけにはいかない！もう一度戦う！",
						"chinese": "该死…不能在这里结束！我要再战！",
						"french": "Maudits… Ça ne peut pas finir ici ! Je me battrai encore !",
						"spanish": "¡Maldición...! ¡No puede terminar aquí! ¡Volveré a luchar!",
						"vietnamese": "Chết tiệt… Không thể kết thúc ở đây được! Ta sẽ chiến đấu lại!",
						"thai": "บ้าจริง... จะมาจบแค่นี้ไม่ได้! จะสู้ใหม่!",
						"hindi": "धिक्कार है… यह यहाँ ख़त्म नहीं हो सकता! मैं फिर से लड़ूँगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "포기해라. 너희는 제라드의 그림자에서 벗어날 수 없어.",
						"english": "Give up. You cannot escape Gerard's shadow.",
						"japanese": "諦めろ。お前たちはジェラードの影から逃れられない。",
						"chinese": "放弃吧。你们无法摆脱杰拉德的阴影。",
						"french": "Abandonnez. Vous ne pouvez échapper à l'ombre de Gerard.",
						"spanish": "Ríndanse. No podéis escapar de la sombra de Gerard.",
						"vietnamese": "Hãy bỏ cuộc đi. Các ngươi không thể thoát khỏi cái bóng của Gerard đâu.",
						"thai": "ยอมแพ้ซะ. พวกเจ้าหนีเงาของเจอราร์ดไม่พ้นหรอก.",
						"hindi": "हार मान लो। तुम जेरार्ड की छाया से बच नहीं सकते।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세계에 혼돈이 가득했다. 원소의 정수가 모든 것을 뒤흔들었다.",
			"아스트리엘은 점점 불안정해졌다. 악몽 속에서 그 이름이 들렸다. 제라드.",
			"과거의 그림자가 다시 드리운다. 학자 이바르와 함께 진실을 찾아야 한다.",
			"모든 조각이 맞춰질 때, 어떤 참사가 기다리고 있을까?"
		],
		"english": [
			"The world was filled with chaos. The essence of elements shook everything.",
			"Astriel grew unstable. In nightmares, that name was heard. Gerard.",
			"Shadows of the past fall again. With scholar Ivar, the truth must be found.",
			"When all pieces fit, what catastrophe awaits?"
		],
		"japanese": [
			"世界は混沌に満ちていた。元素の精髄がすべてを揺るがした。",
			"アストリエルは次第に不安定になった。悪夢の中でその名前が聞こえた。ジェラード。",
			"過去の影が再び忍び寄る。学者イヴァーと共に真実を探さねば。",
			"すべてのピースが揃う時、どんな惨事が待ち受けるのか？"
		],
		"chinese": [
			"世界充满了混沌。元素精华动摇了一切。",
			"阿斯特里尔变得越来越不稳定。在噩梦中听到了那个名字。杰拉德。",
			"过去的阴影再次笼罩。必须与学者伊瓦尔一起寻找真相。",
			"当所有碎片拼凑完整时，怎样的灾难在等待？"
		],
		"french": [
			"Le monde était rempli de chaos. L'essence des éléments secouait tout.",
			"Astriel devenait instable. Dans ses cauchemars, ce nom résonnait. Gérard.",
			"Les ombres du passé reviennent. Avec le savant Ivar, la vérité doit être trouvée.",
			"Quand toutes les pièces s'assembleront, quelle catastrophe nous attendra ?"
		],
		"spanish": [
			"El mundo estaba lleno de caos. La esencia de los elementos lo sacudió todo.",
			"Astriel se volvió inestable. En las pesadillas, se escuchaba ese nombre. Gerard.",
			"Las sombras del pasado vuelven a caer. Con el erudito Ivar, la verdad debe ser hallada.",
			"Cuando todas las piezas encajen, ¿qué catástrofe esperará?"
		],
		"vietnamese": [
			"Thế giới tràn ngập hỗn loạn. Tinh hoa nguyên tố làm rung chuyển mọi thứ.",
			"Astriel ngày càng bất ổn. Trong ác mộng, cái tên đó được nghe thấy. Gerard.",
			"Bóng tối quá khứ lại bao trùm. Cùng học giả Ivar, phải tìm ra sự thật.",
			"Khi tất cả mảnh ghép khớp, thảm họa nào đang chờ đợi?"
		],
		"thai": [
			"โลกเต็มไปด้วยความสับสนวุ่นวาย แก่นแท้ของธาตุได้เขย่าทุกสิ่ง",
			"แอสเทรียลเริ่มไม่มั่นคง ในฝันร้าย ชื่อนั้นได้ยิน เจอราร์ด",
			"เงาของอดีตหวนคืนมาอีกครั้ง ต้องค้นหาความจริงกับนักปราชญ์ไอวาร์",
			"เมื่อชิ้นส่วนทั้งหมดเข้าที่ ภัยพิบัติใดกำลังรออยู่?"
		],
		"hindi": [
			"दुनिया अराजकता से भरी थी। तत्वों का सार सब कुछ हिला रहा था。",
			"एस्ट्रेल अस्थिर होता जा रहा था। बुरे सपने में वह नाम सुनाई दिया। जेरार्ड।",
			"अतीत की परछाई फिर से छा रही है। विद्वान इवार के साथ सत्य खोजना होगा।",
			"जब सभी टुकड़े जुड़ जाएंगे, तो कौन सी आपदा इंतजार कर रही होगी?"
		]
	}
} as const;
